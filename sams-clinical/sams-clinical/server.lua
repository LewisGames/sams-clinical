local Config = {
    EditorJobs     = { 'ambulance' },
    EditorMinGrade = 3,
}

local DATA_PATH = GetResourcePath(GetCurrentResourceName()) .. '/data/protocols.json'
local cachedData = nil

local function loadData()
    local file = io.open(DATA_PATH, 'r')
    if not file then
        print(('[%s] WARNING: %s not found — starting with empty data'):format(GetCurrentResourceName(), DATA_PATH))
        cachedData = { meta = {}, categories = {}, drugs = {}, protocols = {} }
        return
    end
    local raw = file:read('*a')
    file:close()
    cachedData = json.decode(raw)
    if not cachedData then
        print(('[%s] ERROR: failed to parse protocols.json'):format(GetCurrentResourceName()))
        cachedData = { meta = {}, categories = {}, drugs = {}, protocols = {} }
    end
end

local function saveData()
    local raw = json.encode(cachedData)
    local file = io.open(DATA_PATH, 'w')
    if not file then
        print(('[%s] ERROR: could not write to %s'):format(GetCurrentResourceName(), DATA_PATH))
        return false
    end
    file:write(raw)
    file:close()
    return true
end

local function canEdit(source)
    local jobName, grade

    if GetResourceState('qbx_core') == 'started' then
        local player = exports['qbx_core']:GetPlayer(source)
        if not player then return false end
        local job = player.PlayerData.job
        if not job then return false end
        jobName = string.lower(job.name)
        grade = job.grade and job.grade.level or 0
    elseif GetResourceState('qb-core') == 'started' then
        local QBCore = exports['qb-core']:GetCoreObject()
        local player = QBCore.Functions.GetPlayer(source)
        if not player then return false end
        local job = player.PlayerData.job
        if not job then return false end
        jobName = string.lower(job.name)
        grade = job.grade and job.grade.level or 0
    elseif GetResourceState('es_extended') == 'started' then
        local ESX = exports['es_extended']:getSharedObject()
        local xPlayer = ESX.GetPlayerFromId(source)
        if not xPlayer then return false end
        local job = xPlayer.getJob()
        if not job then return false end
        jobName = string.lower(job.name)
        grade = job.grade or 0
    else
        return false
    end

    for _, allowed in ipairs(Config.EditorJobs) do
        if string.lower(allowed) == jobName and grade >= Config.EditorMinGrade then
            return true
        end
    end
    return false
end

loadData()

lib.callback.register('sams-clinical:getData', function()
    return cachedData
end)

lib.callback.register('sams-clinical:canEdit', function(source)
    return canEdit(source)
end)

lib.callback.register('sams-clinical:getDrugs', function()
    if not cachedData or not cachedData.drugs then return {} end
    local list = {}
    for _, d in ipairs(cachedData.drugs) do
        list[#list + 1] = { id = d.id, name = d.name, dose = d.dose, route = d.route }
    end
    return list
end)

lib.callback.register('sams-clinical:saveData', function(source, newData)
    if not canEdit(source) then
        return { ok = false, error = 'Permission denied' }
    end

    if type(newData) ~= 'table' then
        return { ok = false, error = 'Invalid data' }
    end

    newData.meta = newData.meta or {}
    newData.meta.updated = os.date('%Y-%m-%d %H:%M')

    cachedData = newData

    if saveData() then
        local name = GetPlayerName(source) or 'Unknown'
        print(('[%s] Data saved by %s (id: %d)'):format(GetCurrentResourceName(), name, source))
        return { ok = true }
    else
        return { ok = false, error = 'Server write failed' }
    end
end)
