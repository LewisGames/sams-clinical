/* SAMS clinical data — v3.0 */

const SAMS_DATA = {
  "meta": {
    "service": "San Andreas Medical Services",
    "short": "SAMS",
    "version": "3.0",
    "updated": "Set on edit",
    "disclaimer": "Roleplay reference only. Not real medical advice. Doses are tuned for RP realism — verify with a qualified member before adopting as standard."
  },
  "categories": [
    {
      "id": "airway",
      "name": "Airway & Breathing",
      "colour": "sky"
    },
    {
      "id": "cardiac",
      "name": "Cardiac",
      "colour": "red"
    },
    {
      "id": "trauma",
      "name": "Trauma & Bleeding",
      "colour": "rose"
    },
    {
      "id": "medical",
      "name": "Medical",
      "colour": "violet"
    },
    {
      "id": "neuro",
      "name": "Neuro",
      "colour": "amber"
    },
    {
      "id": "environ",
      "name": "Burns & Environment",
      "colour": "orange"
    },
    {
      "id": "obs",
      "name": "Obstetrics",
      "colour": "teal"
    },
    {
      "id": "toxic",
      "name": "Toxicology & Poisoning",
      "colour": "violet"
    },
    {
      "id": "psych",
      "name": "Mental Health",
      "colour": "teal"
    },
    {
      "id": "paeds",
      "name": "Paediatrics",
      "colour": "sky"
    }
  ],
  "drugs": [
    {
      "id": "oxygen",
      "name": "Oxygen",
      "class": "Gas",
      "dose": "15 L/min via non-rebreather mask; titrate to SpO2 94-98%",
      "route": "Inhaled",
      "indications": "Any hypoxia, major trauma, chest pain, breathlessness, smoke inhalation.",
      "cautions": "In COPD aim for 88-92%. Fire risk — no naked flames.",
      "notes": "First drug in almost every serious call. Rarely wrong to give."
    },
    {
      "id": "adrenaline-arrest",
      "name": "Adrenaline (arrest)",
      "class": "Sympathomimetic",
      "dose": "1 mg (1:10,000) IV every 3-5 min during CPR",
      "route": "IV / IO",
      "indications": "Cardiac arrest — all rhythms.",
      "cautions": "Do not confuse with the 1:1,000 anaphylaxis strength.",
      "notes": "Given during the rhythm check. Flush after each dose."
    },
    {
      "id": "adrenaline-anaphylaxis",
      "name": "Adrenaline (anaphylaxis)",
      "class": "Sympathomimetic",
      "dose": "0.5 mg (1:1,000) IM, repeat every 5 min as needed",
      "route": "IM (anterolateral thigh)",
      "indications": "Anaphylaxis — airway swelling, wheeze, shock.",
      "cautions": "IM not IV for anaphylaxis. Different strength to arrest dose.",
      "notes": "Do not delay. Adrenaline is the treatment, everything else is supportive."
    },
    {
      "id": "amiodarone",
      "name": "Amiodarone",
      "class": "Antiarrhythmic",
      "dose": "300 mg IV after the 3rd shock; 150 mg after the 5th",
      "route": "IV / IO",
      "indications": "Shockable arrest (VF / pulseless VT) that persists.",
      "cautions": "Shockable rhythms only.",
      "notes": "Given alongside adrenaline in a refractory shockable arrest."
    },
    {
      "id": "morphine",
      "name": "Morphine",
      "class": "Opioid analgesic",
      "dose": "5-10 mg IV, titrated in 2 mg steps to effect",
      "route": "IV / IM",
      "indications": "Severe pain — fractures, burns, cardiac chest pain.",
      "cautions": "Respiratory depression, hypotension. Have naloxone ready.",
      "notes": "Titrate slowly. Reassess pain and breathing after each step."
    },
    {
      "id": "paracetamol",
      "name": "Paracetamol",
      "class": "Simple analgesic",
      "dose": "1 g IV or oral",
      "route": "IV / Oral",
      "indications": "Mild to moderate pain, pyrexia.",
      "cautions": "Max 4 g in 24 h. Caution in liver impairment.",
      "notes": "Good first-line for pain that doesn't need an opioid."
    },
    {
      "id": "naloxone",
      "name": "Naloxone",
      "class": "Opioid antagonist",
      "dose": "400 mcg IV/IM, repeat every 2-3 min (titrate to breathing)",
      "route": "IV / IM / IN",
      "indications": "Opioid overdose with respiratory depression.",
      "cautions": "Short half-life — patient can re-sedate. Never leave them.",
      "notes": "Aim to restore breathing, not full alertness. Can precipitate withdrawal."
    },
    {
      "id": "glucose-gel",
      "name": "Glucose gel (oral)",
      "class": "Sugar",
      "dose": "10-20 g buccal gel, repeat after 10 min",
      "route": "Oral / Buccal",
      "indications": "Conscious hypoglycaemia (low blood sugar).",
      "cautions": "Only if able to swallow safely.",
      "notes": "For the awake, swallowing patient. If unsafe, use IV glucose."
    },
    {
      "id": "glucose-iv",
      "name": "Glucose 10% IV",
      "class": "Sugar",
      "dose": "150-250 ml IV, reassess blood sugar after each 100 ml",
      "route": "IV",
      "indications": "Hypoglycaemia when oral is unsafe or unconscious.",
      "cautions": "Large-bore line, can irritate small veins.",
      "notes": "Recheck glucose after giving."
    },
    {
      "id": "glucagon",
      "name": "Glucagon",
      "class": "Hormone",
      "dose": "1 mg IM",
      "route": "IM",
      "indications": "Hypoglycaemia with no IV access.",
      "cautions": "Slower to work than IV glucose; may cause nausea.",
      "notes": "Buys time to gain IV access."
    },
    {
      "id": "gtn",
      "name": "GTN spray",
      "class": "Vasodilator",
      "dose": "400-800 mcg sublingual, repeat after 5 min",
      "route": "Sublingual",
      "indications": "Cardiac chest pain, some cases of pulmonary oedema.",
      "cautions": "Do NOT give if hypotensive (systolic < 90). Check BP first.",
      "notes": "Sit the patient down first — can drop the pressure sharply."
    },
    {
      "id": "aspirin",
      "name": "Aspirin",
      "class": "Antiplatelet",
      "dose": "300 mg chewed",
      "route": "Oral (chewed)",
      "indications": "Suspected heart attack (ACS).",
      "cautions": "Ask about allergy and active bleeding.",
      "notes": "Chewed, not swallowed whole — faster absorption."
    },
    {
      "id": "salbutamol",
      "name": "Salbutamol",
      "class": "Bronchodilator",
      "dose": "5 mg nebulised, repeat as needed",
      "route": "Nebulised",
      "indications": "Asthma, COPD, wheeze.",
      "cautions": "Causes tremor and fast heart rate.",
      "notes": "Drive the neb with oxygen in asthma."
    },
    {
      "id": "ipratropium",
      "name": "Ipratropium",
      "class": "Bronchodilator",
      "dose": "500 mcg nebulised (with salbutamol)",
      "route": "Nebulised",
      "indications": "Severe asthma or COPD not settling on salbutamol alone.",
      "cautions": "Dry mouth, caution in glaucoma.",
      "notes": "Added to salbutamol for a severe attack."
    },
    {
      "id": "hydrocortisone",
      "name": "Hydrocortisone",
      "class": "Steroid",
      "dose": "100-200 mg IV",
      "route": "IV / IM",
      "indications": "Severe asthma, anaphylaxis (after adrenaline).",
      "cautions": "Slow onset — not a rescue drug.",
      "notes": "Backs up adrenaline; does nothing in the first minutes."
    },
    {
      "id": "chlorphenamine",
      "name": "Chlorphenamine",
      "class": "Antihistamine",
      "dose": "10 mg IV / IM",
      "route": "IV / IM",
      "indications": "Allergic reaction, adjunct in anaphylaxis.",
      "cautions": "Causes drowsiness.",
      "notes": "Given after adrenaline in anaphylaxis, never instead of it."
    },
    {
      "id": "midazolam",
      "name": "Midazolam",
      "class": "Benzodiazepine",
      "dose": "5-10 mg IM, or 2 mg IV titrated",
      "route": "IM / IV / Buccal",
      "indications": "Active seizure lasting over 5 min.",
      "cautions": "Respiratory depression. Monitor breathing closely.",
      "notes": "Buccal route is useful with no IV access."
    },
    {
      "id": "ondansetron",
      "name": "Ondansetron",
      "class": "Antiemetic",
      "dose": "4-8 mg IV / IM",
      "route": "IV / IM",
      "indications": "Nausea and vomiting.",
      "cautions": "Caution with certain heart rhythm problems.",
      "notes": "Helps the patient tolerate transport and other drugs."
    },
    {
      "id": "txa",
      "name": "Tranexamic acid (TXA)",
      "class": "Antifibrinolytic",
      "dose": "1 g IV over 10 min",
      "route": "IV",
      "indications": "Major traumatic haemorrhage, ideally within 3 h of injury.",
      "cautions": "Give early — benefit falls off with time.",
      "notes": "Helps clots hold. Pairs with bleeding control, not instead of it."
    },
    {
      "id": "fluids",
      "name": "IV fluids (crystalloid)",
      "class": "Fluid",
      "dose": "250-500 ml boluses, titrated to a radial pulse",
      "route": "IV / IO",
      "indications": "Shock, significant blood loss.",
      "cautions": "Don't over-fill in uncontrolled bleeding — aim for a pulse, not normal BP.",
      "notes": "Permissive hypotension: enough to perfuse, not enough to pop clots."
    },
    {
      "id": "ketamine",
      "name": "Ketamine (analgesia)",
      "class": "Dissociative",
      "dose": "Low-dose 0.1-0.3 mg/kg IV for pain",
      "route": "IV / IM",
      "indications": "Severe pain not controlled by opioids; entrapment.",
      "cautions": "Emergence phenomena; keep the scene calm.",
      "notes": "Useful when morphine isn't enough or BP won't tolerate it."
    },
    {
      "id": "atropine",
      "name": "Atropine",
      "class": "Anticholinergic",
      "dose": "500 mcg IV, repeat every 3-5 min to a max of 3 mg",
      "route": "IV / IO",
      "indications": "Symptomatic bradycardia with adverse signs; organophosphate poisoning (much larger doses).",
      "cautions": "Can cause tachycardia, confusion. Ineffective in some transplant hearts.",
      "notes": "First-line drug treatment for a slow pulse with shock, syncope or heart failure."
    },
    {
      "id": "adenosine",
      "name": "Adenosine",
      "class": "Antiarrhythmic",
      "dose": "6 mg rapid IV push, then 12 mg, then 12 mg if needed",
      "route": "IV (rapid push + flush)",
      "indications": "Regular narrow-complex SVT not responding to vagal manoeuvres.",
      "cautions": "Warn the patient of a brief unpleasant chest sensation. Avoid in asthma where possible.",
      "notes": "Give as a fast push immediately followed by a saline flush — very short half-life."
    },
    {
      "id": "furosemide",
      "name": "Furosemide",
      "class": "Loop diuretic",
      "dose": "40-80 mg IV, slow",
      "route": "IV",
      "indications": "Acute pulmonary oedema with fluid overload.",
      "cautions": "Do not give if the patient looks dry or hypotensive.",
      "notes": "Works alongside GTN and sitting the patient up — not a substitute for either."
    },
    {
      "id": "magnesium-sulphate",
      "name": "Magnesium sulphate",
      "class": "Electrolyte / anticonvulsant",
      "dose": "4 g IV over 5-10 min (eclampsia); 2 g IV over 10 min (severe asthma / torsades)",
      "route": "IV",
      "indications": "Eclampsia and eclamptic seizures, life-threatening asthma not responding to nebs, torsades de pointes.",
      "cautions": "Watch for loss of reflexes and respiratory depression at high doses.",
      "notes": "Have calcium gluconate available as the antidote for magnesium toxicity."
    },
    {
      "id": "dexamethasone",
      "name": "Dexamethasone",
      "class": "Steroid",
      "dose": "0.15 mg/kg oral (typically 2-10 mg) for croup; 6.6 mg IV for severe inflammation",
      "route": "Oral / IV",
      "indications": "Croup, other airway inflammation.",
      "cautions": "Slow onset — supportive, not a rescue drug.",
      "notes": "Single oral dose is usually enough to settle croup over a few hours."
    },
    {
      "id": "activated-charcoal",
      "name": "Activated charcoal",
      "class": "Adsorbent",
      "dose": "50 g oral, mixed with water",
      "route": "Oral",
      "indications": "Selected poisonings/overdoses within roughly 1 hour of ingestion, alert patient.",
      "cautions": "Never give if airway is compromised or consciousness is reduced — aspiration risk. Not effective for all poisons (e.g. metals, alcohols).",
      "notes": "Time-critical — check the poisons guidance before giving."
    },
    {
      "id": "calcium-gluconate",
      "name": "Calcium gluconate",
      "class": "Electrolyte",
      "dose": "10 ml of 10% solution IV over 5-10 min",
      "route": "IV",
      "indications": "Hyperkalaemia with ECG changes, calcium channel blocker overdose, magnesium toxicity.",
      "cautions": "Do not mix in the same line as sodium bicarbonate — will precipitate.",
      "notes": "Protects the heart while other measures shift potassium."
    },
    {
      "id": "sodium-bicarb",
      "name": "Sodium bicarbonate 8.4%",
      "class": "Alkalinising agent",
      "dose": "50 ml (50 mmol) IV, repeat as guided by ECG/pH",
      "route": "IV",
      "indications": "Tricyclic antidepressant overdose with widened QRS, severe hyperkalaemia.",
      "cautions": "Flush the line well — precipitates with calcium salts.",
      "notes": "Narrows the QRS in tricyclic toxicity — a key sign it's working."
    },
    {
      "id": "methoxyflurane",
      "name": "Methoxyflurane (Penthrox)",
      "class": "Inhaled analgesic",
      "dose": "3 ml self-administered via inhaler as needed",
      "route": "Inhaled",
      "indications": "Moderate to severe trauma pain, short procedures.",
      "cautions": "Avoid in significant renal or liver disease. Max 6 ml per patient per day.",
      "notes": "Patient controls their own dosing by how often they inhale — the 'green whistle'."
    },
    {
      "id": "entonox",
      "name": "Entonox (50% nitrous oxide / oxygen)",
      "class": "Inhaled analgesic",
      "dose": "Self-administered via demand valve, as needed",
      "route": "Inhaled",
      "indications": "Moderate pain, labour, splinting and movement of fractures.",
      "cautions": "Avoid in suspected pneumothorax, bowel obstruction, or decompression illness — gas expands in air spaces.",
      "notes": "Fast on, fast off. Good bridge to stronger analgesia."
    },
    {
      "id": "ibuprofen",
      "name": "Ibuprofen",
      "class": "NSAID",
      "dose": "400 mg oral",
      "route": "Oral",
      "indications": "Mild to moderate pain, inflammation.",
      "cautions": "Avoid in asthma, renal impairment, active bleeding, pregnancy.",
      "notes": "Useful adjunct to paracetamol for musculoskeletal pain."
    },
    {
      "id": "diazepam",
      "name": "Diazepam (rectal)",
      "class": "Benzodiazepine",
      "dose": "10-20 mg rectal",
      "route": "Rectal",
      "indications": "Active seizure over 5 min where buccal/IM midazolam isn't available or suitable.",
      "cautions": "Respiratory depression — monitor breathing closely.",
      "notes": "Common alternative route in paediatric seizures managed by carers."
    },
    {
      "id": "lorazepam",
      "name": "Lorazepam",
      "class": "Benzodiazepine",
      "dose": "4 mg IV, may repeat once after 10 min",
      "route": "IV",
      "indications": "Status epilepticus as an alternative to midazolam.",
      "cautions": "Respiratory depression, sedation.",
      "notes": "Longer duration of action than midazolam."
    },
    {
      "id": "prednisolone",
      "name": "Prednisolone",
      "class": "Steroid (oral)",
      "dose": "40-50 mg oral (adult); 1-2 mg/kg (child)",
      "route": "Oral",
      "indications": "Asthma exacerbation, croup where dexamethasone unavailable.",
      "cautions": "Slow onset, no benefit in the first minutes.",
      "notes": "Alternative to hydrocortisone/dexamethasone where oral route is preferred."
    },
    {
      "id": "lidocaine",
      "name": "Lidocaine",
      "class": "Local anaesthetic",
      "dose": "1-3 mg/kg local infiltration, max per local protocol",
      "route": "Local infiltration / IV (arrhythmia use)",
      "indications": "Local anaesthesia before procedures (e.g. IO insertion in a conscious patient), alternative antiarrhythmic in refractory VF/VT.",
      "cautions": "Toxicity with excessive dose — perioral tingling, seizures, arrhythmia.",
      "notes": "Given into the IO space slowly before flushing in an awake patient."
    },
    {
      "id": "misoprostol",
      "name": "Misoprostol",
      "class": "Uterotonic",
      "dose": "800 mcg sublingual/buccal",
      "route": "Sublingual / Buccal / Rectal",
      "indications": "Postpartum haemorrhage, alongside uterine massage.",
      "cautions": "Causes shivering and pyrexia — not itself a danger sign.",
      "notes": "Used alongside, not instead of, uterine massage and TXA."
    },
    {
      "id": "sodium-chloride",
      "name": "Sodium chloride 0.9%",
      "class": "Irrigation fluid",
      "dose": "As required for wound/eye irrigation or drug dilution",
      "route": "Topical / IV",
      "indications": "Eye and wound irrigation, flushing lines, diluting drugs for infusion.",
      "cautions": "Not for large-volume resuscitation instead of crystalloid boluses unless that's the only fluid carried.",
      "notes": "Workhorse fluid for irrigation as well as IV use."
    },
    {
      "id": "clopidogrel",
      "name": "Clopidogrel",
      "class": "Antiplatelet",
      "dose": "300 mg oral loading dose",
      "route": "Oral",
      "indications": "ACS, alongside aspirin, where ticagrelor is not available or is contraindicated.",
      "cautions": "Bleeding risk, especially combined with aspirin.",
      "notes": "Given once, as a loading dose, alongside aspirin."
    },
    {
      "id": "ticagrelor",
      "name": "Ticagrelor",
      "class": "Antiplatelet",
      "dose": "180 mg oral loading dose",
      "route": "Oral",
      "indications": "ACS with planned primary PCI, alongside aspirin.",
      "cautions": "Bleeding risk. Avoid if active major bleeding or history of intracranial haemorrhage.",
      "notes": "Preferred over clopidogrel in many STEMI pathways when available."
    },
    {
      "id": "cpap",
      "name": "CPAP (continuous positive airway pressure)",
      "class": "Device / intervention",
      "dose": "Tight-fitting mask, titrated pressure, continuous",
      "route": "Non-invasive ventilation",
      "indications": "Acute pulmonary oedema, some severe COPD exacerbations.",
      "cautions": "Not for the unconscious, vomiting, or untreated pneumothorax patient. Claustrophobia is common — coach the patient.",
      "notes": "Can dramatically improve breathing in flash pulmonary oedema within minutes."
    }
  ],
  "protocols": [
    {
      "id": "cardiac-arrest",
      "name": "Cardiac Arrest",
      "category": "cardiac",
      "priority": "red",
      "alsoKnownAs": [
        "no pulse",
        "not breathing",
        "CPR",
        "resus",
        "code"
      ],
      "summary": "Unresponsive, not breathing normally, no pulse. Start CPR immediately.",
      "assess": [
        "Unresponsive and not breathing, or only gasping.",
        "No central pulse after a 10-second check.",
        "Note the time — arrest time drives everything afterwards."
      ],
      "redFlags": [
        "This IS the red flag. Everything here is time-critical.",
        "Every minute without CPR drops survival sharply."
      ],
      "treat": [
        "Start chest compressions immediately — 30 compressions to 2 breaths.",
        "Push hard and fast, centre of the chest, let it recoil fully.",
        "Get the defibrillator on as soon as it arrives.",
        "Follow the shock prompts. Shock a shockable rhythm without delay.",
        "Swap the medic doing compressions every 2 minutes to keep quality up.",
        "Gain IV or IO access and give drugs without stopping compressions.",
        "Treat reversible causes — the 4 Hs and 4 Ts."
      ],
      "drugs": [
        "adrenaline-arrest",
        "amiodarone",
        "oxygen",
        "fluids"
      ],
      "transport": "Transport once you have a pulse back (ROSC), running hot. Pre-alert Pillbox early. If running the agreed limit with nothing back, consider stopping — command call.",
      "tree": {
        "q": "Is the rhythm shockable (VF / pulseless VT)?",
        "yes": {
          "q": "Has it persisted past the 3rd shock?",
          "yes": "Continue CPR. Adrenaline 1 mg every 3-5 min AND amiodarone 300 mg now, 150 mg after the 5th shock. Keep shocking every 2 min.",
          "no": "Shock, then straight back to 2 min of CPR. Adrenaline 1 mg after the 2nd shock, then every 3-5 min."
        },
        "no": {
          "q": "Any signs of life on the next rhythm check?",
          "yes": "Possible ROSC — check pulse, support airway and breathing, package and transport hot.",
          "no": "Continue CPR. Adrenaline 1 mg every 3-5 min. Hunt for reversible causes (4 Hs, 4 Ts)."
        }
      }
    },
    {
      "id": "chest-pain",
      "name": "Cardiac Chest Pain (ACS)",
      "category": "cardiac",
      "priority": "amber",
      "alsoKnownAs": [
        "heart attack",
        "MI",
        "angina",
        "chest pain"
      ],
      "summary": "Central crushing chest pain, may spread to arm or jaw. Treat as a heart attack until proven otherwise.",
      "assess": [
        "Central, heavy or crushing pain, often radiating to the arm, neck or jaw.",
        "Sweating, nausea, shortness of breath, sense of doom.",
        "Ask about onset, duration and any cardiac history."
      ],
      "redFlags": [
        "All cardiac chest pain is a transport. No exceptions.",
        "Pain with low blood pressure, fainting, or an irregular pulse is high risk."
      ],
      "treat": [
        "Sit the patient up and keep them calm and still.",
        "Oxygen only if their SpO2 is low.",
        "Aspirin 300 mg, chewed.",
        "GTN spray — but check blood pressure first.",
        "Morphine for pain not relieved by GTN.",
        "Second antiplatelet (ticagrelor or clopidogrel) per local pathway if STEMI suspected.",
        "Monitor closely — arrest can follow."
      ],
      "drugs": [
        "aspirin",
        "gtn",
        "morphine",
        "oxygen",
        "ondansetron",
        "ticagrelor",
        "clopidogrel"
      ],
      "transport": "Always transport, priority 2. Blue light if unstable. Pre-alert so the cath lab / doctors are ready.",
      "tree": {
        "q": "Is the systolic blood pressure at least 90?",
        "yes": {
          "q": "Is the pain relieved after GTN?",
          "yes": "Continue monitoring, aspirin given, transport priority 2.",
          "no": "Give morphine, titrated. Consider second antiplatelet if STEMI confirmed. Transport, consider blue light. Watch for deterioration."
        },
        "no": "Do NOT give GTN — it will drop the pressure further. Lie them flat if faint, cautious fluids, transport blue light."
      }
    },
    {
      "id": "svt",
      "name": "Supraventricular Tachycardia (SVT)",
      "category": "cardiac",
      "priority": "amber",
      "alsoKnownAs": [
        "fast heart rate",
        "racing heart",
        "palpitations",
        "SVT"
      ],
      "summary": "Sudden-onset regular narrow-complex tachycardia, often very fast (150-250 bpm). Try vagal manoeuvres first.",
      "assess": [
        "Sudden-onset palpitations, regular fast pulse, narrow QRS on the monitor.",
        "Ask about onset — abrupt start/stop is typical of SVT.",
        "Check for adverse signs: chest pain, breathlessness, low BP, reduced consciousness."
      ],
      "redFlags": [
        "Any adverse sign (shock, syncope, heart failure, ischaemic chest pain) is a red flag.",
        "A heart rate not settling with treatment needs urgent transport."
      ],
      "treat": [
        "Attach the monitor and get a 12-lead if possible.",
        "Try vagal manoeuvres first — modified Valsalva or carotid sinus massage per training.",
        "If unsuccessful and stable: adenosine 6 mg rapid IV push with flush, then 12 mg, then 12 mg.",
        "Warn the patient about the brief unpleasant sensation before giving adenosine.",
        "If adverse signs present and deteriorating, prepare for synchronised cardioversion.",
        "Oxygen if hypoxic."
      ],
      "drugs": [
        "adenosine",
        "oxygen"
      ],
      "transport": "Transport all SVT, even if it terminates on scene. Blue light if adverse signs present or it recurs.",
      "tree": {
        "q": "Are there adverse signs (shock, syncope, heart failure, ischaemic pain)?",
        "yes": "Unstable SVT — prepare for synchronised cardioversion, gain IV access, oxygen, transport hot, pre-alert.",
        "no": {
          "q": "Did vagal manoeuvres terminate it?",
          "yes": "Monitor closely, 12-lead ECG, transport priority 2 for review.",
          "no": "Give adenosine 6 mg rapid IV push with flush; repeat at 12 mg then 12 mg if needed. Transport, continuous monitoring."
        }
      }
    },
    {
      "id": "bradycardia",
      "name": "Bradycardia",
      "category": "cardiac",
      "priority": "amber",
      "alsoKnownAs": [
        "slow heart rate",
        "slow pulse",
        "heart block"
      ],
      "summary": "Heart rate under 60 bpm. Only treat if it's causing adverse signs.",
      "assess": [
        "Pulse under 60 bpm, confirm on the monitor.",
        "Look for adverse signs: shock, syncope, heart failure, ischaemic chest pain.",
        "Ask about beta-blockers, pacemaker history, or a recent inferior MI."
      ],
      "redFlags": [
        "Any adverse sign alongside the slow pulse.",
        "Risk of asystole: recent asystole, Mobitz type II, complete heart block with broad QRS, ventricular pauses over 3 s."
      ],
      "treat": [
        "Oxygen if hypoxic.",
        "Atropine 500 mcg IV if adverse signs present, repeat every 3-5 min to max 3 mg.",
        "If not responding to atropine or high risk of asystole, prepare for transcutaneous pacing.",
        "Gain IV access early.",
        "Continuous ECG monitoring throughout."
      ],
      "drugs": [
        "atropine",
        "oxygen"
      ],
      "transport": "Transport all symptomatic bradycardia. Blue light with adverse signs or risk of asystole.",
      "tree": {
        "q": "Are there adverse signs (shock, syncope, heart failure, ischaemic pain)?",
        "yes": "Atropine 500 mcg IV, repeat to max 3 mg. If ineffective, prepare for pacing. Transport hot.",
        "no": {
          "q": "Is there a risk of asystole (recent asystole, Mobitz II, complete block, long pauses)?",
          "yes": "Treat as high risk — atropine ready, continuous monitoring, transport hot even without current symptoms.",
          "no": "Monitor, no immediate drug treatment needed, transport priority 2 for review."
        }
      }
    },
    {
      "id": "pulmonary-oedema",
      "name": "Acute Pulmonary Oedema / Heart Failure",
      "category": "cardiac",
      "priority": "red",
      "alsoKnownAs": [
        "flash pulmonary oedema",
        "heart failure",
        "fluid on the lungs",
        "CHF"
      ],
      "summary": "Sudden severe breathlessness with frothy sputum and crackles — the heart failing to keep up.",
      "assess": [
        "Sudden severe breathlessness, often worse lying flat.",
        "Pink frothy sputum, widespread crackles on the chest.",
        "Distended neck veins, swollen ankles, cool clammy skin, raised heart rate."
      ],
      "redFlags": [
        "Struggling to speak, exhaustion, or falling SpO2 despite oxygen.",
        "Low blood pressure alongside pulmonary oedema is high risk — cardiogenic shock."
      ],
      "treat": [
        "Sit the patient fully upright, legs down.",
        "High-flow oxygen, titrate to SpO2 94-98%.",
        "CPAP early if available and tolerated — often dramatic improvement.",
        "GTN spray if systolic BP over 90 — reduces the workload on the heart.",
        "Furosemide IV if fluid overloaded and not hypotensive.",
        "Gain IV access, but avoid large fluid boluses."
      ],
      "drugs": [
        "oxygen",
        "cpap",
        "gtn",
        "furosemide"
      ],
      "transport": "Blue light. Pre-alert as cardiac/respiratory failure. Keep upright throughout transport.",
      "tree": {
        "q": "Is the systolic blood pressure at least 90?",
        "yes": {
          "q": "Is CPAP available and tolerated?",
          "yes": "Sit upright, CPAP, GTN, furosemide, transport hot.",
          "no": "Sit upright, high-flow oxygen, GTN, furosemide, transport hot, reassess frequently."
        },
        "no": "Cardiogenic shock likely — do NOT give GTN. Sit as upright as BP allows, oxygen, cautious fluids, transport hot, pre-alert."
      }
    },
    {
      "id": "hypertensive-emergency",
      "name": "Hypertensive Emergency",
      "category": "cardiac",
      "priority": "amber",
      "alsoKnownAs": [
        "very high blood pressure",
        "hypertensive crisis",
        "malignant hypertension"
      ],
      "summary": "Severely elevated blood pressure with evidence of organ damage — not just a high number on its own.",
      "assess": [
        "Very high BP (typically over 180/120) plus symptoms: severe headache, visual disturbance, chest pain, breathlessness, confusion.",
        "Check for signs of stroke, pulmonary oedema, or eclampsia (if pregnant).",
        "A high BP with no symptoms is not, on its own, an emergency."
      ],
      "redFlags": [
        "High BP with chest pain, breathlessness, neuro deficit, seizure or pregnancy is a red flag.",
        "Rapidly worsening headache or visual loss."
      ],
      "treat": [
        "Keep the patient calm, sit them comfortably.",
        "Oxygen only if hypoxic.",
        "Do not attempt to rapidly lower BP pre-hospital — treat the associated emergency (chest pain, pulmonary oedema, seizure) per its own protocol.",
        "If pregnant with a high BP and symptoms, treat as pre-eclampsia/eclampsia.",
        "Continuous monitoring en route."
      ],
      "drugs": [
        "oxygen",
        "gtn",
        "magnesium-sulphate"
      ],
      "transport": "Transport all symptomatic hypertensive emergencies, blue light if organ damage evident (stroke signs, pulmonary oedema, eclampsia).",
      "tree": {
        "q": "Is the patient pregnant with headache, visual disturbance, or swelling?",
        "yes": "Treat as pre-eclampsia/eclampsia — see that protocol. Magnesium sulphate if seizing.",
        "no": {
          "q": "Are there symptoms of organ damage (chest pain, breathlessness, neuro deficit)?",
          "yes": "Treat the specific emergency present (ACS, pulmonary oedema, stroke). Transport blue light.",
          "no": "High BP alone without symptoms — calm reassurance, transport priority 2 for review, do not chase the number."
        }
      }
    },
    {
      "id": "catastrophic-haemorrhage",
      "name": "Catastrophic Haemorrhage",
      "category": "trauma",
      "priority": "red",
      "alsoKnownAs": [
        "massive bleeding",
        "arterial bleed",
        "exsanguination",
        "gunshot bleed"
      ],
      "summary": "Life-threatening external bleeding. This comes before airway — stop it now.",
      "assess": [
        "Pumping, spurting or rapidly pooling blood.",
        "Pale, cold, clammy skin; fast weak pulse; anxiety then drowsiness.",
        "Find every source — check under clothing and beneath the body."
      ],
      "redFlags": [
        "Any catastrophic bleed is an immediate transport.",
        "A tourniquet going on means the patient is going to hospital.",
        "Bleeding not controlled after two proper attempts."
      ],
      "treat": [
        "Direct, hard pressure on the wound immediately.",
        "Tourniquet high and tight above a limb bleed that won't stop.",
        "Pack deep wounds and junctional bleeds firmly, then keep pressure.",
        "Note the time any tourniquet went on — hand it over.",
        "TXA early for major traumatic bleeding.",
        "Cautious fluids to keep a radial pulse, not to normalise BP.",
        "Keep the patient warm — cold worsens bleeding."
      ],
      "drugs": [
        "txa",
        "fluids",
        "oxygen",
        "morphine"
      ],
      "transport": "Immediate, blue light. Pre-alert as major trauma. The definitive fix is surgical — scene time short.",
      "tree": {
        "q": "Where is the bleed?",
        "yes": "Limb: direct pressure, then a tourniquet high and tight if it won't stop. Note the time. TXA, transport hot.",
        "no": "Torso, neck or junction: you cannot tourniquet it. Pack hard and hold continuous pressure. TXA, cautious fluids, transport hot immediately."
      }
    },
    {
      "id": "major-fracture",
      "name": "Major Fracture",
      "category": "trauma",
      "priority": "amber",
      "alsoKnownAs": [
        "broken femur",
        "broken pelvis",
        "open fracture",
        "broken leg"
      ],
      "summary": "Femur, pelvis, open or multiple fractures. Significant blood loss risk.",
      "assess": [
        "Deformity, swelling, inability to weight-bear, severe pain.",
        "Open fracture: bone through skin, or a wound over the break.",
        "Check pulse, sensation and movement beyond the injury."
      ],
      "redFlags": [
        "Femur, pelvis, open or multiple fractures always transport.",
        "A pale, pulseless limb beyond the break is time-critical.",
        "A pelvic fracture can bleed litres internally with nothing to see."
      ],
      "treat": [
        "Strong pain relief early — morphine, titrated, or entonox/methoxyflurane for immediate relief while access is gained.",
        "Femur: traction splint if available.",
        "Pelvis: apply a pelvic binder, then handle once and gently.",
        "Open fracture: cover the bone with a sterile dressing, splint as found.",
        "Splint other long bones in the position found; recheck circulation after.",
        "Keep warm, monitor for shock."
      ],
      "drugs": [
        "morphine",
        "ketamine",
        "paracetamol",
        "fluids",
        "txa",
        "entonox",
        "methoxyflurane"
      ],
      "transport": "Always transport. Femur and pelvis blue light. Needs imaging and surgical care — none possible at scene.",
      "tree": {
        "q": "Is it a pelvis or femur, OR is the limb pale/pulseless beyond the break?",
        "yes": "High risk of major internal blood loss. Binder or traction splint, strong analgesia, cautious fluids, TXA, blue light.",
        "no": "Splint in the position found, analgesia, recheck circulation, transport priority 2."
      }
    },
    {
      "id": "penetrating-chest",
      "name": "Penetrating Chest Trauma",
      "category": "trauma",
      "priority": "red",
      "alsoKnownAs": [
        "stab chest",
        "gunshot chest",
        "sucking chest wound",
        "pneumothorax"
      ],
      "summary": "Stab or gunshot to the chest. Risk of a collapsing lung — minutes, not hours.",
      "assess": [
        "Wound to the chest or upper back; there may be an exit wound.",
        "Breathlessness, unequal chest movement, bubbling wound.",
        "Rising breathlessness with distended neck veins is a tension pneumothorax."
      ],
      "redFlags": [
        "Any penetrating chest wound is an immediate blue-light transport.",
        "Rising breathlessness and a falling pulse suggest tension — critical."
      ],
      "treat": [
        "Seal the wound with a chest seal that vents.",
        "High-flow oxygen.",
        "Sit them up if it helps their breathing, unless a spinal risk.",
        "Watch closely for a tension developing after you seal it.",
        "IV access, cautious fluids to keep a pulse."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "txa",
        "morphine"
      ],
      "transport": "Immediate, blue light, pre-alert as major trauma. Definitive care is surgical.",
      "tree": {
        "q": "After sealing, is breathing getting worse with a falling pulse?",
        "yes": "Suspect a tension pneumothorax — this is critical. Support ventilation, transport hot NOW, pre-alert for chest decompression.",
        "no": "Keep the seal, high-flow oxygen, monitor continuously, transport hot."
      }
    },
    {
      "id": "tension-pneumothorax",
      "name": "Tension Pneumothorax",
      "category": "airway",
      "priority": "red",
      "alsoKnownAs": [
        "collapsed lung",
        "tension pneumo",
        "needle decompression"
      ],
      "summary": "Air trapped in the chest under pressure, pushing on the heart and the other lung. Rapidly fatal without decompression.",
      "assess": [
        "Severe breathlessness, often after chest trauma or a penetrating wound.",
        "Distended neck veins, tracheal deviation away from the affected side (late sign).",
        "Absent breath sounds on one side, falling SpO2, falling BP, rising heart rate."
      ],
      "redFlags": [
        "This is a peri-arrest condition — treat as an immediate life threat.",
        "Any deterioration after sealing a chest wound must trigger this suspicion."
      ],
      "treat": [
        "High-flow oxygen and support ventilation as needed.",
        "Needle decompression — large-bore cannula, 2nd intercostal space mid-clavicular line, or 4th/5th space anterior axillary line per training.",
        "Reassess immediately after decompression — expect rapid improvement.",
        "Prepare for repeat decompression if it recurs.",
        "Do not delay transport for further intervention once decompressed."
      ],
      "drugs": [
        "oxygen",
        "fluids"
      ],
      "transport": "Immediate blue light, pre-alert as a critical chest emergency requiring a chest drain.",
      "tree": {
        "q": "Are the classic signs present (distended neck veins, absent breath sounds one side, falling BP)?",
        "yes": "Needle decompress immediately — do not wait for imaging. Reassess, repeat if recurs, transport hot.",
        "no": "High suspicion but not classic — high-flow oxygen, prepare decompression kit, transport hot, reassess continuously for deterioration."
      }
    },
    {
      "id": "head-injury",
      "name": "Head Injury / Traumatic Brain Injury",
      "category": "trauma",
      "priority": "amber",
      "alsoKnownAs": [
        "TBI",
        "concussion",
        "head trauma",
        "skull fracture"
      ],
      "summary": "Impact to the head with any reduction in consciousness, confusion, or focal neuro signs.",
      "assess": [
        "Mechanism of injury and GCS on first contact and repeated.",
        "Vomiting, worsening headache, seizure, unequal pupils, weakness on one side.",
        "Look for signs of a skull fracture — bruising behind the ears, around the eyes, fluid from the nose/ears.",
        "Watch for Cushing's response: rising BP with falling heart rate and irregular breathing — a sign of rising pressure in the skull."
      ],
      "redFlags": [
        "GCS below 15 at any point, or a falling GCS.",
        "Any focal neurological deficit or seizure after the injury.",
        "Cushing's triad — this is a pre-terminal sign of raised intracranial pressure.",
        "Signs of a base of skull fracture."
      ],
      "treat": [
        "Maintain full C-spine precautions given the mechanism.",
        "High-flow oxygen, support ventilation if breathing is inadequate — avoid hypoxia and hypotension, both worsen brain injury.",
        "Keep the head slightly elevated (30 degrees) if spinally cleared and no shock.",
        "Frequent GCS and pupil checks — trend matters more than a single number.",
        "Treat seizures promptly.",
        "Avoid hypotension — maintain a normal pulse, don't over-fill."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "midazolam"
      ],
      "transport": "Blue light for GCS below 15, deterioration, focal signs or Cushing's triad. Pre-alert for a trauma/neuro team.",
      "tree": {
        "q": "Is the GCS below 15, falling, or are there focal neuro signs?",
        "yes": "Time-critical head injury. Maintain airway and oxygenation, avoid hypotension, C-spine precautions, transport hot, pre-alert.",
        "no": {
          "q": "Any loss of consciousness, vomiting, or amnesia around the event?",
          "yes": "Transport for assessment, monitor GCS closely en route, safety-net.",
          "no": "Low-risk head injury. Advise on red-flag symptoms to watch for. Transport if any doubt."
        }
      }
    },
    {
      "id": "crush-injury",
      "name": "Crush Injury / Crush Syndrome",
      "category": "trauma",
      "priority": "red",
      "alsoKnownAs": [
        "crush syndrome",
        "trapped limb",
        "building collapse",
        "compartment injury"
      ],
      "summary": "A limb or body part trapped under heavy weight for a prolonged period — releasing it can be as dangerous as the injury itself.",
      "assess": [
        "Time trapped — over about an hour raises the risk of crush syndrome significantly.",
        "Look for a swollen, painful, numb limb once accessible.",
        "Consider what will happen to potassium and toxins once the pressure is released."
      ],
      "redFlags": [
        "Sudden collapse or cardiac arrest shortly after release — crush syndrome releasing potassium into the circulation.",
        "Any prolonged entrapment (over roughly an hour) is high risk regardless of how the limb looks."
      ],
      "treat": [
        "Gain IV access and start fluids BEFORE the limb is released, if at all possible.",
        "Give a fluid bolus prior to release to protect the kidneys and dilute the potassium surge.",
        "Have calcium gluconate ready in case of arrhythmia on release.",
        "Monitor the ECG continuously through the release — watch for peaked T waves (hyperkalaemia).",
        "Analgesia before release, as release itself is intensely painful.",
        "After release, continue fluids, treat as major trauma."
      ],
      "drugs": [
        "fluids",
        "calcium-gluconate",
        "sodium-bicarb",
        "morphine",
        "ketamine"
      ],
      "transport": "Blue light. Pre-alert clearly as a crush injury with entrapment time — the receiving team needs to prepare for hyperkalaemia.",
      "tree": {
        "q": "Has the limb been trapped for more than about an hour?",
        "yes": "High risk of crush syndrome. Fluids BEFORE release if possible, calcium gluconate ready, continuous ECG, analgesia, transport hot after release.",
        "no": "Lower risk but still monitor. Analgesia, fluids, treat other injuries, transport priority 2 unless other red flags."
      }
    },
    {
      "id": "traumatic-amputation",
      "name": "Traumatic Amputation",
      "category": "trauma",
      "priority": "red",
      "alsoKnownAs": [
        "lost limb",
        "amputated arm",
        "amputated leg",
        "severed limb"
      ],
      "summary": "Partial or complete loss of a limb from trauma. Bleeding control is the priority; preserve the part.",
      "assess": [
        "Confirm the level of amputation and whether it is complete or partial.",
        "Assess for catastrophic bleeding from the stump — usually the dominant problem.",
        "Look for other injuries from the same mechanism."
      ],
      "redFlags": [
        "This is a catastrophic haemorrhage risk — treat the bleeding first, every time.",
        "Shock developing despite bleeding control."
      ],
      "treat": [
        "Direct pressure on the stump; apply a tourniquet high and tight if bleeding isn't controlled.",
        "Note the tourniquet time and hand it over.",
        "TXA early.",
        "Wrap the amputated part in a dry dressing, place in a plastic bag, then that bag in ice water — do not put the part directly on ice.",
        "Bring the part to hospital with the patient even if reattachment seems unlikely.",
        "Strong analgesia, IV fluids for shock."
      ],
      "drugs": [
        "txa",
        "fluids",
        "morphine",
        "ketamine",
        "oxygen"
      ],
      "transport": "Immediate blue light. Pre-alert as major trauma/amputation so the team is ready for possible reattachment.",
      "tree": {
        "q": "Is the stump still bleeding significantly?",
        "yes": "Tourniquet high and tight, note the time, TXA, transport hot with the preserved part.",
        "no": "Dress the stump, control any ooze with pressure, preserve the amputated part correctly, analgesia, transport hot."
      }
    },
    {
      "id": "abdominal-trauma",
      "name": "Abdominal Trauma",
      "category": "trauma",
      "priority": "amber",
      "alsoKnownAs": [
        "stomach injury",
        "abdo trauma",
        "evisceration",
        "gut wound"
      ],
      "summary": "Blunt or penetrating injury to the abdomen. Internal bleeding can be severe with little external sign.",
      "assess": [
        "Mechanism — blunt (RTC, fall, assault) vs penetrating (stab, gunshot).",
        "Abdominal pain, tenderness, guarding, bruising (seatbelt sign).",
        "Signs of shock out of proportion to visible injury suggest internal bleeding.",
        "Look for evisceration — organs protruding through a wound."
      ],
      "redFlags": [
        "Any sign of shock with abdominal trauma is a red flag — internal bleeding until proven otherwise.",
        "Evisceration is a red flag requiring specific care and urgent transport.",
        "Penetrating wounds to the abdomen are always time-critical."
      ],
      "treat": [
        "Do NOT push protruding organs back in.",
        "Cover an evisceration with a moist, sterile, non-adherent dressing, then a loose covering — keep it warm and moist.",
        "Leave any impaled object in place, secure it, do not remove.",
        "High-flow oxygen, IV access, cautious fluids to maintain a radial pulse.",
        "TXA if significant haemorrhage suspected.",
        "Analgesia, keep warm, minimise movement."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "txa",
        "morphine",
        "ketamine"
      ],
      "transport": "Blue light for any penetrating injury, evisceration or shock. Pre-alert as major trauma.",
      "tree": {
        "q": "Is there evisceration or a penetrating wound?",
        "yes": "Do not push organs back in / do not remove impaled objects. Cover appropriately, TXA, cautious fluids, transport hot, pre-alert.",
        "no": {
          "q": "Any signs of shock (pale, fast pulse, low BP)?",
          "yes": "Suspect internal bleeding. Cautious fluids, TXA, transport hot.",
          "no": "Analgesia, monitor closely for delayed shock, transport priority 2."
        }
      }
    },
    {
      "id": "drowning",
      "name": "Drowning / Submersion",
      "category": "trauma",
      "priority": "red",
      "alsoKnownAs": [
        "near drowning",
        "submersion",
        "water rescue",
        "pool incident"
      ],
      "summary": "Respiratory impairment from submersion in water. Rescue breaths are the priority, unlike most arrests.",
      "assess": [
        "How long were they submerged? Water temperature matters — cold water can be protective.",
        "Breathing status, level of consciousness on retrieval.",
        "Consider a co-existing spinal injury if diving or a fall into water."
      ],
      "redFlags": [
        "Any period of unconsciousness or ineffective breathing after submersion.",
        "Cardiac arrest following drowning — hypoxia is the primary cause, not a cardiac event.",
        "Delayed deterioration (secondary drowning) can occur hours later — always transport."
      ],
      "treat": [
        "Remove from the water safely — do not become a second casualty.",
        "For arrest: give 5 rescue breaths first, then start CPR 30:2 — ventilation is critical in drowning arrest.",
        "High-flow oxygen for all but the mildest cases.",
        "Keep warm and horizontal — hypothermia is likely and can complicate resuscitation.",
        "C-spine precautions if diving or a fall is possible.",
        "Even patients who seem fine after coughing up water need transport for observation."
      ],
      "drugs": [
        "oxygen",
        "fluids"
      ],
      "transport": "Transport all drowning incidents, even apparently mild ones — risk of delayed pulmonary complications. Blue light for arrest or ongoing hypoxia.",
      "tree": {
        "q": "Is the patient in cardiac arrest?",
        "yes": "Give 5 rescue breaths first, then CPR 30:2, high-flow oxygen/ventilation, warm the patient, transport hot once any ROSC or per protocol.",
        "no": {
          "q": "Was there any period of unconsciousness or breathing difficulty?",
          "yes": "High-flow oxygen, keep warm, C-spine if indicated, transport — risk of secondary drowning.",
          "no": "Monitor for 30 min if possible, keep warm, transport for observation regardless — symptoms can be delayed."
        }
      }
    },
    {
      "id": "choking",
      "name": "Choking / Airway Obstruction",
      "category": "airway",
      "priority": "red",
      "alsoKnownAs": [
        "airway blocked",
        "food stuck",
        "can't breathe foreign body",
        "obstruction"
      ],
      "summary": "Foreign body obstructing the airway. Severity dictates technique — encourage coughing if still effective.",
      "assess": [
        "Can they speak, cough, or breathe at all?",
        "Effective cough = mild obstruction. Ineffective cough or silence = severe.",
        "Watch for cyanosis, exhaustion, or loss of consciousness."
      ],
      "redFlags": [
        "Silent, unable to cough or speak — severe obstruction, act immediately.",
        "Loss of consciousness with obstruction — start CPR."
      ],
      "treat": [
        "Mild (effective cough): encourage coughing, do nothing else, stay with them.",
        "Severe, conscious: up to 5 back blows, then up to 5 abdominal thrusts, reassess between each.",
        "Alternate back blows and abdominal thrusts until it clears or they lose consciousness.",
        "Unconscious: start CPR — compressions can help dislodge the object. Check the mouth before each set of breaths.",
        "Once cleared, still examine and consider transport — thrusts can cause internal injury."
      ],
      "drugs": [
        "oxygen"
      ],
      "transport": "Transport anyone who received abdominal thrusts (risk of internal injury) or any severe episode. Blue light if it progressed to arrest.",
      "tree": {
        "q": "Is the cough effective (can they speak/breathe)?",
        "yes": "Mild obstruction — encourage coughing, stay with them, reassess continuously.",
        "no": {
          "q": "Are they conscious?",
          "yes": "Severe obstruction — up to 5 back blows, then up to 5 abdominal thrusts, alternate, reassess between each.",
          "no": "Start CPR 30:2, check mouth before breaths, treat as arrest, transport hot once resolved."
        }
      }
    },
    {
      "id": "smoke-inhalation",
      "name": "Smoke Inhalation / Toxic Gas Exposure",
      "category": "airway",
      "priority": "red",
      "alsoKnownAs": [
        "smoke inhalation",
        "house fire",
        "CO exposure",
        "toxic fumes"
      ],
      "summary": "Inhalation of smoke or combustion gases — carbon monoxide and cyanide are the hidden killers alongside airway burns.",
      "assess": [
        "Soot around the nose/mouth, singed nasal hairs, hoarse voice, cough.",
        "Headache, confusion, nausea suggest carbon monoxide poisoning.",
        "Enclosed space fire, especially with burning plastics, raises cyanide risk.",
        "SpO2 readings can be falsely normal in CO poisoning — don't be reassured by a good number."
      ],
      "redFlags": [
        "Any sign of airway burn — swelling can progress rapidly to obstruction.",
        "Reduced consciousness, seizure, or cardiovascular instability suggests severe CO or cyanide toxicity.",
        "Enclosed space fire with soot/burns raises strong suspicion of cyanide exposure."
      ],
      "treat": [
        "Remove from the toxic environment as soon as safely possible.",
        "High-flow oxygen via non-rebreather regardless of SpO2 reading — displaces carbon monoxide.",
        "Monitor airway closely for progressive swelling — early transport if any concern.",
        "Treat suspected cyanide exposure as a critical transport — hospital antidote treatment required.",
        "Support breathing if inadequate."
      ],
      "drugs": [
        "oxygen",
        "fluids"
      ],
      "transport": "Blue light for any airway burn signs, reduced consciousness, or enclosed-space fire exposure. Pre-alert for possible CO/cyanide toxicity.",
      "tree": {
        "q": "Any airway burn signs or reduced consciousness?",
        "yes": "Critical — high-flow oxygen, monitor airway constantly, transport hot, pre-alert for CO/cyanide treatment.",
        "no": "High-flow oxygen regardless of SpO2, monitor for delayed symptoms, transport for CO level check."
      }
    },
    {
      "id": "anaphylaxis",
      "name": "Anaphylaxis",
      "category": "medical",
      "priority": "red",
      "alsoKnownAs": [
        "allergic reaction",
        "allergy",
        "swelling",
        "epipen"
      ],
      "summary": "Severe allergic reaction with airway swelling, wheeze or shock. Adrenaline is the treatment.",
      "assess": [
        "Rapid onset after a trigger (food, sting, drug).",
        "Swelling of lips, tongue or throat; wheeze; hoarse voice.",
        "Widespread rash, low blood pressure, faintness."
      ],
      "redFlags": [
        "Any airway swelling, wheeze or shock is anaphylaxis — treat now.",
        "It can rebound after adrenaline wears off — always transport."
      ],
      "treat": [
        "Adrenaline 0.5 mg (1:1,000) IM to the outer thigh — do not delay.",
        "High-flow oxygen.",
        "Lie flat with legs raised if shocked; sit up if breathing is the problem.",
        "Repeat adrenaline every 5 min if no improvement.",
        "IV fluids for shock.",
        "Salbutamol neb for wheeze; hydrocortisone and chlorphenamine as adjuncts."
      ],
      "drugs": [
        "adrenaline-anaphylaxis",
        "oxygen",
        "fluids",
        "salbutamol",
        "hydrocortisone",
        "chlorphenamine"
      ],
      "transport": "Always transport, even if they improve. Rebound reactions are common. Blue light if unstable.",
      "tree": {
        "q": "Airway swelling, wheeze, or shock present?",
        "yes": "This is anaphylaxis. Adrenaline 0.5 mg IM NOW, oxygen, position, repeat adrenaline every 5 min, fluids. Transport.",
        "no": "Milder allergic reaction: chlorphenamine, monitor closely for any progression, low threshold to give adrenaline and transport."
      }
    },
    {
      "id": "asthma",
      "name": "Acute Asthma / Breathing Difficulty",
      "category": "airway",
      "priority": "amber",
      "alsoKnownAs": [
        "asthma attack",
        "wheeze",
        "cant breathe",
        "SOB",
        "COPD"
      ],
      "summary": "Wheeze, breathlessness, tight chest. Can deteriorate to a silent, exhausted chest.",
      "assess": [
        "Wheeze, prolonged breathing out, use of neck and shoulder muscles.",
        "Can they speak full sentences? Single words is severe.",
        "A silent chest and exhaustion is life-threatening."
      ],
      "redFlags": [
        "Can't complete sentences, exhaustion, or a silent chest — transport hot.",
        "Falling SpO2 despite treatment.",
        "Drowsiness in a breathless patient is a pre-arrest sign."
      ],
      "treat": [
        "Sit upright, keep calm.",
        "Salbutamol 5 mg nebulised, driven by oxygen.",
        "Add ipratropium 500 mcg for a severe attack.",
        "Oxygen to keep SpO2 94-98% (88-92% if COPD).",
        "Hydrocortisone (or oral prednisolone if tolerated) for a severe attack.",
        "Magnesium sulphate IV for life-threatening asthma not responding to nebs.",
        "Repeat nebs back-to-back if severe."
      ],
      "drugs": [
        "salbutamol",
        "ipratropium",
        "oxygen",
        "hydrocortisone",
        "prednisolone",
        "magnesium-sulphate"
      ],
      "transport": "Transport anything beyond a mild, quickly-settling attack. Blue light if severe or not improving.",
      "tree": {
        "q": "Can the patient speak in full sentences?",
        "yes": "Moderate: salbutamol neb, oxygen to target, reassess. Transport if not settling quickly.",
        "no": {
          "q": "Is there a silent chest, exhaustion, or falling SpO2?",
          "yes": "Life-threatening: back-to-back salbutamol + ipratropium, hydrocortisone, magnesium sulphate IV, oxygen, transport blue light, pre-alert.",
          "no": "Severe: back-to-back salbutamol + ipratropium, hydrocortisone, oxygen, transport blue light."
        }
      }
    },
    {
      "id": "stroke",
      "name": "Stroke",
      "category": "neuro",
      "priority": "red",
      "alsoKnownAs": [
        "FAST",
        "facial droop",
        "slurred speech",
        "CVA",
        "one sided weakness"
      ],
      "summary": "Facial droop, arm weakness, speech problems. Time is brain — onset time is everything.",
      "assess": [
        "Face: is one side drooping?",
        "Arms: can they hold both up, or does one drift?",
        "Speech: slurred or muddled?",
        "Time: when were they last seen well? This drives treatment."
      ],
      "redFlags": [
        "Any FAST-positive sign is a blue-light transport.",
        "A reduced consciousness level alongside is high risk."
      ],
      "treat": [
        "Nothing by mouth — swallow may be unsafe.",
        "Position comfortably, protect a weak limb.",
        "Check blood glucose — a low can mimic a stroke exactly.",
        "Oxygen only if their SpO2 is low.",
        "Record the exact time of onset and hand it over clearly."
      ],
      "drugs": [
        "oxygen",
        "glucose-iv"
      ],
      "transport": "Blue light to a stroke-capable hospital. Pre-alert with the onset time — it decides whether clot-busting is possible.",
      "tree": {
        "q": "Is the blood glucose normal?",
        "yes": "Treat as a stroke: nothing by mouth, note onset time, blue-light transport, pre-alert.",
        "no": "Correct the glucose first (low sugar mimics stroke). Reassess — if signs clear, it was the sugar; if not, transport as stroke."
      }
    },
    {
      "id": "seizure",
      "name": "Seizure",
      "category": "neuro",
      "priority": "amber",
      "alsoKnownAs": [
        "fit",
        "convulsion",
        "epilepsy",
        "status"
      ],
      "summary": "Convulsion. Most self-terminate; one lasting over 5 minutes is an emergency.",
      "assess": [
        "Note the time it started — 5 minutes is the treatment threshold.",
        "Protect from injury; do not restrain or put anything in the mouth.",
        "Look for a cause — low sugar, head injury, overdose, pregnancy."
      ],
      "redFlags": [
        "Lasting over 5 min, or repeating without waking, is status — transport.",
        "First-ever seizure, or one with injury, always transports.",
        "A seizure in pregnancy (eclampsia) is a red flag."
      ],
      "treat": [
        "Cushion the head, clear the space around them.",
        "Oxygen once you can safely apply it.",
        "Check blood glucose and correct a low.",
        "Midazolam if it lasts beyond 5 minutes; diazepam rectal or lorazepam IV are alternatives.",
        "If pregnant/postpartum and seizing, treat as eclampsia — magnesium sulphate.",
        "Recovery position once it stops.",
        "Stay with them through the drowsy recovery phase."
      ],
      "drugs": [
        "midazolam",
        "diazepam",
        "lorazepam",
        "oxygen",
        "glucose-iv",
        "glucose-gel",
        "magnesium-sulphate"
      ],
      "transport": "Transport first-ever, prolonged, repeated, injury, pregnancy, or a poor recovery. A known epileptic who fully recovers may sometimes stay.",
      "tree": {
        "q": "Is the patient pregnant or recently postpartum?",
        "yes": "Treat as eclampsia — magnesium sulphate 4 g IV, oxygen, transport blue light, pre-alert maternity.",
        "no": {
          "q": "Has the seizure lasted more than 5 minutes, or is it repeating?",
          "yes": "Status epilepticus. Midazolam (or diazepam/lorazepam) now, oxygen, check glucose, transport blue light.",
          "no": {
            "q": "Is this a known epileptic who has fully recovered with no injury?",
            "yes": "May stay on scene with advice, if fully recovered and safe. Safety-net clearly.",
            "no": "First seizure, injury, or poor recovery — transport priority 2."
          }
        }
      }
    },
    {
      "id": "febrile-seizure",
      "name": "Febrile Seizure (Paediatric)",
      "category": "paeds",
      "priority": "amber",
      "alsoKnownAs": [
        "fever fit",
        "child seizure",
        "febrile convulsion"
      ],
      "summary": "A seizure in a young child (typically 6 months to 6 years) triggered by a rapid rise in temperature.",
      "assess": [
        "Age, temperature, duration of the seizure and whether it's the first episode.",
        "Simple febrile seizure: generalised, under 15 min, full recovery, no repeat within 24 h.",
        "Complex features: focal, over 15 min, repeats within the same illness, incomplete recovery."
      ],
      "redFlags": [
        "Seizure lasting over 5 minutes without stopping — treat as status epilepticus.",
        "Any complex features, or the child under 6 months, or looking generally unwell (possible meningitis/sepsis).",
        "Not returning to normal alertness after the seizure."
      ],
      "treat": [
        "Protect from injury, do not restrain, clear the space.",
        "Loosen clothing and remove excess layers — do not actively cool aggressively or use cold water/fanning.",
        "Recovery position once the seizure stops.",
        "Midazolam (buccal) or rectal diazepam, weight-based, if it continues past 5 minutes.",
        "Check blood glucose.",
        "Reassure the parents — most febrile seizures are frightening but benign."
      ],
      "drugs": [
        "midazolam",
        "diazepam",
        "glucose-gel",
        "paracetamol",
        "ibuprofen"
      ],
      "transport": "Transport all first-presentation febrile seizures and any with complex features. A simple, fully recovered seizure in a known pattern may be discussed with parents/guidance, but low threshold to transport in RP.",
      "tree": {
        "q": "Has the seizure lasted more than 5 minutes?",
        "yes": "Treat as status — weight-based midazolam/diazepam, oxygen, transport blue light, pre-alert.",
        "no": {
          "q": "Are there complex features or is the child under 6 months?",
          "yes": "Transport for full assessment — sepsis/meningitis must be excluded.",
          "no": "Simple febrile seizure — loosen clothing, reassure parents, check glucose, transport priority 2 for review."
        }
      }
    },
    {
      "id": "paeds-choking",
      "name": "Paediatric Choking",
      "category": "paeds",
      "priority": "red",
      "alsoKnownAs": [
        "child choking",
        "infant choking",
        "baby choking"
      ],
      "summary": "Foreign body airway obstruction in an infant or child — technique differs from adults, especially under 1 year.",
      "assess": [
        "Can the child cry, cough or breathe? Effective cough vs silent/ineffective.",
        "Age matters: infant (under 1) technique differs from child technique.",
        "Watch for cyanosis, exhaustion or loss of consciousness."
      ],
      "redFlags": [
        "Silent, ineffective cough, or cyanosis — severe obstruction, act immediately.",
        "Loss of consciousness — start infant/child CPR."
      ],
      "treat": [
        "Mild (effective cough): encourage coughing, do nothing else, stay close.",
        "Severe, infant (under 1), conscious: 5 back blows (head down, supported) then 5 chest thrusts (not abdominal thrusts in infants).",
        "Severe, child (over 1), conscious: 5 back blows then 5 abdominal thrusts, alternate.",
        "Unconscious: start CPR with the paediatric ratio, check the mouth before each set of breaths.",
        "Do not perform blind finger sweeps.",
        "Transport for assessment even after successful clearance."
      ],
      "drugs": [
        "oxygen"
      ],
      "transport": "Transport all severe episodes and anyone who received thrusts. Blue light if it progressed to arrest or hypoxia.",
      "tree": {
        "q": "Is the cough effective?",
        "yes": "Mild — encourage coughing, stay with the child, reassess continuously.",
        "no": {
          "q": "Is the child under 1 year old?",
          "yes": "Infant technique: 5 back blows then 5 chest thrusts, alternate, reassess between each. CPR if unconscious.",
          "no": "Child technique: 5 back blows then 5 abdominal thrusts, alternate, reassess between each. CPR if unconscious."
        }
      }
    },
    {
      "id": "paeds-arrest",
      "name": "Paediatric Cardiac Arrest",
      "category": "paeds",
      "priority": "red",
      "alsoKnownAs": [
        "child arrest",
        "infant arrest",
        "baby not breathing",
        "paeds resus"
      ],
      "summary": "Cardiac arrest in an infant or child. Usually caused by hypoxia rather than a primary cardiac event — airway and breathing come first.",
      "assess": [
        "Unresponsive, not breathing normally or only gasping, no signs of life.",
        "Estimate weight (age-based formula or tape) for drug dosing.",
        "Consider the likely cause — respiratory, choking, sepsis, trauma, drowning."
      ],
      "redFlags": [
        "This is the highest-acuity call in the game — treat as immediately time-critical.",
        "Hypoxia is the most common cause — ventilation quality matters enormously."
      ],
      "treat": [
        "5 initial rescue breaths before starting compressions (different from adult sequence).",
        "CPR at 15:2 (two-rescuer paediatric ratio), compress at least one-third of chest depth.",
        "Attach the defibrillator/monitor with paediatric pads if available; shock a shockable rhythm.",
        "Adrenaline 10 mcg/kg IV/IO every 3-5 min (weight-based, roughly 1/10th adult dose per 10 kg).",
        "Gain IO access early if IV is difficult — very common in paediatric resus.",
        "Treat reversible causes — hypoxia is the number one priority to correct.",
        "Keep the child warm."
      ],
      "drugs": [
        "adrenaline-arrest",
        "amiodarone",
        "oxygen",
        "fluids"
      ],
      "transport": "Transport with ongoing CPR once appropriate, blue light, pre-alert clearly as a paediatric arrest with weight/age if known.",
      "tree": {
        "q": "Is the rhythm shockable (VF / pulseless VT)?",
        "yes": "Shock, then 2 min CPR at 15:2. Weight-based adrenaline after the 2nd shock then every 3-5 min. Amiodarone after 3rd shock.",
        "no": "5 rescue breaths first, then CPR 15:2. Weight-based adrenaline every 3-5 min. Prioritise correcting hypoxia — the most likely cause."
      }
    },
    {
      "id": "croup",
      "name": "Croup",
      "category": "paeds",
      "priority": "amber",
      "alsoKnownAs": [
        "barking cough",
        "stridor child",
        "laryngotracheobronchitis"
      ],
      "summary": "Viral upper airway swelling in young children causing a barking cough and stridor, usually worse at night.",
      "assess": [
        "Barking (seal-like) cough, hoarse voice, stridor.",
        "Assess severity: stridor only on crying/exertion (mild) vs stridor at rest (moderate-severe).",
        "Look for exhaustion, cyanosis, or a drop in conscious level — signs of severe obstruction."
      ],
      "redFlags": [
        "Stridor at rest, or worsening despite treatment.",
        "Exhaustion, cyanosis, or reduced consciousness — critical airway obstruction.",
        "Drooling with an inability to swallow may suggest epiglottitis instead — do not examine the throat, keep the child calm and transport urgently."
      ],
      "treat": [
        "Keep the child calm and comforted, ideally sitting on a parent's lap — distress worsens obstruction.",
        "Do not examine the throat or upset the child unnecessarily.",
        "Dexamethasone oral — a single dose usually settles even moderate croup over a few hours.",
        "Nebulised adrenaline for severe croup with stridor at rest, alongside oxygen.",
        "High-flow oxygen (blow-by if a mask distresses them) if hypoxic.",
        "Reassess frequently — dexamethasone takes time to work."
      ],
      "drugs": [
        "dexamethasone",
        "prednisolone",
        "oxygen",
        "adrenaline-anaphylaxis"
      ],
      "transport": "Transport all moderate-severe croup and any with stridor at rest. Mild croup that settles may be discussed with parents, but transport if any doubt or suspicion of epiglottitis.",
      "tree": {
        "q": "Is there stridor at rest, or signs of exhaustion/cyanosis?",
        "yes": "Severe. Keep calm, nebulised adrenaline, oxygen, dexamethasone, transport blue light, pre-alert.",
        "no": {
          "q": "Is there stridor only on crying or exertion?",
          "yes": "Moderate. Dexamethasone, keep calm, monitor closely, transport priority 2.",
          "no": "Mild — barking cough only. Dexamethasone, reassure parents, safety-net, transport for review."
        }
      }
    },
    {
      "id": "hypoglycaemia",
      "name": "Hypoglycaemia",
      "category": "medical",
      "priority": "amber",
      "alsoKnownAs": [
        "low blood sugar",
        "diabetic",
        "hypo",
        "low sugar"
      ],
      "summary": "Low blood sugar. Confusion, sweating, aggression, then unconsciousness. Fast to fix.",
      "assess": [
        "Blood glucose low (below 4 mmol/L).",
        "Sweating, shaking, confusion, odd or aggressive behaviour.",
        "Can they swallow safely? This decides the route."
      ],
      "redFlags": [
        "Unconscious, fitting, or unable to protect the airway.",
        "Not improving after treatment.",
        "A deliberate overdose of insulin or diabetic medication."
      ],
      "treat": [
        "Conscious and swallowing: oral glucose gel or a sugary drink.",
        "Unsafe swallow or unconscious: IV glucose 10%.",
        "No IV access: glucagon IM.",
        "Recheck glucose after each treatment.",
        "Once awake, give a longer-acting carbohydrate."
      ],
      "drugs": [
        "glucose-gel",
        "glucose-iv",
        "glucagon"
      ],
      "transport": "A simple hypo that fully recovers may stay with advice. Transport if caused by medication overdose, not improving, or they live alone.",
      "tree": {
        "q": "Can the patient swallow safely?",
        "yes": "Oral glucose gel or sugary drink, recheck in 10 min, follow with a longer-acting carb.",
        "no": "IV glucose 10% (or glucagon IM if no access). Recheck glucose. Protect the airway until they wake."
      }
    },
    {
      "id": "dka",
      "name": "Diabetic Ketoacidosis (DKA)",
      "category": "medical",
      "priority": "amber",
      "alsoKnownAs": [
        "DKA",
        "ketoacidosis",
        "high blood sugar",
        "diabetic emergency"
      ],
      "summary": "Dangerously high blood sugar with ketones and acidosis, usually in known diabetics. Fluids are the pre-hospital priority — do NOT give insulin.",
      "assess": [
        "High blood glucose, often well above 11 mmol/L.",
        "Deep, rapid breathing (Kussmaul respiration), fruity/pear-drop smelling breath.",
        "Nausea, vomiting, abdominal pain, confusion, dehydration.",
        "Ask about missed insulin doses, infection, or other illness as a trigger."
      ],
      "redFlags": [
        "Reduced consciousness or severe dehydration.",
        "Kussmaul breathing with a very high glucose reading.",
        "Signs of significant shock."
      ],
      "treat": [
        "Do NOT give insulin pre-hospital — this is a hospital-managed, carefully titrated treatment.",
        "IV fluids — cautious crystalloid boluses to correct dehydration and support circulation.",
        "High-flow oxygen if hypoxic.",
        "Monitor consciousness level closely — can deteriorate.",
        "Keep warm, reassure — this can be a frightening presentation.",
        "Bring glucose meter reading and any history to hospital."
      ],
      "drugs": [
        "fluids",
        "oxygen"
      ],
      "transport": "Always transport, blue light if reduced consciousness, severe dehydration or shock. Pre-alert as suspected DKA.",
      "tree": {
        "q": "Is there reduced consciousness or signs of significant shock?",
        "yes": "Critical DKA. Fluids, oxygen, no insulin, transport blue light, pre-alert.",
        "no": "Cautious IV fluids, monitor closely, transport priority 2, no insulin given pre-hospital."
      }
    },
    {
      "id": "sepsis",
      "name": "Sepsis",
      "category": "medical",
      "priority": "red",
      "alsoKnownAs": [
        "blood poisoning",
        "septic shock",
        "infection spreading",
        "NEWS"
      ],
      "summary": "Life-threatening organ dysfunction from infection. Recognise it early — the clock starts on scene, not at hospital.",
      "assess": [
        "Look for a source of infection alongside signs of being systemically unwell.",
        "Use a NEWS-style approach: raised respiratory rate, low SpO2, low BP, raised heart rate, altered consciousness, fever or hypothermia.",
        "Mottled or ashen skin, non-blanching rash, extreme pain out of proportion, or not passing urine are all high-risk features."
      ],
      "redFlags": [
        "Any red-flag sepsis sign: systolic BP under 90, heart rate over 130, respiratory rate over 25, reduced consciousness, mottled skin, non-blanching rash.",
        "A high NEWS-equivalent score with a suspected infection source."
      ],
      "treat": [
        "High-flow oxygen, titrate to target.",
        "IV access, take a full set of observations.",
        "IV fluid bolus (e.g. 500 ml) for signs of shock, reassess and repeat.",
        "Keep warm, reassure.",
        "Note the time observations were taken and hand over the trend, not just one number.",
        "Early transport — hospital antibiotics are the definitive treatment; nothing pre-hospital replaces that."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "paracetamol"
      ],
      "transport": "Any red-flag sepsis is a blue-light transport with a pre-alert — this triggers a hospital sepsis pathway.",
      "tree": {
        "q": "Any red-flag sign (BP under 90, HR over 130, RR over 25, reduced consciousness, mottled skin, non-blanching rash)?",
        "yes": "Red-flag sepsis. Oxygen, IV fluid bolus, transport blue light, pre-alert as suspected sepsis.",
        "no": {
          "q": "Is there a clear infection source with abnormal but non-red-flag observations?",
          "yes": "Amber sepsis risk. Fluids if dehydrated, monitor closely, transport priority 2, safety-net.",
          "no": "Low risk currently — treat the underlying infection symptoms, advise on worsening signs, consider transport for review."
        }
      }
    },
    {
      "id": "meningitis",
      "name": "Meningitis",
      "category": "medical",
      "priority": "red",
      "alsoKnownAs": [
        "meningococcal",
        "stiff neck",
        "non-blanching rash",
        "meningitis rash"
      ],
      "summary": "Infection of the linings around the brain and spinal cord — can progress to septicaemia extremely fast, especially in children.",
      "assess": [
        "Fever, severe headache, neck stiffness, photophobia (light hurts the eyes).",
        "Non-blanching rash — press a glass against it; if it doesn't fade, treat as an emergency.",
        "In infants: high-pitched cry, bulging fontanelle, lethargy, poor feeding, floppy.",
        "Rapid deterioration is typical — reassess constantly."
      ],
      "redFlags": [
        "Any non-blanching rash with fever is meningococcal septicaemia until proven otherwise.",
        "Reduced consciousness, seizure, or signs of shock.",
        "Rapid deterioration between assessments."
      ],
      "treat": [
        "High-flow oxygen.",
        "IV access, fluids for any signs of shock.",
        "Treat seizures promptly if they occur.",
        "Keep reassessing — this can deteriorate within minutes.",
        "Minimise unnecessary handling and stimulation but do not delay transport.",
        "Note timing of rash onset and any spread for handover."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "midazolam",
        "paracetamol"
      ],
      "transport": "Immediate blue-light transport for any suspected meningitis, especially with a rash or shock. Pre-alert clearly — hospital IV antibiotics need to start fast.",
      "tree": {
        "q": "Is there a non-blanching rash, reduced consciousness, or shock?",
        "yes": "Treat as meningococcal septicaemia. Oxygen, fluids for shock, transport hot immediately, pre-alert.",
        "no": "Fever with neck stiffness/photophobia but no rash or shock — still transport promptly, monitor closely for rapid deterioration."
      }
    },
    {
      "id": "acute-abdomen",
      "name": "Acute Abdomen",
      "category": "medical",
      "priority": "amber",
      "alsoKnownAs": [
        "stomach pain",
        "abdominal pain",
        "appendicitis",
        "bowel obstruction"
      ],
      "summary": "Severe abdominal pain of medical origin — many possible causes, several time-critical. Give analgesia; it does not mask a genuine surgical abdomen.",
      "assess": [
        "Location, onset, character and radiation of the pain.",
        "Associated vomiting, fever, bowel habit change, or in women, possible pregnancy/gynaecological cause.",
        "Look for guarding, rigidity, or a pulsatile mass (possible aneurysm) — signs of a surgical emergency.",
        "Check observations for signs of shock or sepsis."
      ],
      "redFlags": [
        "Sudden, severe, tearing pain (possible aortic aneurysm) especially with collapse or unequal pulses.",
        "Rigid, board-like abdomen with guarding.",
        "Signs of shock or sepsis alongside abdominal pain.",
        "Any pain in a pregnant patient needs urgent assessment."
      ],
      "treat": [
        "Give appropriate analgesia early — paracetamol, entonox, or titrated opioid as needed. Adequate analgesia does not hide a surgical diagnosis and should not be withheld.",
        "Nil by mouth where possible in case surgery is needed.",
        "IV access and fluids if there are signs of shock.",
        "Position of comfort, usually with knees drawn up.",
        "Antiemetic for nausea/vomiting.",
        "Reassess pain and observations regularly."
      ],
      "drugs": [
        "paracetamol",
        "morphine",
        "entonox",
        "ondansetron",
        "fluids"
      ],
      "transport": "Transport all significant acute abdominal pain. Blue light for suspected aneurysm, shock, or a rigid abdomen.",
      "tree": {
        "q": "Sudden tearing pain with collapse, unequal pulses, or a pulsatile mass?",
        "yes": "Suspect ruptured/leaking aneurysm — critical. Oxygen, cautious fluids (permissive hypotension), transport hot immediately, pre-alert.",
        "no": {
          "q": "Rigid abdomen, guarding, or signs of shock/sepsis?",
          "yes": "Likely surgical abdomen. Analgesia, IV fluids if shocked, nil by mouth, transport blue light.",
          "no": "Analgesia, antiemetic if needed, nil by mouth, transport priority 2 for assessment."
        }
      }
    },
    {
      "id": "sickle-cell-crisis",
      "name": "Sickle Cell Crisis",
      "category": "medical",
      "priority": "amber",
      "alsoKnownAs": [
        "sickle cell pain crisis",
        "vaso-occlusive crisis",
        "sickle cell disease"
      ],
      "summary": "Severe pain from sickled red cells blocking small blood vessels, in a patient with known sickle cell disease.",
      "assess": [
        "Known sickle cell disease with severe pain, typically in the back, chest, limbs or abdomen.",
        "Ask about triggers: cold, dehydration, infection, exertion, altitude.",
        "Check for chest pain, breathlessness or fever — acute chest syndrome is a life-threatening complication.",
        "Assess pain severity — sickle cell pain is often described as among the worst pain a patient experiences."
      ],
      "redFlags": [
        "Chest pain, breathlessness, or hypoxia — possible acute chest syndrome, a medical emergency.",
        "High fever — risk of serious infection in these patients.",
        "Signs of stroke — sickle cell disease raises stroke risk, including in children.",
        "Priapism, or severe abdominal pain."
      ],
      "treat": [
        "High-flow oxygen, particularly if SpO2 is reduced or chest symptoms present.",
        "Early, adequate analgesia — do not undertreat sickle cell pain; opioids are often needed and appropriate.",
        "IV fluids to support hydration, a common precipitant and part of treatment.",
        "Keep the patient warm — cold can worsen sickling.",
        "Treat fever and monitor closely for signs of chest syndrome or sepsis."
      ],
      "drugs": [
        "oxygen",
        "morphine",
        "paracetamol",
        "fluids",
        "entonox"
      ],
      "transport": "Transport all sickle cell crises for assessment and pain management. Blue light for chest symptoms, high fever, stroke signs or severe pain uncontrolled on scene.",
      "tree": {
        "q": "Any chest pain, breathlessness or low SpO2?",
        "yes": "Possible acute chest syndrome — critical. High-flow oxygen, fluids, analgesia, transport hot, pre-alert.",
        "no": "Vaso-occlusive pain crisis — early strong analgesia, oxygen if hypoxic, warm fluids, transport priority 2."
      }
    },
    {
      "id": "reduced-consciousness",
      "name": "Reduced Consciousness / GCS Assessment",
      "category": "neuro",
      "priority": "red",
      "alsoKnownAs": [
        "unconscious",
        "unresponsive",
        "AVPU",
        "GCS",
        "not waking up"
      ],
      "summary": "A patient with any level of reduced consciousness needs a systematic cause-hunt — many causes are rapidly reversible.",
      "assess": [
        "Score GCS (or AVPU if quicker) and repeat it — the trend matters as much as the number.",
        "Work through reversible causes: hypoxia, hypoglycaemia, head injury, seizure/post-ictal, overdose/poisoning, stroke, sepsis, alcohol.",
        "Check pupils, blood glucose, temperature and basic observations early.",
        "Look for medical alert jewellery, medication, or bystander information about onset."
      ],
      "redFlags": [
        "GCS 8 or below — airway is at high risk, involve senior help/consider advanced airway management.",
        "A falling GCS between assessments.",
        "Any focal neurological signs or unequal pupils."
      ],
      "treat": [
        "Airway first — position, adjuncts, suction as needed. A GCS of 8 or below often needs airway support.",
        "High-flow oxygen.",
        "Check and correct blood glucose immediately — a fast, reversible cause.",
        "Consider naloxone if opioid overdose is possible.",
        "Recovery position if breathing adequately and airway is not otherwise being managed.",
        "Keep reassessing GCS/AVPU on a clock, not just once."
      ],
      "drugs": [
        "oxygen",
        "glucose-iv",
        "glucagon",
        "naloxone",
        "fluids"
      ],
      "transport": "Blue light for GCS 8 or below, a falling GCS, or any focal signs. Pre-alert with the working differential and last known GCS.",
      "tree": {
        "q": "Is the GCS 8 or below?",
        "yes": "Airway at risk. Manage airway aggressively, oxygen, check glucose, consider naloxone, transport hot, pre-alert.",
        "no": {
          "q": "Is the blood glucose abnormal?",
          "yes": "Correct the glucose per hypoglycaemia/DKA protocol, reassess GCS, transport based on response.",
          "no": "Work through remaining causes (overdose, head injury, sepsis, stroke, alcohol). Treat as found, transport priority 2 or hotter based on trend."
        }
      }
    },
    {
      "id": "syncope",
      "name": "Syncope / Collapse",
      "category": "neuro",
      "priority": "amber",
      "alsoKnownAs": [
        "fainting",
        "passed out",
        "blackout",
        "collapse query cause"
      ],
      "summary": "Transient loss of consciousness with spontaneous full recovery. Most are benign vasovagal episodes, but some hide a cardiac cause.",
      "assess": [
        "Ask what happened before, during and after — triggers, warning signs, duration, recovery.",
        "Vasovagal features: standing/heat/pain/emotion trigger, feeling hot/sweaty/nauseous beforehand, quick full recovery.",
        "Cardiac red flags: syncope during exertion, while lying/sitting, no warning, chest pain or palpitations before, family history of sudden death.",
        "Check for injury sustained during the fall, and a 12-lead ECG if available."
      ],
      "redFlags": [
        "Syncope during exertion or with no warning at all.",
        "Chest pain, breathlessness or palpitations before the event.",
        "An abnormal ECG, or a family history of sudden cardiac death.",
        "Syncope in a patient with known heart disease."
      ],
      "treat": [
        "Lie the patient flat with legs raised if a simple vasovagal picture and they are still symptomatic.",
        "Check blood glucose and observations, including a lying/standing BP if orthostatic syncope suspected.",
        "12-lead ECG for any collapse of uncertain cause.",
        "Treat any injury sustained during the fall.",
        "Reassure — most syncope is benign, but do not dismiss red flags."
      ],
      "drugs": [
        "oxygen",
        "glucose-gel",
        "fluids"
      ],
      "transport": "Transport any syncope with cardiac red flags, injury, or an unclear/first cause. A clear, typical vasovagal faint with full recovery and no red flags may be discussed with the patient, but low threshold to transport.",
      "tree": {
        "q": "Any cardiac red flags (exertional, no warning, chest pain/palpitations before, abnormal ECG, cardiac history)?",
        "yes": "Treat as possible cardiac syncope — 12-lead ECG, monitor, transport blue light, pre-alert.",
        "no": {
          "q": "Are the features classically vasovagal (trigger, prodrome, quick recovery)?",
          "yes": "Likely simple faint — lie flat/legs up, treat any fall injury, transport priority 2 for review.",
          "no": "Cause unclear — check glucose, ECG, full assessment, transport priority 2."
        }
      }
    },
    {
      "id": "hypothermia",
      "name": "Hypothermia",
      "category": "environ",
      "priority": "amber",
      "alsoKnownAs": [
        "cold exposure",
        "freezing",
        "low body temperature"
      ],
      "summary": "Core body temperature below 35°C. Handle gently — a cold heart is irritable and prone to arrhythmia.",
      "assess": [
        "History of cold exposure — outdoors, cold water, prolonged exposure, elderly/immobile indoors.",
        "Shivering, confusion, slurred speech, clumsiness (mild-moderate).",
        "Severe: shivering stops, muscle rigidity, reduced consciousness, very slow pulse and breathing.",
        "Handle the patient extremely gently — rough handling can trigger a fatal arrhythmia in severe hypothermia."
      ],
      "redFlags": [
        "Severe hypothermia with reduced consciousness or an unrecordable pulse.",
        "A hypothermic cardiac arrest — do not assume death until warm; resuscitation can succeed even after prolonged downtime.",
        "Any rough handling or jostling in severe cases."
      ],
      "treat": [
        "Remove from the cold environment, remove wet clothing, insulate well (blankets, foil).",
        "Passive rewarming for mild-moderate cases — do not actively rub or rapidly rewarm.",
        "Handle gently and minimise movement in moderate-severe hypothermia.",
        "Warm IV fluids if available; avoid cold fluids.",
        "If in cardiac arrest: start CPR, but note that drugs and shocks may be less effective until warmer — 'not dead until warm and dead' guides prolonged resuscitation.",
        "Continuous temperature and cardiac monitoring."
      ],
      "drugs": [
        "oxygen",
        "fluids"
      ],
      "transport": "Transport all moderate-severe hypothermia, blue light with any cardiac instability. Handle extremely gently throughout — including during extrication and transport.",
      "tree": {
        "q": "Is the patient in cardiac arrest?",
        "yes": "Start CPR immediately, handle gently, continue resuscitation longer than usual — hypothermia can be protective. Transport hot, pre-alert for rewarming.",
        "no": {
          "q": "Is there reduced consciousness, rigidity, or a very slow pulse (severe hypothermia)?",
          "yes": "Handle minimally and gently, passive rewarming, warm fluids if available, transport hot, avoid rough movement.",
          "no": "Mild-moderate: remove wet clothing, insulate, passive rewarming, transport priority 2, monitor for deterioration."
        }
      }
    },
    {
      "id": "heat-stroke",
      "name": "Heat Stroke / Hyperthermia",
      "category": "environ",
      "priority": "red",
      "alsoKnownAs": [
        "heat exhaustion",
        "heat stroke",
        "overheating",
        "sunstroke"
      ],
      "summary": "Dangerously high core temperature, often with altered mental state. Cool aggressively — this is time-critical.",
      "assess": [
        "History of heat exposure, exertion in heat, or high ambient temperature.",
        "Heat exhaustion: sweating heavily, headache, nausea, weakness — still alert.",
        "Heat stroke: hot, often dry skin, confusion, seizure, reduced consciousness — a true emergency.",
        "Check temperature if able; very high readings alongside altered mental state confirm heat stroke."
      ],
      "redFlags": [
        "Altered mental state, seizure or collapse with heat exposure — treat as heat stroke.",
        "Skin that has stopped sweating despite the heat.",
        "Any core temperature that feels dangerously high with neurological symptoms."
      ],
      "treat": [
        "Move to a cool environment immediately, remove excess clothing.",
        "Active cooling: cold water, ice packs to neck/groin/armpits, fanning — cool as fast as possible.",
        "High-flow oxygen.",
        "IV fluids, cautiously — cool fluids if available.",
        "Treat seizures if they occur.",
        "Monitor temperature continuously if possible; stop aggressive cooling once improving to avoid overshoot."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "midazolam"
      ],
      "transport": "Blue light for any heat stroke (altered mental state). Continue active cooling throughout transport. Pre-alert.",
      "tree": {
        "q": "Is there confusion, seizure, or reduced consciousness?",
        "yes": "Heat stroke — critical. Aggressive active cooling, oxygen, fluids, transport hot, pre-alert.",
        "no": "Heat exhaustion — cool environment, oral fluids if tolerated, remove from heat, monitor for progression, transport if not settling."
      }
    },
    {
      "id": "electrocution",
      "name": "Electrocution",
      "category": "environ",
      "priority": "red",
      "alsoKnownAs": [
        "electric shock",
        "electrical injury",
        "lightning strike"
      ],
      "summary": "Injury from electrical current — scene safety comes first, then expect both burns and cardiac effects.",
      "assess": [
        "Confirm the power source is isolated before approaching — do not become a casualty.",
        "Look for entry and exit burn wounds, which can be deceptively small on the surface.",
        "Cardiac arrhythmias are common, including arrest — attach a monitor early.",
        "Consider associated trauma from a fall or being thrown."
      ],
      "redFlags": [
        "Cardiac arrest or any arrhythmia following electrocution.",
        "High-voltage exposure or lightning strike — internal injury can be severe despite limited external signs.",
        "Any loss of consciousness."
      ],
      "treat": [
        "Do not approach until the scene is confirmed safe / power isolated.",
        "If in arrest, start CPR immediately and attach the defibrillator — shockable rhythms are common after electrocution.",
        "High-flow oxygen, continuous ECG monitoring.",
        "Treat burns at entry/exit points per burns protocol.",
        "IV fluids for significant burns or shock.",
        "Full trauma assessment for associated injuries from a fall."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "morphine",
        "adrenaline-arrest",
        "amiodarone"
      ],
      "transport": "Blue light for any arrhythmia, loss of consciousness, high-voltage or lightning exposure. Pre-alert as electrical injury with likely cardiac and burn components.",
      "tree": {
        "q": "Is the patient in cardiac arrest?",
        "yes": "Confirm scene safety, start CPR, attach defibrillator — shock if indicated. Transport hot once appropriate.",
        "no": {
          "q": "Any arrhythmia, loss of consciousness, or high-voltage/lightning exposure?",
          "yes": "Continuous ECG monitoring, oxygen, treat burns, transport hot, pre-alert.",
          "no": "Treat visible burns, monitor ECG for a period, transport priority 2 for full assessment."
        }
      }
    },
    {
      "id": "hanging",
      "name": "Hanging / Strangulation",
      "category": "environ",
      "priority": "red",
      "alsoKnownAs": [
        "hanging",
        "strangulation",
        "asphyxiation",
        "ligature"
      ],
      "summary": "Airway and neck injury from hanging or strangulation. Treat as both an airway emergency and a spinal injury.",
      "assess": [
        "Assess airway patency, breathing, and level of consciousness immediately.",
        "Look for ligature marks, neck swelling, voice change, or subcutaneous crepitus (air under the skin).",
        "Consider a cervical spine injury, especially with a drop/suspension mechanism.",
        "Note the estimated time the ligature was in place — relevant for hypoxic brain injury risk."
      ],
      "redFlags": [
        "Any airway compromise, stridor, or voice change — can progress rapidly.",
        "Loss of consciousness at any point.",
        "Signs of spinal cord injury.",
        "Cardiac arrest from prolonged hypoxia."
      ],
      "treat": [
        "Full C-spine precautions from first contact.",
        "High-flow oxygen; support ventilation if inadequate.",
        "Manage the airway proactively — swelling can progress even after removal from the ligature.",
        "If in arrest, start CPR per standard arrest protocol with spinal precautions maintained.",
        "Treat as a major trauma patient given the mechanism.",
        "Approach with sensitivity — this may be a self-harm attempt; consider scene safety and the patient's mental state (see Self-Harm / Mental Health Crisis protocol)."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "adrenaline-arrest"
      ],
      "transport": "Blue light for all hanging/strangulation incidents regardless of apparent recovery — delayed airway swelling and hypoxic injury are real risks. Pre-alert as major trauma/airway.",
      "tree": {
        "q": "Is the patient in cardiac arrest?",
        "yes": "CPR with C-spine precautions maintained, oxygen/ventilation, transport hot once appropriate.",
        "no": {
          "q": "Any airway compromise, stridor, or voice change?",
          "yes": "Manage airway proactively, C-spine precautions, oxygen, transport hot, pre-alert.",
          "no": "Full C-spine precautions, monitor airway closely for delayed swelling, treat as major trauma, transport hot given the mechanism."
        }
      }
    },
    {
      "id": "excited-delirium",
      "name": "Acute Behavioural Disturbance / Excited Delirium",
      "category": "psych",
      "priority": "red",
      "alsoKnownAs": [
        "excited delirium",
        "agitated patient",
        "combative patient",
        "ABD"
      ],
      "summary": "Extreme agitation, aggression and often superhuman-seeming strength — a genuine medical emergency, often linked to stimulant drugs or acute mental illness.",
      "assess": [
        "Extreme agitation, aggression, incoherent shouting, high pain tolerance, sweating profusely.",
        "Often associated with stimulant drug use, acute psychosis, or alcohol withdrawal.",
        "This carries a real risk of sudden cardiac collapse — it is not simply a behavioural problem.",
        "Assess scene safety continuously — do not enter or stay in an unsafe scene."
      ],
      "redFlags": [
        "Sudden collapse after a period of extreme struggle — a recognised, serious complication.",
        "Very high temperature, exhaustion, or a rapidly falling level of consciousness.",
        "Restraint-related breathing difficulty — never restrain face-down with weight on the back/chest."
      ],
      "treat": [
        "Prioritise scene safety — wait for police/adequate numbers before approaching if there is a safety risk.",
        "Minimise physical struggle where possible; a calm, non-confrontational approach can de-escalate.",
        "If restraint is unavoidable, use safe positioning only — never prone with weight on the chest/back, and monitor breathing continuously.",
        "Sedation (e.g. midazolam) may be needed to prevent harm to the patient or others, per local protocol and only with adequate safety in place.",
        "Cool the patient if hyperthermic, high-flow oxygen, continuous monitoring for sudden collapse.",
        "Be ready to move immediately into cardiac arrest management — collapse can be sudden."
      ],
      "drugs": [
        "midazolam",
        "oxygen",
        "fluids"
      ],
      "transport": "Blue light, continuous monitoring throughout transport with the patient positioned safely, never prone and restrained. Pre-alert as excited delirium/ABD.",
      "tree": {
        "q": "Is the scene safe to approach?",
        "yes": {
          "q": "Is the patient in severe extremis (exhaustion, very high temperature, falling consciousness)?",
          "yes": "High risk of sudden collapse. Safe positioning, cool if hot, sedation per protocol, continuous monitoring, transport hot, be ready for arrest management.",
          "no": "De-escalate calmly, minimise restraint, monitor closely, transport, reassess continuously."
        },
        "no": "Withdraw to a safe distance, request police support, do not approach until safe."
      }
    },
    {
      "id": "self-harm",
      "name": "Self-Harm / Mental Health Crisis",
      "category": "psych",
      "priority": "amber",
      "alsoKnownAs": [
        "suicidal",
        "self harm",
        "mental health crisis",
        "overdose deliberate"
      ],
      "summary": "A patient in acute mental health crisis, with or without physical self-harm. Treat injuries, assess safety, and approach with compassion.",
      "assess": [
        "Assess and treat any physical injury first — bleeding, overdose, etc. — using the relevant protocol.",
        "Gauge current risk: are they expressing ongoing intent to harm themselves or others right now?",
        "Consider capacity and consent — a person in crisis may still be able to make decisions, but this needs careful, non-judgemental assessment.",
        "Note any means of harm present (weapons, medication) and manage scene safety."
      ],
      "redFlags": [
        "Ongoing expressed intent or a plan to harm themselves or others.",
        "A significant physical injury or overdose requiring urgent treatment.",
        "Signs of ongoing danger to the patient or crew — do not put yourself at risk."
      ],
      "treat": [
        "Treat any physical injuries per the relevant protocol (bleeding control, overdose management, etc.).",
        "Speak calmly, non-judgementally, and give the patient time — avoid rushing or dismissing their distress.",
        "Do not leave a high-risk patient alone.",
        "Involve police/appropriate support for scene safety or if the patient may need to be safeguarded against their will per local policy.",
        "Reassure them that help is available and that you are there to help, not to judge."
      ],
      "drugs": [
        "fluids",
        "oxygen",
        "naloxone",
        "activated-charcoal"
      ],
      "transport": "Transport for physical injury regardless of consent concerns where life-threatening. For mental health crisis without physical injury, transport for assessment, involving police/mental health services per local policy if there is ongoing risk.",
      "tree": {
        "q": "Is there a physical injury or overdose needing urgent treatment?",
        "yes": "Treat via the appropriate protocol first (haemorrhage, overdose, etc.), then continue mental health assessment. Transport.",
        "no": {
          "q": "Is there ongoing expressed intent to harm themselves or others right now?",
          "yes": "High risk — do not leave alone, involve police/mental health support, transport for urgent assessment.",
          "no": "Calm, compassionate assessment, offer support options, transport for assessment with the patient's engagement where possible."
        }
      }
    },
    {
      "id": "alcohol-intoxication",
      "name": "Alcohol Intoxication",
      "category": "psych",
      "priority": "amber",
      "alsoKnownAs": [
        "drunk",
        "intoxicated",
        "alcohol poisoning",
        "found drunk"
      ],
      "summary": "Alcohol intoxication is common but dangerous to assume — always actively exclude head injury, hypoglycaemia and hypothermia.",
      "assess": [
        "Level of consciousness, ability to protect their own airway, and vital signs.",
        "Actively look for a head injury — falls are common with intoxication and symptoms can be masked by the alcohol itself.",
        "Check blood glucose — alcohol can cause dangerous hypoglycaemia.",
        "Check temperature — prolonged exposure while intoxicated risks hypothermia."
      ],
      "redFlags": [
        "Reduced consciousness beyond what alcohol alone would explain, or a falling GCS.",
        "Evidence of head injury or another traumatic cause.",
        "Low blood glucose or low temperature.",
        "Vomiting with a reduced level of consciousness — high aspiration risk."
      ],
      "treat": [
        "Do not assume 'just drunk' — actively rule out hypoglycaemia, head injury and hypothermia every time.",
        "Recovery position if drowsy but breathing adequately, to protect the airway from vomit.",
        "Check and correct blood glucose if low.",
        "Keep warm if any risk of hypothermia.",
        "Reassess regularly — intoxicated patients can deteriorate or improve; do not leave unmonitored."
      ],
      "drugs": [
        "glucose-iv",
        "glucose-gel",
        "oxygen",
        "fluids"
      ],
      "transport": "Transport if reduced consciousness beyond simple intoxication, any suspected head injury, abnormal glucose/temperature, or inability to safely care for themselves. A clearly recovering, safe patient with a responsible carer may not always need transport per local policy.",
      "tree": {
        "q": "Is the blood glucose normal and is there no evidence of head injury or hypothermia?",
        "yes": "Likely simple intoxication — recovery position, monitor, reassess as they sober, transport if unsafe to leave.",
        "no": "Treat the specific finding (hypoglycaemia, head injury, hypothermia protocols) — do not attribute everything to alcohol. Transport."
      }
    },
    {
      "id": "pre-eclampsia",
      "name": "Pre-eclampsia / Eclampsia",
      "category": "obs",
      "priority": "red",
      "alsoKnownAs": [
        "eclampsia",
        "pregnancy seizure",
        "high blood pressure pregnant",
        "toxaemia"
      ],
      "summary": "High blood pressure of pregnancy that can progress to seizures (eclampsia) — a genuine obstetric emergency.",
      "assess": [
        "Pregnant (or recently postpartum, up to a few weeks) with high blood pressure, severe headache, visual disturbance, or swelling of the face/hands.",
        "Upper abdominal (epigastric) pain can be a warning sign.",
        "Eclampsia: a seizure occurring in this context — usually generalised, tonic-clonic."
      ],
      "redFlags": [
        "Any seizure in pregnancy or shortly after birth is eclampsia until proven otherwise.",
        "Severe headache with visual disturbance and high BP.",
        "Reduced consciousness following a seizure."
      ],
      "treat": [
        "Position on the left side to avoid the baby compressing major vessels.",
        "Protect from injury during a seizure, as per general seizure care.",
        "Magnesium sulphate 4 g IV over 5-10 min for eclamptic seizure or severe pre-eclampsia — this is the specific treatment.",
        "High-flow oxygen.",
        "Keep the environment calm and quiet — stimulation can trigger further seizures.",
        "Monitor for reflexes/respiratory depression from magnesium; have calcium gluconate available as antidote."
      ],
      "drugs": [
        "magnesium-sulphate",
        "oxygen",
        "calcium-gluconate"
      ],
      "transport": "Blue light, left-lateral position where possible, pre-alert maternity/obstetric team clearly as eclampsia/severe pre-eclampsia.",
      "tree": {
        "q": "Has a seizure occurred?",
        "yes": "Eclampsia. Magnesium sulphate 4 g IV, left-lateral position, oxygen, calm environment, transport hot, pre-alert.",
        "no": {
          "q": "Severe headache, visual disturbance or epigastric pain with high BP?",
          "yes": "Severe pre-eclampsia — magnesium sulphate per protocol, calm transport, blue light, pre-alert.",
          "no": "Monitor BP, transport for assessment, advise on symptoms to watch for."
        }
      }
    },
    {
      "id": "postpartum-haemorrhage",
      "name": "Postpartum Haemorrhage",
      "category": "obs",
      "priority": "red",
      "alsoKnownAs": [
        "PPH",
        "bleeding after birth",
        "heavy bleeding postpartum"
      ],
      "summary": "Heavy bleeding after delivery of the baby — a leading cause of maternal death if not controlled quickly.",
      "assess": [
        "Estimate blood loss — heavy, continuous bleeding after birth is not normal.",
        "Feel for the uterus — if soft and boggy rather than firm, it is not contracting well (the most common cause).",
        "Check maternal observations for signs of shock.",
        "Confirm the placenta has delivered, and check it looks complete if possible."
      ],
      "redFlags": [
        "Any heavy ongoing bleeding after birth.",
        "Signs of maternal shock — pale, fast pulse, dropping BP.",
        "A soft, non-contracted uterus."
      ],
      "treat": [
        "Uterine massage — firmly rub the top of the uterus (fundus) through the abdomen to encourage it to contract.",
        "Encourage breastfeeding/nipple stimulation if the baby is present and well — helps release natural oxytocin.",
        "TXA 1 g IV early.",
        "Misoprostol as a uterotonic adjunct per protocol.",
        "IV fluids for shock, cautious to maintain a pulse.",
        "Keep the mother warm, monitor continuously."
      ],
      "drugs": [
        "txa",
        "misoprostol",
        "fluids",
        "oxygen"
      ],
      "transport": "Immediate blue light. Pre-alert maternity as a postpartum haemorrhage — this can deteriorate very quickly.",
      "tree": {
        "q": "Is the uterus soft/boggy rather than firm?",
        "yes": "Uterine atony likely — uterine massage immediately, TXA, misoprostol, fluids, transport hot.",
        "no": "Consider other causes (tears, retained placenta) — control what can be controlled, TXA, fluids, transport hot, pre-alert regardless of cause."
      }
    },
    {
      "id": "cord-prolapse",
      "name": "Cord Prolapse",
      "category": "obs",
      "priority": "red",
      "alsoKnownAs": [
        "cord coming out first",
        "cord prolapse",
        "prolapsed umbilical cord"
      ],
      "summary": "The umbilical cord slips down ahead of the baby — it can be compressed, cutting off the baby's oxygen supply. A true obstetric emergency.",
      "assess": [
        "The cord is visible at or beyond the vaginal opening, ahead of the presenting part.",
        "This usually follows the waters breaking, especially with an abnormal baby position.",
        "Check if the cord is pulsating — a good sign the baby is still receiving blood flow."
      ],
      "redFlags": [
        "Any visible or felt cord prolapse is an immediate obstetric emergency.",
        "A cord that stops pulsating indicates the baby is being starved of oxygen."
      ],
      "treat": [
        "Do NOT push the cord back in.",
        "Position the mother in the knee-chest position (or exaggerated Sim's/left-lateral with hips raised) to take pressure off the cord.",
        "If safe and necessary, a gloved hand can gently hold the presenting part off the cord without pushing the cord itself.",
        "Keep the cord warm and moist if exposed — do not handle it unnecessarily.",
        "High-flow oxygen to the mother to maximise oxygen delivery to the baby.",
        "This needs an emergency caesarean — minimise scene time drastically."
      ],
      "drugs": [
        "oxygen",
        "fluids"
      ],
      "transport": "Immediate blue light, minimal scene time, maintain the knee-chest/hips-raised position throughout transport, pre-alert maternity as cord prolapse for an emergency delivery.",
      "tree": {
        "q": "Is the cord visible or felt ahead of the baby?",
        "yes": "Cord prolapse confirmed. Do NOT push it back. Knee-chest position, oxygen, relieve pressure off the cord, transport hot immediately, pre-alert.",
        "no": "If suspected but not confirmed, still position defensively and transport hot — do not delay to confirm."
      }
    },
    {
      "id": "childbirth",
      "name": "Imminent Childbirth",
      "category": "obs",
      "priority": "amber",
      "alsoKnownAs": [
        "birth",
        "labour",
        "delivery",
        "pregnant",
        "waters broken"
      ],
      "summary": "Birth in progress. Support a normal delivery; know the emergencies.",
      "assess": [
        "How many weeks? Contraction frequency? Waters gone?",
        "Urge to push or the head visible means birth is imminent.",
        "Ask about bleeding and any known complications."
      ],
      "redFlags": [
        "Heavy bleeding before, during or after birth.",
        "A limb or the cord presenting first, not the head.",
        "Seizure in pregnancy (eclampsia).",
        "The baby not breathing after birth."
      ],
      "treat": [
        "Prepare a clean, warm space and get extra hands.",
        "Support the head as it delivers; do not pull.",
        "Dry and warm the baby immediately; keep it with the mother.",
        "If the baby doesn't breathe, start newborn resus.",
        "Deliver the placenta naturally; do not tug the cord.",
        "Manage bleeding; keep the mother warm."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "txa"
      ],
      "transport": "Transport mother and baby. Blue light for any red flag. Pre-alert maternity for a complicated birth.",
      "tree": {
        "q": "Is the head visible / is there an urge to push?",
        "yes": "Birth is imminent — prepare to deliver on scene, support the head, dry and warm the baby, then transport both.",
        "no": "Time to move. Transport in a comfortable position, monitor, pre-alert maternity."
      }
    },
    {
      "id": "poisoning",
      "name": "General Poisoning / Ingestion",
      "category": "toxic",
      "priority": "amber",
      "alsoKnownAs": [
        "overdose tablets",
        "swallowed poison",
        "ingestion",
        "toxic ingestion"
      ],
      "summary": "Deliberate or accidental ingestion of a poison or excess medication. Identify what, when and how much — it drives everything.",
      "assess": [
        "What was taken, how much, and when — bring packaging/containers to hospital.",
        "Level of consciousness and ability to protect the airway.",
        "Look for specific toxidrome clues — pupil size, sweating, heart rate, skin, breath smell.",
        "Consider if this was deliberate — assess mental health risk alongside the physical picture."
      ],
      "redFlags": [
        "Reduced consciousness or an unsafe airway.",
        "Ingestion within the activated charcoal window (roughly 1 hour) of a substance charcoal can bind.",
        "Signs of a specific serious toxidrome — tricyclic, opioid, paracetamol, or a substance with a known antidote.",
        "Any deliberate overdose, regardless of current symptoms."
      ],
      "treat": [
        "Protect the airway — recovery position if drowsy but breathing adequately.",
        "High-flow oxygen if hypoxic.",
        "Activated charcoal only if alert, airway safe, and within roughly 1 hour of ingesting a substance it can bind — check before giving.",
        "Naloxone if opioid toxicity suspected.",
        "Sodium bicarbonate if tricyclic overdose with a widened QRS.",
        "Bring all packaging, tablets and any note found to hospital.",
        "Treat specific complications (seizure, arrhythmia) per their own protocol as they arise."
      ],
      "drugs": [
        "activated-charcoal",
        "naloxone",
        "sodium-bicarb",
        "oxygen",
        "fluids"
      ],
      "transport": "Transport all deliberate or significant ingestions, even if currently well — many poisons have delayed effects. Blue light for reduced consciousness or a serious toxidrome. Pre-alert with what/when/how much.",
      "tree": {
        "q": "Is the airway safe and the patient alert?",
        "yes": {
          "q": "Was ingestion within roughly the last hour, of a substance charcoal can bind?",
          "yes": "Consider activated charcoal 50 g oral. Monitor closely, transport, bring packaging.",
          "no": "Charcoal unlikely to help now — supportive care, monitor for delayed effects, transport with all packaging."
        },
        "no": "Protect the airway (recovery position/airway management), do NOT give oral charcoal, oxygen, treat toxidrome-specific complications, transport hot."
      }
    },
    {
      "id": "stimulant-overdose",
      "name": "Stimulant Overdose (Cocaine / Methamphetamine)",
      "category": "toxic",
      "priority": "red",
      "alsoKnownAs": [
        "cocaine overdose",
        "meth overdose",
        "coke OD",
        "stimulant toxicity"
      ],
      "summary": "Toxicity from cocaine, methamphetamine or similar stimulants — agitation, a racing heart, high temperature and chest pain are the key dangers.",
      "assess": [
        "Agitation, paranoia, dilated pupils, sweating, rapid heart rate and high blood pressure.",
        "Chest pain — stimulants can cause a genuine heart attack even in young, otherwise healthy patients.",
        "Check temperature — hyperthermia is a marker of severity.",
        "Look for seizures or a rapidly rising level of agitation."
      ],
      "redFlags": [
        "Chest pain — treat as possible ACS, do not dismiss because of age or drug use.",
        "Very high temperature or extreme agitation (may overlap with excited delirium — see that protocol for safety approach).",
        "Seizure or reduced consciousness.",
        "Cardiac arrhythmia."
      ],
      "treat": [
        "Calm, low-stimulation environment where possible — reduces sympathetic drive.",
        "Benzodiazepine (midazolam) for severe agitation or seizure — first-line for stimulant toxicity, helps the heart and temperature too.",
        "Active cooling if hyperthermic.",
        "Treat chest pain per ACS protocol, but avoid beta-blockers (not carried here regardless).",
        "IV fluids for dehydration/rhabdomyolysis risk.",
        "Continuous cardiac monitoring — arrhythmia risk is real."
      ],
      "drugs": [
        "midazolam",
        "oxygen",
        "fluids",
        "aspirin",
        "gtn"
      ],
      "transport": "Blue light for chest pain, hyperthermia, seizure or significant agitation. Pre-alert as stimulant toxicity.",
      "tree": {
        "q": "Is there chest pain?",
        "yes": "Treat as possible ACS — aspirin, GTN if BP allows, 12-lead if possible, transport hot, pre-alert.",
        "no": {
          "q": "Severe agitation, seizure, or hyperthermia?",
          "yes": "Benzodiazepine for agitation/seizure, active cooling if hot, transport hot, pre-alert.",
          "no": "Calm environment, monitor observations and temperature, IV fluids if dehydrated, transport priority 2."
        }
      }
    },
    {
      "id": "carbon-monoxide",
      "name": "Carbon Monoxide Poisoning",
      "category": "toxic",
      "priority": "red",
      "alsoKnownAs": [
        "CO poisoning",
        "carbon monoxide",
        "gas leak headache",
        "faulty boiler"
      ],
      "summary": "Odourless gas poisoning from faulty heating, generators, or fires — presents with vague symptoms that are easy to miss.",
      "assess": [
        "Headache, nausea, dizziness, confusion — often affecting multiple people in the same building at once.",
        "Ask about the source — gas appliances, generators run indoors, vehicle exhaust, or a recent fire.",
        "Standard pulse oximetry SpO2 reading can be falsely normal/high — it cannot distinguish carbon monoxide from oxygen on haemoglobin.",
        "Severe: seizure, reduced consciousness, cardiac ischaemia."
      ],
      "redFlags": [
        "Reduced consciousness, seizure, or chest pain in the context of possible CO exposure.",
        "Multiple casualties from the same location with similar symptoms — a strong clue.",
        "Pregnant patients — the fetus is especially vulnerable to CO."
      ],
      "treat": [
        "Remove from the source immediately — ventilate the area, do not linger without checking your own safety.",
        "High-flow oxygen via non-rebreather regardless of the SpO2 reading — this is the key treatment, speeding CO clearance.",
        "Do not trust a normal-looking SpO2 to rule this out.",
        "Treat seizures and monitor the ECG for ischaemic changes.",
        "Identify and flag other people who may be exposed at the same location."
      ],
      "drugs": [
        "oxygen",
        "fluids",
        "midazolam"
      ],
      "transport": "Blue light for any neurological symptoms, chest pain, pregnancy, or significant exposure. Pre-alert as suspected CO poisoning — hospital can measure carboxyhaemoglobin levels.",
      "tree": {
        "q": "Reduced consciousness, seizure, chest pain, or pregnancy?",
        "yes": "High-flow oxygen immediately, remove from source, transport hot, pre-alert.",
        "no": "High-flow oxygen regardless of SpO2 reading, remove from source, transport for carboxyhaemoglobin level check, flag other potentially exposed people."
      }
    },
    {
      "id": "organophosphate",
      "name": "Organophosphate Poisoning",
      "category": "toxic",
      "priority": "red",
      "alsoKnownAs": [
        "pesticide poisoning",
        "nerve agent",
        "organophosphate",
        "insecticide exposure"
      ],
      "summary": "Poisoning from pesticides or nerve-agent-type chemicals causing a flood of cholinergic symptoms. Atropine is the antidote, given in large doses.",
      "assess": [
        "History of exposure to pesticides, agricultural chemicals, or an unusual chemical incident.",
        "Classic cholinergic toxidrome — remember SLUDGE: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis — plus sweating, small pupils, wheeze, slow heart rate.",
        "Muscle twitching progressing to weakness, seizures, and respiratory failure in severe cases.",
        "This is also a scene-safety hazard — decontamination may be needed before treatment."
      ],
      "redFlags": [
        "Respiratory distress or failure from bronchorrhoea/bronchospasm — the primary cause of death.",
        "Seizures.",
        "Ongoing contamination risk to responders — decontaminate before close contact where practical."
      ],
      "treat": [
        "Scene safety first — appropriate PPE, decontaminate the patient (remove clothing, wash skin) before prolonged close contact if contamination is likely.",
        "High-flow oxygen, suction excess secretions, support ventilation as needed.",
        "Atropine in large, repeated doses (well beyond the standard bradycardia dose) titrated against secretions and heart rate, per current guidance.",
        "Treat seizures with a benzodiazepine.",
        "Continuous monitoring — this can deteriorate rapidly and needs aggressive, repeated atropine."
      ],
      "drugs": [
        "atropine",
        "oxygen",
        "midazolam",
        "fluids"
      ],
      "transport": "Immediate blue light once decontaminated and safe to transport. Pre-alert clearly as organophosphate/nerve agent poisoning so the hospital can prepare decontamination and antidote stocks.",
      "tree": {
        "q": "Is the scene and patient decontaminated and safe to approach closely?",
        "yes": {
          "q": "Respiratory distress, secretions, or seizure present?",
          "yes": "Give atropine in large repeated doses, support airway/breathing, benzodiazepine for seizures, transport hot, pre-alert.",
          "no": "Monitor closely for progression, atropine ready, transport hot given the exposure."
        },
        "no": "Decontaminate first — remove contaminated clothing, wash skin — before close, prolonged patient contact. Use appropriate PPE throughout."
      }
    }
  ],
  "quickRef": {
    "assessmentOrder": [
      "Scene safe? — do not become a second patient",
      "Stop the bleeding — catastrophic haemorrhage comes first",
      "Airway — is it open and clear?",
      "Breathing — are they breathing normally?",
      "Pulse — do they have one? Is it fast, slow or weak?",
      "Are they awake? — talk to them, squeeze their hand",
      "Quick head-to-toe — look for anything you missed",
      "Decide transport only AFTER the head-to-toe. Not before."
    ],
    "alwaysTransport": [
      "Shot or stabbed in head, neck, chest, back, stomach or groin",
      "Bleeding you could not stop",
      "Struggling to breathe, or any chest pain",
      "Neck or back pain after a crash, fall or beating",
      "Broken femur or pelvis · open fracture · anything amputated",
      "Burns to the face or airway, or a large burn",
      "Cardiac arrest, ongoing seizure, overdose, or stroke signs",
      "Knocked out — even briefly",
      "Confused, repeating themselves, or getting worse",
      "They ask to go — always honour it"
    ],
    "safeOnScene": [
      "Nothing from the red list above",
      "Fully awake, never passed out",
      "Breathing and pulse normal throughout",
      "Bleeding stopped and stayed stopped",
      "Can stand and walk unaided",
      "They understand your advice and are happy to stay"
    ],
    "injuryTable": [
      {
        "injury": "Graze, shallow cut",
        "onScene": "Clean and dress. Discharge.",
        "hospital": "Only if deep or gaping"
      },
      {
        "injury": "Deep cut",
        "onScene": "Pressure and dressing",
        "hospital": "Yes — needs stitches"
      },
      {
        "injury": "Bad bleed on a limb",
        "onScene": "Pressure, then tourniquet",
        "hospital": "Yes — tourniquet on = go"
      },
      {
        "injury": "Bleed on torso or neck",
        "onScene": "Pack it and hold",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Something stuck in them",
        "onScene": "Pad around it, leave it in",
        "hospital": "Yes — never pull it out"
      },
      {
        "injury": "Sprain or twist",
        "onScene": "Support and advise. Discharge.",
        "hospital": "Only if they cannot stand"
      },
      {
        "injury": "Broken finger or toe",
        "onScene": "Buddy strap. Usually discharge.",
        "hospital": "If bent, open or pale"
      },
      {
        "injury": "Broken arm, wrist, ankle",
        "onScene": "Splint and pain relief",
        "hospital": "Yes — needs an X-ray"
      },
      {
        "injury": "Broken femur or pelvis",
        "onScene": "Splint or binder, minimal moving",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Dislocation",
        "onScene": "Support as found",
        "hospital": "Yes — do not pop it back"
      },
      {
        "injury": "Bump on head, fully alert",
        "onScene": "Dress it, give head injury advice",
        "hospital": "Only if they vomit or go drowsy"
      },
      {
        "injury": "Knocked out, any length",
        "onScene": "Monitor, keep still",
        "hospital": "Yes — always"
      },
      {
        "injury": "Confused or repeating themselves",
        "onScene": "Reassure and monitor",
        "hospital": "Yes"
      },
      {
        "injury": "Neck or back pain",
        "onScene": "Collar and board, do not let them walk",
        "hospital": "Yes"
      },
      {
        "injury": "Bruised ribs, breathing fine",
        "onScene": "Pain relief",
        "hospital": "Only if breathing gets hard"
      },
      {
        "injury": "Chest pain",
        "onScene": "Sit up, oxygen, keep calm",
        "hospital": "Yes — always"
      },
      {
        "injury": "Wound to the chest",
        "onScene": "Seal it",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Stomach pain after trauma",
        "onScene": "Comfy position, nothing to eat or drink",
        "hospital": "Yes — internal bleed risk"
      },
      {
        "injury": "Small burn",
        "onScene": "Cool with water, cover. Discharge.",
        "hospital": "If blistered or large"
      },
      {
        "injury": "Burn to face, hands or airway",
        "onScene": "Cool, oxygen, watch the airway",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Smoke inhalation",
        "onScene": "Oxygen and fresh air",
        "hospital": "Yes — even if they feel fine"
      },
      {
        "injury": "Electrocution or drowning",
        "onScene": "Assess once safe, oxygen",
        "hospital": "Yes — even if they look fine"
      },
      {
        "injury": "Panic attack",
        "onScene": "Calm them, coach the breathing",
        "hospital": "Only if it will not settle"
      },
      {
        "injury": "Fainted, now fine",
        "onScene": "Lie flat, legs up",
        "hospital": "If injured or it happens again"
      },
      {
        "injury": "Seizure, now waking up",
        "onScene": "Recovery position, stay with them",
        "hospital": "If first ever, or injured"
      },
      {
        "injury": "Seizure still going",
        "onScene": "Protect head, oxygen",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Overdose",
        "onScene": "Airway, recovery position",
        "hospital": "Yes — bring the packaging"
      },
      {
        "injury": "Allergic reaction",
        "onScene": "Adrenaline, sit them up",
        "hospital": "Yes, blue light"
      },
      {
        "injury": "Diabetic — shaky, confused",
        "onScene": "Sugar if they can swallow",
        "hospital": "If they do not improve"
      },
      {
        "injury": "Stroke signs (FAST)",
        "onScene": "Nothing by mouth, note the time",
        "hospital": "Yes, blue light — time is brain"
      },
      {
        "injury": "Cardiac arrest",
        "onScene": "CPR and defib now",
        "hospital": "Yes, once you have a pulse back"
      },
      {
        "injury": "Pregnancy problem",
        "onScene": "Comfy position, monitor",
        "hospital": "Yes — any bleeding, pain or seizure"
      },
      {
        "injury": "Mental health crisis",
        "onScene": "Listen, keep them safe, no judgement",
        "hospital": "If they are a danger to themselves"
      },
      {
        "injury": "Intoxicated person",
        "onScene": "Recovery position if drowsy",
        "hospital": "If injured, hypothermic or unrousable"
      }
    ]
  }
};

if (typeof module !== "undefined") { module.exports = SAMS_DATA; }
