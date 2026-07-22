# SAMS Clinical — LB Tablet App

A clinical reference and protocol tool for EMS medics, built as a custom app
for [LB Tablet](https://lbscripts.com/). Protocols, a drug formulary, step-by-step
decision trees, global search, and an in-app editor for command staff — all
inside the tablet.

> **Roleplay reference only.** Drug doses are written to feel realistic but were
> built for a game, not transcribed from a live clinical guideline. Have a member
> with real EMS/nursing knowledge review them before treating them as your
> server's standard.

---

## Requirements

| Dependency | Why |
|---|---|
| [LB Tablet](https://lbscripts.com/) | The app registers itself as a custom tablet app |
| [ox_lib](https://github.com/overextended/ox_lib) | Used for server ↔ client callbacks |
| **QBox (qbx_core)** *or* **QBCore (qb-core)** *or* **ESX** | Job and grade checks for the admin editor (auto-detected) |

> ox_lib ships with QBox. If you are on QBCore or ESX you may need to install
> it separately — see the [ox_lib docs](https://overextended.dev/ox_lib).

---

## Install

1. Drop the `sams-clinical` folder into your server's `resources/`.

2. Add it to `server.cfg` **after** its dependencies:
   ```cfg
   ensure ox_lib
   ensure qbx_core   # or qb-core / es_extended
   ensure lb-tablet
   ensure sams-clinical
   ```

3. Restart the server (or `ensure sams-clinical` from the console).

The app registers itself with LB Tablet automatically. Every player will see it
in their tablet's app list.

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
they clock off. The detection works with QBox, QBCore and ESX automatically.

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

---

## How it works

### Data flow

```
data/protocols.json  ←→  server.lua  ←→  client.lua  ←→  UI (index.html)
     (disk)              (read/write)    (NUI bridge)     (LB Tablet app)
```

- **`data/protocols.json`** is the single source of truth. It holds every
  category, drug and protocol as JSON. The server reads it on start and caches
  it in memory.
- When a player opens the app, the UI requests the data from the server via
  NUI callbacks. Every player sees the same, current data.
- When an editor saves, the server re-checks their job and grade, writes the
  updated JSON to disk, and logs who saved. The change is live immediately for
  all players — no restart needed.

### Files

| File | Purpose |
|---|---|
| `fxmanifest.lua` | Resource manifest |
| `client.lua` | Registers the app with LB Tablet, bridges NUI ↔ server |
| `server.lua` | Reads/writes `data/protocols.json`, permission checks |
| `data/protocols.json` | All clinical content (protocols, drugs, categories) |
| `ui/index.html` | The app UI (HTML + CSS + JS, single file) |
| `ui/data.js` | Fallback data for previewing the UI outside FiveM |
| `ui/icon.png` | App icon shown in the tablet |

---

## Editing the content

### In-app editor (recommended)

1. Log in as a character whose job and grade meet the editor requirements.
2. Open the tablet → SAMS Clinical → **Admin editor** tab.
3. Add, edit or delete protocols and drugs using the form fields.
4. Click **Save to server** — changes are written to disk instantly and visible
   to every player immediately.

The editor also has **Export data.js** and **Import data.js** buttons for
backing up or migrating data between servers.

### Editing the file directly

Open `data/protocols.json` in any text editor. The structure is:

```jsonc
{
  "meta": { ... },
  "categories": [ { "id": "cardiac", "name": "Cardiac", "colour": "red" }, ... ],
  "drugs": [ { "id": "morphine", "name": "Morphine", "dose": "...", ... }, ... ],
  "protocols": [ { "id": "cardiac-arrest", "name": "Cardiac Arrest", ... }, ... ]
}
```

After editing, restart the resource (`ensure sams-clinical`) to reload.

A **protocol** looks like this:
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
  "tree": {                        // decision tree (required)
    "q": "Question?",
    "yes": "Action text",          // or another { q, yes, no } node
    "no": "Action text"
  }
}
```

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

## Troubleshooting

| Problem | Fix |
|---|---|
| App doesn't appear in the tablet | Check `server.cfg` load order — `lb-tablet` must start before `sams-clinical`. Check the server console for error messages. |
| "Failed to register app" in console | LB Tablet isn't started or isn't the right version. Make sure you're on a recent LB Tablet release. |
| Admin editor tab is missing | Your character's job or grade doesn't meet the `EditorJobs` / `EditorMinGrade` requirements in `server.lua`. |
| Save fails with "Permission denied" | Same as above — the server re-checks permissions on every save. |
| Data doesn't update after editing the JSON file | Restart the resource: `ensure sams-clinical`. The server only reads the file on start. |
| App shows but is blank or has no data | Check for errors in the F8 console. Make sure `ox_lib` is started before this resource. |

---

## Migrating to a different server

1. Copy the entire `sams-clinical` folder.
2. Update `EditorJobs` and `EditorMinGrade` in `server.lua` to match the new
   server's job names and grade structure.
3. Optionally update `RestrictToJobs` in `client.lua`.
4. Add to `server.cfg` and restart.

All clinical content travels with the resource in `data/protocols.json`.

---

## Credits

Built for San Andreas Medical Services.
Clinical content is for roleplay and should be reviewed by qualified staff
before adoption.

Version 3.0
