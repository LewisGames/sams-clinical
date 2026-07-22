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
    local player = exports['qbx_core']:GetPlayer(source)
    if not player then return false end
    local job = player.PlayerData.job
    if not job then return false end

    local jobName = string.lower(job.name)
    local grade = job.grade and job.grade.level or 0

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
