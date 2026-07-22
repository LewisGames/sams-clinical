--[[
    SAMS Clinical — 3rd-eye "Issue Meds" target

    Look at a player, hold ALT (ox_target / qb-target), select "Issue Meds".
    Pick a drug from the formulary, enter a dose, and it fires a /me.

    Uses the same job restriction as the main app (Config.RestrictToJobs in client.lua).
    If RestrictToJobs is empty, any player can issue meds.
]]

local drugCache = nil

local function getDrugList()
    if drugCache then return drugCache end
    drugCache = lib.callback.await('sams-clinical:getDrugs', false)
    return drugCache or {}
end

local function buildDrugOptions()
    local drugs = getDrugList()
    local opts = {}
    for _, d in ipairs(drugs) do
        opts[#opts + 1] = { value = d.id, label = d.name }
    end
    return opts
end

local function findDrug(id)
    local drugs = getDrugList()
    for _, d in ipairs(drugs) do
        if d.id == id then return d end
    end
    return nil
end

local function issueMeds(targetId)
    local opts = buildDrugOptions()
    if #opts == 0 then
        lib.notify({ title = 'SAMS Clinical', description = 'No medications loaded', type = 'error' })
        return
    end

    local input = lib.inputDialog('Issue Medication', {
        { type = 'select', label = 'Medication', options = opts, required = true, searchable = true },
        { type = 'input',  label = 'Dose / Amount', placeholder = 'e.g. 10mg, 500ml, 1g', required = true },
        { type = 'select', label = 'Route', options = {
            { value = 'IV',           label = 'IV (into vein)' },
            { value = 'IM',           label = 'IM (into muscle)' },
            { value = 'IO',           label = 'IO (intraosseous)' },
            { value = 'Oral',         label = 'Oral' },
            { value = 'Sublingual',   label = 'Sublingual (under tongue)' },
            { value = 'Inhaled',      label = 'Inhaled' },
            { value = 'Nebulised',    label = 'Nebulised' },
            { value = 'Buccal',       label = 'Buccal (inside cheek)' },
            { value = 'Intranasal',   label = 'Intranasal' },
            { value = 'Topical',      label = 'Topical (on skin)' },
            { value = 'Rectal',       label = 'Rectal' },
        }, required = true },
    })

    if not input then return end

    local drugId = input[1]
    local dose   = input[2]
    local route  = input[3]
    local drug   = findDrug(drugId)
    local name   = drug and drug.name or drugId

    ExecuteCommand(('me administers %s of %s %s'):format(dose, name, route))
end

CreateThread(function()
    while GetResourceState('ox_target') ~= 'started' and GetResourceState('qb-target') ~= 'started' do
        Wait(500)
    end
    Wait(500)

    if GetResourceState('ox_target') == 'started' then
        exports.ox_target:addGlobalPlayer({
            {
                name = 'sams_issue_meds',
                icon = 'fas fa-syringe',
                label = 'Issue Meds',
                onSelect = function(data)
                    issueMeds(data.entity)
                end,
            }
        })
    elseif GetResourceState('qb-target') == 'started' then
        exports['qb-target']:AddGlobalPlayer({
            options = {
                {
                    type = 'client',
                    icon = 'fas fa-syringe',
                    label = 'Issue Meds',
                    action = function(entity)
                        issueMeds(entity)
                    end,
                }
            },
            distance = 2.5,
        })
    end
end)
