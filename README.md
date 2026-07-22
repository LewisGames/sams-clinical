# SAMS Clinical — EMS Protocol Reference

A clinical reference and protocol tool for EMS medics on FiveM RP servers.
48 protocols across 10 clinical categories, a 41-drug formulary, step-by-step
decision trees, a plain-English quick reference for basic medics, global search,
and a permission-gated in-app editor for command staff.

**Works two ways — no config needed:**
- **With LB Tablet** — registers as a custom tablet app automatically
- **Without LB Tablet** — opens as a standalone overlay via the `/sams` command

Both modes share the same server backend and data. Edits made in either are
instantly visible in the other.

> **Roleplay reference only.** Drug doses are written to feel realistic but were
> built for a game, not transcribed from a live clinical guideline. Have a member
> with real EMS/nursing knowledge review them before treating them as your
> server's standard.

---

## Requirements

| Dependency | Required | Why |
|---|---|---|
| [ox_lib](https://github.com/overextended/ox_lib) | **Yes** | Server ↔ client callbacks, notifications, input dialogs |
| **QBox (qbx_core)** *or* **QBCore (qb-core)** *or* **ESX** | **Yes** | Job and grade checks — auto-detected at runtime |
| [LB Tablet](https://lbscripts.com/) | No | If present, registers as a custom tablet app. If not, the `/sams` command still works. |
| [ox_target](https://github.com/overextended/ox_target) *or* [qb-target](https://github.com/qbcore-framework/qb-target) | No | Enables the 3rd-eye "Issue Meds" interaction on players. Silently skipped if neither is running. |

> ox_lib ships with QBox. If you are on QBCore or ESX you may need to install
> it separately — see the [ox_lib docs](https://overextended.dev/ox_lib).

---

## Install

1. Drop the `sams-clinical` folder into your server's `resources/`.

2. Add it to `server.cfg` **after** its dependencies:
   ```cfg
   ensure ox_lib
   ensure qbx_core   # or qb-core / es_extended
   ensure lb-tablet   # optional — remove this line if you don't use LB Tablet
   ensure sams-clinical
   ```

3. Restart the server (or `ensure sams-clinical` from the console).

**With LB Tablet:** The app registers itself automatically. Every player will
see it in their tablet's app list (or the app store if `DefaultApp` is `false`).

**Without LB Tablet:** The resource prints a message to the console confirming
standalone mode. Players use the `/sams` command to open it.

**With both:** Players get the tablet app *and* the `/sams` command. Both
share the same data.

---

## What's included

### Clinical content

The resource ships with a comprehensive clinical dataset in
`data/protocols.json`:

**10 categories:**

| Category | Colour | Protocols |
|---|---|---|
| Airway & Breathing | Sky | Airway obstruction, asthma, anaphylaxis, tension pneumothorax, pulmonary oedema |
| Cardiac | Red | Cardiac arrest, chest pain/ACS, bradycardia, tachycardia, heart failure |
| Trauma & Bleeding | Rose | Major haemorrhage, fractures, spinal injury, crush injury, penetrating trauma, blast injury, amputation |
| Medical | Violet | Diabetic emergency, seizures, sepsis, abdominal pain, allergic reaction, sickle cell crisis, adrenal crisis |
| Neuro | Amber | Stroke, head injury, altered consciousness, meningitis |
| Burns & Environment | Orange | Burns, hypothermia, hyperthermia/heatstroke, drowning, electrocution, smoke inhalation |
| Obstetrics | Teal | Normal delivery, pre-eclampsia, obstetric haemorrhage |
| Toxicology & Poisoning | Violet | Drug overdose, alcohol intoxication, carbon monoxide poisoning, chemical exposure |
| Mental Health | Teal | Acute behavioural disturbance, self-harm/suicide risk, psychotic episode |
| Paediatrics | Sky | Paediatric resuscitation, febrile convulsion, croup, paediatric trauma |

**48 protocols** — each with assessment points, red flags, treatment steps,
medication links, transport guidance, and an interactive decision tree.

**41 medications** — each with class, dose, route, indications, cautions,
notes, and cross-references to every protocol that uses it.

**Quick Reference** — a plain-English landing page for basic medics:
- "What do I do?" injury table (34 entries) — find the injury, read the action
- Assessment order (8 steps) — do these in order, every call
- Red/green transport decision boxes — when to go to hospital, when it's safe to stay

### Features

| Feature | Description |
|---|---|
| **Quick Ref** | Landing page with plain-English guidance, injury lookup table, and transport decisions |
| **Protocols** | Full clinical protocols grouped by category with priority badges (red/amber/green) |
| **Decision trees** | Interactive yes/no flowcharts that walk through clinical decision-making |
| **Formulary** | Expandable drug list with dose, route, indications, cautions, and "Used in" protocol links |
| **Global search** | Search across protocols, drugs, symptoms, and aliases |
| **Admin editor** | Create, edit, and delete protocols and drugs in-app with live save to server |
| **Issue Meds** | 3rd-eye interaction to administer medication to players via /me commands |
| **Dual mode** | Runs inside LB Tablet and as a standalone NUI — both share the same backend |
| **Light/dark theme** | Follows LB Tablet theme automatically, with a manual toggle |
| **Job restriction** | Optionally restrict the app to specific jobs (auto-detected framework) |
| **Persistent data** | Server-side JSON storage — edits survive restarts and are live for all players |

---

## System architecture

### Data flow

```
data/protocols.json  ←→  server.lua  ←→  client.lua  ←→  UI (index.html)
     (disk)              (read/write)    (NUI bridge)     (LB Tablet / standalone)
                              ↕
                         target.lua
                        (Issue Meds)
```

### How it works

1. **Server starts** → `server.lua` reads `data/protocols.json` into memory.
2. **Player opens app** → UI sends `getData` NUI callback → `client.lua`
   bridges to `server.lua` via `lib.callback` → server returns cached data.
3. **Permission check** → UI sends `canEdit` → server checks the player's job
   and grade against `EditorJobs`/`EditorMinGrade` → shows or hides the editor.
4. **Editor saves** → UI sends `saveData` with the full dataset → server
   re-checks permissions, writes JSON to disk, logs who saved.
5. **Issue Meds** → `target.lua` fetches the drug list via `getDrugs` callback,
   opens an ox_lib input dialog, fires a `/me` command on confirm.

Changes are live immediately — no restart needed.

### Server callbacks

| Callback | Direction | Purpose |
|---|---|---|
| `sams-clinical:getData` | Client → Server | Returns the full cached dataset |
| `sams-clinical:canEdit` | Client → Server | Returns `true`/`false` based on job + grade |
| `sams-clinical:getDrugs` | Client → Server | Returns a slim drug list (id, name, dose, route) for the meds picker |
| `sams-clinical:saveData` | Client → Server | Validates permissions, writes updated data to disk |

### NUI callbacks

| Callback | Direction | Purpose |
|---|---|---|
| `getData` | UI → Client | Bridges to server `getData` callback |
| `canEdit` | UI → Client | Bridges to server `canEdit` callback |
| `saveData` | UI → Client | Bridges to server `saveData` callback |
| `closeApp` | UI → Client | Releases NUI focus (standalone mode) |

### Files

| File | Purpose |
|---|---|
| `fxmanifest.lua` | Resource manifest — declares scripts, files, and `ui_page` |
| `client.lua` | LB Tablet registration, standalone NUI overlay, NUI ↔ server bridge |
| `server.lua` | Data persistence, permission checks, ox_lib callback handlers |
| `target.lua` | 3rd-eye "Issue Meds" player interaction (ox_target / qb-target) |
| `data/protocols.json` | All clinical content — single source of truth (~120 KB) |
| `ui/index.html` | The app UI — single-file HTML + CSS + JS |
| `ui/data.js` | Fallback data for previewing the UI outside FiveM (browser testing) |
| `ui/icon.png` | App icon shown in the LB Tablet app list |

### Framework support

Both client and server auto-detect which framework is running:

| Framework | Client (job display) | Server (editor permissions) |
|---|---|---|
| QBox (qbx_core) | `exports['qbx_core']:GetPlayerData()` | `exports['qbx_core']:GetPlayer(source)` |
| QBCore (qb-core) | `exports['qb-core']:GetCoreObject().Functions.GetPlayerData()` | `QBCore.Functions.GetPlayer(source)` |
| ESX (es_extended) | `exports['es_extended']:getSharedObject()` | `ESX.GetPlayerFromId(source)` |

No config needed — the code checks `GetResourceState()` and uses whichever
framework is started.

---

## Standalone mode

Type `/sams` in chat (or bind it to a key) to open the clinical reference as a
full-screen overlay. Press **Escape**, click the **Close** button in the sidebar,
or click the **X** button to close it.

The standalone NUI works independently of LB Tablet. If both are available,
players can use either — they share the same server data.

To change the command name, edit `client.lua`:
```lua
StandaloneCommand = 'sams',    -- change to whatever you like, e.g. 'medref'
```

Set it to `false` to disable the command entirely (tablet-only mode).

---

## Issue Meds (3rd-eye interaction)

Look at another player, hold **ALT** (3rd-eye), and select **Issue Meds**.
A dialog opens with:

1. **Medication** — searchable dropdown of every drug in the formulary
2. **Dose / Amount** — free text (e.g. `10mg`, `500ml`, `1g`)
3. **Route** — IV, IM, IO, Oral, Sublingual, Inhaled, Nebulised, Buccal,
   Intranasal, Topical, Rectal

On confirm it fires a `/me` command visible to nearby players:

> */me administers 10mg of Morphine IV*

Works with **ox_target** and **qb-target** (auto-detected). If neither is
running, this feature is silently skipped — the rest of the app works fine.

---

## Configuration

### Restrict the app to on-duty medics (optional)

Open `client.lua` and find the `RestrictToJobs` table near the top:

```lua
RestrictToJobs = {},   -- empty = everyone gets the app
```

Change it to your EMS job name(s):

```lua
RestrictToJobs = { 'ambulance' },
-- or multiple jobs:
RestrictToJobs = { 'ambulance', 'ems', 'sams' },
```

The app will appear when a player is on one of those jobs and disappear when
they clock off. The detection works with QBox, QBCore, and ESX automatically.

`DefaultApp = true` means the app is pre-installed on every tablet. Set it to
`false` if you want medics to download it from the tablet's app store instead.

### Editor permissions

Open `server.lua` and find the config block at the top:

```lua
local Config = {
    EditorJobs     = { 'ambulance' },
    EditorMinGrade = 3,
}
```

| Setting | What it does |
|---|---|
| `EditorJobs` | Job name(s) that can access the in-app editor. Must match your framework's job name exactly (case-insensitive). |
| `EditorMinGrade` | Minimum grade level. A player must be on one of the editor jobs **and** at or above this grade to see the editor and save changes. |

**Example — only Lieutenants (grade 4+) on the `ems` job can edit:**
```lua
EditorJobs     = { 'ems' },
EditorMinGrade = 4,
```

> **How to find your job name and grades:**
> Check your framework's shared config (e.g. `qbx_core/shared/jobs.lua` or
> `qb-core/shared/jobs.lua`). Look for your EMS/ambulance entry — the key is
> the job name, and each grade has a `level` number starting at 0.

### All config options

| Option | File | Default | Description |
|---|---|---|---|
| `EditorJobs` | server.lua | `{ 'ambulance' }` | Jobs allowed to use the admin editor |
| `EditorMinGrade` | server.lua | `3` | Minimum grade to access the editor |
| `StandaloneCommand` | client.lua | `'sams'` | Chat command to open standalone mode (`false` to disable) |
| `RestrictToJobs` | client.lua | `{}` (everyone) | Jobs that can see the app |
| `DefaultApp` | client.lua | `true` | Pre-install on tablet or require download |
| `JobCheckInterval` | client.lua | `10000` | How often (ms) to re-check job for app visibility |
| `Identifier` | client.lua | `'sams-clinical'` | Internal app ID for LB Tablet |
| `AppName` | client.lua | `'SAMS Clinical'` | Display name in the tablet |
| `Description` | client.lua | `'Protocols, formulary and decision trees'` | App description in the tablet |

---

## Editing the content

### In-app editor (recommended)

1. Log in as a character whose job and grade meet the editor requirements.
2. Open the tablet (or `/sams`) → **Admin editor** tab.
3. Add, edit, or delete protocols and drugs using the form fields.
4. Click **Save to server** — changes are written to disk instantly and visible
   to every player immediately.

The editor also has **Export data.js** and **Import data.js** buttons for
backing up or migrating data between servers.

### Editing the file directly

Open `data/protocols.json` in any text editor. The structure is:

```jsonc
{
  "meta": { "service": "...", "version": "...", "disclaimer": "..." },
  "categories": [ { "id": "cardiac", "name": "Cardiac", "colour": "red" }, ... ],
  "drugs": [ { "id": "morphine", "name": "Morphine", "dose": "...", ... }, ... ],
  "protocols": [ { "id": "cardiac-arrest", "name": "Cardiac Arrest", ... }, ... ],
  "quickRef": {
    "injuryTable": [ { "injury": "...", "onScene": "...", "hospital": "..." }, ... ],
    "assessmentOrder": [ "Step 1", "Step 2", ... ],
    "alwaysTransport": [ "Reason 1", ... ],
    "safeOnScene": [ "Condition 1", ... ]
  }
}
```

After editing, restart the resource (`ensure sams-clinical`) to reload.

### Protocol structure

```jsonc
{
  "id": "cardiac-arrest",          // unique kebab-case ID
  "name": "Cardiac Arrest",        // display name
  "category": "cardiac",           // must match a category ID
  "priority": "red",               // red | amber | green
  "alsoKnownAs": ["CPR", "code"],  // helps search find it
  "summary": "One-line summary.",
  "assess": ["Point 1", "Point 2"],
  "redFlags": ["Transport trigger 1"],
  "treat": ["Step 1", "Step 2"],
  "drugs": ["adrenaline-arrest", "amiodarone"],  // must match drug IDs
  "transport": "When and how to transport.",
  "tree": {                        // decision tree
    "q": "Question?",
    "yes": "Action text",          // or another { q, yes, no } node
    "no": "Action text"
  }
}
```

### Drug structure

```jsonc
{
  "id": "morphine",
  "name": "Morphine",
  "class": "Opioid analgesic",
  "dose": "2.5–10 mg IV titrated; 5–10 mg IM",
  "route": "IV, IM",
  "indications": "Severe pain, chest pain (ACS), burns",
  "cautions": "Respiratory depression, hypotension, head injury",
  "notes": "Titrate slowly. Monitor respiratory rate."
}
```

### Updating the browser preview

If you edit `data/protocols.json` directly, regenerate the browser fallback:

```bash
python3 -c "
import json
with open('data/protocols.json') as f: d = json.load(f)
js = 'const SAMS_DATA = ' + json.dumps(d, indent=2) + ';\n'
with open('ui/data.js', 'w') as f: f.write(js)
print('data.js updated')
"
```

This is only needed for previewing the UI in a web browser outside FiveM.
The in-game app always loads data from the server.

---

## Customising the look

### App icon

Replace `ui/icon.png` with your department's badge (keep the same filename)
and restart the resource.

### Theme

The app supports light and dark mode automatically. LB Tablet sets a
`data-theme` attribute and the app follows it. There is also a manual Theme
toggle button in the top bar.

### Colours and branding

The brand colour (used for the sidebar logo and accents) is set in the CSS
variables at the top of `ui/index.html`:

```css
--brand:#c0392b;    /* light mode */
--brand:#e05c4c;    /* dark mode — inside the [data-theme="dark"] block */
```

Change these to your department's colour.

---

## LB Tablet integration

The app follows the [LB Tablet custom app API](https://docs.lbscripts.com/tablet/script-integration/custom-apps/).

- Uses `ui_page` directive in `fxmanifest.lua` (not `ui_page_preload`)
- Registers via `exports['lb-tablet']:AddCustomApp()` with `ui`, `onOpen`,
  `onClose` callbacks
- Listens for the `componentsLoaded` message to initialise
- Uses `globalThis.fetchNui()` for NUI communication (with raw `fetch` fallback
  for standalone mode)
- Calls `globalThis.closeApp()` to close from within the tablet

If LB Tablet isn't running, the resource waits up to 10 seconds then falls
back to standalone-only mode.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| App doesn't appear in the tablet | Check `server.cfg` load order — `lb-tablet` must start before `sams-clinical`. Check the server console for error messages. |
| "Failed to register app" in console | LB Tablet isn't started or isn't the right version. Make sure you're on a recent LB Tablet release. |
| Admin editor tab is missing | Your character's job or grade doesn't meet the `EditorJobs` / `EditorMinGrade` requirements in `server.lua`. |
| Save fails with "Permission denied" | Same as above — the server re-checks permissions on every save. |
| Data doesn't update after editing the JSON file | Restart the resource: `ensure sams-clinical`. The server only reads the file on start. |
| App shows but is blank or has no data | Check for errors in the F8 console. Make sure `ox_lib` is started before this resource. |
| `/sams` command doesn't work | Make sure `StandaloneCommand` is not set to `false` in `client.lua`. |
| Issue Meds option doesn't appear | Neither `ox_target` nor `qb-target` is running. Install one of them. |
| Issue Meds dialog is empty | The drug list failed to load from the server. Check F8 for errors. |
| App is visible to everyone | Set `RestrictToJobs` in `client.lua` to limit it to your EMS job(s). |
| Editor works but `/me` doesn't fire | The Issue Meds feature requires the player to have `/me` command access (standard in most frameworks). |

---

## Migrating to a different server

1. Copy the entire `sams-clinical` folder.
2. Update `EditorJobs` and `EditorMinGrade` in `server.lua` to match the new
   server's job names and grade structure.
3. Optionally update `RestrictToJobs` in `client.lua`.
4. Add to `server.cfg` and restart.

All clinical content travels with the resource in `data/protocols.json`.

To transfer content separately, use the in-app **Export data.js** button on the
source server, then **Import data.js** on the target.

---

## Credits

Built for San Andreas Medical Services.
Clinical content is for roleplay and should be reviewed by qualified staff
before adoption.

Version 3.0
