--[[
    SAMS Clinical — LB Tablet custom app

    Config below. If RestrictToJobs is empty the app is available to everyone.
    If it has entries, the app is added when the player is on one of those jobs
    and removed when they are not.
]]

local Config = {
    Identifier   = 'sams-clinical',
    AppName      = 'SAMS Clinical',
    Description  = 'Protocols, formulary and decision trees',
    Developer    = 'SAMS Command',
    Size         = 420,
    DefaultApp   = true,

    -- e.g. { 'ambulance', 'ems', 'sams' }  |  leave empty for everyone
    RestrictToJobs = {},

    -- how often (ms) to re-check the player's job. only used if RestrictToJobs is set
    JobCheckInterval = 10000
}

local registered = false
local appOpen = false

local function getJob()
    if GetResourceState('qbx_core') == 'started' then
        local pd = exports['qbx_core']:GetPlayerData()
        return pd and pd.job and pd.job.name and string.lower(pd.job.name)
    elseif GetResourceState('qb-core') == 'started' then
        local pd = exports['qb-core']:GetCoreObject().Functions.GetPlayerData()
        return pd and pd.job and pd.job.name and string.lower(pd.job.name)
    elseif GetResourceState('es_extended') == 'started' then
        local xPlayer = exports['es_extended']:getSharedObject()
        local job = xPlayer and xPlayer.PlayerData and xPlayer.PlayerData.job
        return job and job.name and string.lower(job.name)
    end
    return nil
end

local function isAllowed()
    if #Config.RestrictToJobs == 0 then return true end
    local job = getJob()
    if not job then return false end
    for _, allowed in ipairs(Config.RestrictToJobs) do
        if string.lower(allowed) == job then return true end
    end
    return false
end

local uiUrl = GetResourceMetadata(GetCurrentResourceName(), 'ui_page', 0)

local function addApp()
    if registered then return end

    local ok, err = exports['lb-tablet']:AddCustomApp({
        identifier  = Config.Identifier,
        name        = Config.AppName,
        description = Config.Description,
        developer   = Config.Developer,
        size        = Config.Size,
        defaultApp  = Config.DefaultApp,
        icon        = uiUrl and uiUrl:find('http') and uiUrl .. '/icon.png' or '/ui/icon.png',
        ui          = uiUrl or 'ui/index.html',
        landscape   = true,

        onOpen = function()
            appOpen = true
        end,
        onClose = function()
            appOpen = false
        end,
    })

    if ok then
        registered = true
    else
        print(('[%s] failed to register app: %s'):format(GetCurrentResourceName(), err or 'unknown error'))
    end
end

local function removeApp()
    if not registered then return end
    exports['lb-tablet']:RemoveCustomApp(Config.Identifier)
    registered = false
end

CreateThread(function()
    while GetResourceState('lb-tablet') ~= 'started' do
        Wait(500)
    end

    Wait(1000)

    if #Config.RestrictToJobs == 0 then
        addApp()
        return
    end

    while true do
        if isAllowed() then
            addApp()
        else
            removeApp()
        end
        Wait(Config.JobCheckInterval)
    end
end)

AddEventHandler('onResourceStop', function(resource)
    if resource ~= GetCurrentResourceName() then return end
    removeApp()
end)

RegisterNUICallback('getData', function(_, cb)
    local data = lib.callback.await('sams-clinical:getData', false)
    cb(data or {})
end)

RegisterNUICallback('canEdit', function(_, cb)
    local allowed = lib.callback.await('sams-clinical:canEdit', false)
    cb({ allowed = allowed })
end)

RegisterNUICallback('saveData', function(body, cb)
    local result = lib.callback.await('sams-clinical:saveData', false, body.data)
    cb(result or { ok = false, error = 'No response from server' })
end)
