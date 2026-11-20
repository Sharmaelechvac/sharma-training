/* Residential Rough-in — the main field-guide section for Residential Rough-In Guide.
   Copper: 14 AWG on 15A, 12 AWG on 20A. CCA one size up: 12 AWG on 15A, 10 AWG on 20A. Lead decides the wire; never backstab. */

export const INSPECT_URL = "https://sharma-inspect.sharma-crew.workers.dev";

export const ROUGHIN_GROUPS = [
  { title: "Start here", ids: ["start"] },
  { title: "Room by room", ids: ["kitchen", "baths", "bedrooms", "living", "laundry", "garage", "exterior", "attic", "hvac"] },
  { title: "How we build it", ids: ["boxes", "wire", "panel", "smoke", "lowvoltage", "gfci"] },
  { title: "Before you call it in", ids: ["inspect", "mistakes"] },
];

export const ROUGHIN_PAGES = [
  {
    id: "start",
    title: "Before you start",
    blurb: "What rough-in is, the order of the house, what a helper may do, and how to read the plan.",
    tags: ["start", "order", "safety", "plan", "diagram", "legend", "helper", "first day", "walk the house"],
    sections: [
      { type: "lead", text: "Rough-in is after framing, before insulation and drywall. You turn the drawing into boxes, cable, and a panel. Nothing is energized yet. The plan always wins — if this guide and the plan disagree, follow the plan and ask your foreman." },
      { type: "diagram", id: "ri-order" },
      {
        type: "table",
        caption: "Work the house in this order",
        headers: ["Step", "Do this"],
        rows: [
          ["1", "Walk the house — foreman + latest plan. Mark panel, meter, every box."],
          ["2", "Set meter-main and panel cans."],
          ["3", "Set the boxes — right type, right place."],
          ["4", "Set vanity bar-light and smoke / CO boxes."],
          ["5", "Drill top plates and studs on layout."],
          ["6", "Pull home runs and circuits per the plan."],
          ["7", "Pull the 240V runs: range, dryer, water heater, condenser, air handler."],
          ["8", "Staple and support every cable. Nail plates where needed."],
          ["9", "Make up grounds and splices. Fold wire in neat."],
          ["10", "Label every home run at the panel."],
          ["11", "Grounding and bonding: rods, GEC, bonding bridge. Ufer only if the plan or footing has one."],
          ["12", "Pipe the service per the plan (often 2 in PVC, sweeps, straps)."],
          ["13", "Walk the checklist with your foreman, take crew-app photos, call for inspection."],
        ],
      },
      {
        type: "table",
        caption: "What a new helper may do — and what to wait on",
        headers: ["You can do this", "Do not do this alone"],
        rows: [
          ["Stage material, set boxes to the marks, foreman checks them", "Work in or near the panel or meter"],
          ["Drill holes exactly where marked", "Touch anything energized, or a temp power pole"],
          ["Pull wire smooth off the spool — no kinks or twists", "Use a ladder over 6 ft, or go in the attic alone"],
          ["Staple cable, fit nail plates, label ends clearly", "Cut block or a truss, or drill past the marked spot"],
          ["Sweep up as you go", "Make up a 240V run, or move a box off the plan"],
        ],
      },
      {
        type: "table",
        caption: "How to read the drawing",
        headers: ["Sheet", "What it is"],
        rows: [
          ["Legend and notes (often E-0)", "Read first — it defines every symbol on that job."],
          ["Floor plan (often E-1)", "Every box, light, switch, run."],
          ["Panel schedule and load calc (often E-2)", "Each breaker: what it feeds, wire size, breaker size."],
          ["Circuit sheets (often E-3)", "One circuit at a time, and its path back to the panel."],
        ],
      },
      { type: "note", text: "Work only from the latest revision. A tag next to a device is its circuit number — it must match the panel schedule. 14 AWG copper goes on 15A. 12 AWG copper goes on 20A. If the spool does not match the schedule, stop and ask. Do not substitute." },
      {
        type: "do",
        items: [
          "Trace one circuit on paper, then walk that path in the house, before you pull wire.",
          "Treat every wire as live until your foreman tests it. Glasses on all day. Boots, not sneakers. Drink water before you are thirsty.",
          "Builder questions go through the office — never from you to the builder.",
        ],
      },
      {
        type: "never",
        items: [
          "Never work on anything energized.",
          "Never move, skip, or add a box on your own. Never change a wire or breaker size.",
          "Never cut or drill a truss, beam, or block to make a drawing fit. Never re-route a home run to another circuit to “save wire.”",
          "House and drawing do not match? Stop, tell your foreman, mark the spot, move to another circuit.",
        ],
      },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen",
    blurb: "Small-appliance circuits, counters, the fridge, and 240V for the range.",
    tags: ["kitchen", "counter", "island", "peninsula", "fridge", "refrigerator", "dishwasher", "disposal", "range", "hood", "microwave", "small-appliance", "20a"],
    sections: [
      { type: "lead", text: "The kitchen has more 20A work than the rest of the house. Follow the plan for every appliance. Keep boxes neat — this room gets looked at hard." },
      { type: "diagram", id: "ri-kitchen" },
      {
        type: "table",
        caption: "Kitchen circuits on Sharma jobs",
        headers: ["Circuit", "What to know"],
        rows: [
          ["2 × 20A small-appliance", "12 AWG copper. At least two 20A small-appliance circuits (NEC 210.11(C)(1)) serve the kitchen, pantry, breakfast, and dining receptacles — wall, floor, and countertop — plus the fridge (210.52(B)). The fridge may get its own 15A-or-larger circuit only if the plan says so (210.52(B)(1) Exception No. 2). No other outlets on these circuits, and never outdoor outlets (210.52(B)(2)). Split the counter receptacles across the two circuits (210.52(B)(3))."],
          ["DW, disposal, hood", "Usually one shared 20A circuit, unless the plan splits them."],
          ["Microwave", "Follow the plan. Do not invent a dedicated circuit unless the plan or your foreman says so."],
          ["Range", "240V, wire and breaker per the nameplate and the plan. Often 8 AWG or 6 AWG copper. If it gets a receptacle, that is sometimes a surface-mount box. A 2-pole GFCI breaker is the company standard — confirm the exact breaker with your foreman."],
        ],
      },
      {
        type: "table",
        caption: "Counter and island spacing (NEC 210.52(C))",
        headers: ["Rule", "Plain meaning"],
        rows: [
          ["Counter receptacles", "No point along a counter 12 in or wider is more than 24 in from a receptacle (210.52(C)(1)). Height per plan or foreman."],
          ["Island or peninsula", "At least one receptacle for the first 9 sq ft (or fraction) of countertop, plus one more for every additional 18 sq ft or fraction (NEC 210.52(C)(2)(a)). On a peninsula, one receptacle within 2 ft of the outer end, measured from the connecting wall (210.52(C)(2)(b)). Follow the plan; if a big island shows only one receptacle, ask your foreman."],
          ["The feed to an island", "Under-slab or underground: UF, or THWN-2 in conduit. Never NM underground or under-slab (300.9, 334.12(B)(4))."],
        ],
      },
      {
        type: "do",
        items: [
          "Set kitchen boxes neat, at the planned height.",
          "Use 12 AWG copper on every 20A kitchen circuit.",
        ],
      },
      {
        type: "never",
        items: [
          "Do not put the fridge on its own circuit unless the plan says to — it shares a small-appliance circuit.",
          "Do not let a small-appliance circuit feed an outdoor outlet.",
          "Do not invent a counter height — per plan or foreman. Switches are 48 in to center.",
        ],
      },
    ],
  },
  {
    id: "baths",
    title: "Baths",
    blurb: "The 20A bath receptacle circuit, vanity lights, exhaust fans, and the tub zone.",
    tags: ["bath", "bathroom", "vanity", "exhaust", "tub", "shower", "basin", "406.9", "15a home run"],
    sections: [
      { type: "lead", text: "Baths are tight, wet, and easy to fail. Place the vanity box carefully, stay out of the tub and shower zone, and watch where the home run lands." },
      { type: "diagram", id: "ri-bath" },
      {
        type: "table",
        caption: "What goes in a bathroom",
        headers: ["Item", "Sharma way"],
        rows: [
          ["Bath receptacles", "A 20A circuit, 12 AWG copper (NEC 210.11(C)(3)). One receptacle within 3 ft of the outside edge of each basin (210.52(D)). No other outlets on this circuit — except, when it feeds a single bathroom, other equipment in that same bathroom (210.11(C)(3) Exception). This circuit may home-run straight to the bath."],
          ["Lights", "A vanity light over the mirror. A wet-location tub or shower light on the plan gets its own switch leg. No general ceiling light unless the plan shows one."],
          ["Exhaust fan", "Each bath gets an exhaust fan."],
          ["Vanity bar box", "A bar-light box — and only for vanity lights. Set it neat, at the planned height."],
        ],
      },
      { type: "note", text: "No receptacle within 3 ft horizontally and 8 ft vertically of the tub rim or shower threshold (NEC 406.9(C))." },
      {
        type: "do",
        items: [
          "Land the 20A bath-receptacle home run in the bath if that is the plan.",
          "Keep switch boxes neat. A neutral belongs at every switch location (404.2(C)).",
        ],
      },
      {
        type: "never",
        items: [
          "Never land a 15A home run in a bathroom box. Land it in the first box outside the bath.",
          "Do not put a receptacle in the tub or shower zone.",
        ],
      },
    ],
  },
  {
    id: "bedrooms",
    title: "Bedrooms",
    blurb: "Area circuits, fans, and a smoke alarm in every bedroom.",
    tags: ["bedroom", "sleeping", "fan", "smoke", "area circuit", "switched outlet", "half-switched"],
    sections: [
      { type: "lead", text: "Bedrooms usually ride on a 15A area circuit — lights, fans, and general receptacles together — with 14 AWG copper. Follow the plan for fans and 3-ways." },
      { type: "diagram", id: "ri-bedroom" },
      {
        type: "table",
        caption: "Bedroom rough-in",
        headers: ["Item", "What to do"],
        rows: [
          ["Receptacles", "No point along a wall 2 ft or wider more than 6 ft from a receptacle (210.52(A)). Height: 18 in to the bottom of the box when the plans do not say."],
          ["Switches", "48 in to center (Sharma standard), unless the plan says otherwise. A 3-way usually takes 14/3 or 12/3. A neutral belongs in the switch box (404.2(C))."],
          ["Ceiling fans", "A listed fan-rated box at every fan location. A regular ceiling box is not enough."],
          ["Smoke alarm", "A 1-gang nail-on box in each bedroom — not a round box. See the Smoke and CO page."],
        ],
      },
      {
        type: "do",
        items: [
          "On Sharma jobs, all receptacles are unswitched. There are no half-switched outlets.",
          "Use 14 AWG copper on 15A area circuits, 12 AWG copper if the schedule says 20A.",
        ],
      },
      {
        type: "never",
        items: [
          "Do not leave out the bedroom smoke box.",
          "Do not hang a fan from a box that is not fan-rated.",
        ],
      },
    ],
  },
  {
    id: "living",
    title: "Living, dining, and halls",
    blurb: "General receptacles, foyers, hallways, and family or dining rooms.",
    tags: ["living", "family", "dining", "hallway", "foyer", "210.52", "area circuit"],
    sections: [
      { type: "lead", text: "Living rooms, family rooms, and halls share 15A area circuits, 14 AWG copper — lights, fans, and general receptacles together. Sharma uses at most four area circuits in a house. Dining receptacles are NOT on them — they ride on the 20A small-appliance circuits (NEC 210.52(B)). Dining lights and fans may stay on an area circuit." },
      { type: "diagram", id: "ri-living" },
      {
        type: "table",
        caption: "Required receptacles",
        headers: ["Place", "Rule"],
        rows: [
          ["Walls", "No point along a wall 2 ft or wider is more than 6 ft from a receptacle (210.52(A)). Height: 18 in to the bottom of the box when the plans do not specify."],
          ["Dining receptacles", "Served by the 20A small-appliance circuits, not a 15A area circuit (210.52(B)). Follow the plan."],
          ["Hallways", "A hallway 10 ft or longer needs a receptacle (210.52(H))."],
          ["Foyers over 60 sq ft", "A receptacle on each wall 3 ft or wider (210.52(I))."],
          ["Dining or other fan locations", "A fan-rated box where the plan shows a fan."],
        ],
      },
      {
        type: "do",
        items: ["Keep a run of wall receptacles level and consistent.", "Trace switch legs from the architect’s switch arcs. Every switched load needs a switch leg."],
      },
      {
        type: "never",
        items: ["Do not move a switch off the Sharma 48 in to center unless the plan says so.", "Do not skip a foyer or hallway receptacle the Code requires.", "Do not land dining-room receptacles on a 15A area circuit."],
      },
    ],
  },
  {
    id: "laundry",
    title: "Laundry",
    blurb: "The 20A laundry circuit and the dryer — which is one of the 240V boxes that actually gets a receptacle.",
    tags: ["laundry", "dryer", "washer", "210.52(F)", "10/3", "240"],
    sections: [
      { type: "lead", text: "Laundry is a 20A room for the washer receptacle, and a 240V run for an electric dryer. Confirm gas vs electric on the plan before you pull the dryer cable." },
      { type: "diagram", id: "ri-laundry" },
      {
        type: "table",
        caption: "Laundry rough-in",
        headers: ["Item", "What to do"],
        rows: [
          ["Washer / laundry receptacle", "A 20A laundry circuit with 12 AWG copper (210.11(C)(2)). A laundry receptacle is required (210.52(F)). This circuit must not supply any other outlets."],
          ["Electric dryer", "Usually 10/3 copper on a 30A 2-pole GFCI breaker, per the plan and nameplate. The dryer is one of the 240V loads that does get a receptacle box."],
          ["Gas dryer", "Needs a 120V receptacle only — do not pull a 240V dryer run unless the plan says the dryer is electric."],
        ],
      },
      {
        type: "do",
        items: ["Pull the dryer landing if the plan is electric. Label the home run at the panel."],
      },
      {
        type: "never",
        items: ["Do not guess gas vs electric. Check the plan.", "Do not use 14 AWG on the 20A laundry circuit."],
      },
    ],
  },
  {
    id: "garage",
    title: "Garage",
    blurb: "20A garage receptacles, cut-in boxes on block, and one outlet per car bay.",
    tags: ["garage", "car bay", "cut-in", "20a", "210.52(G)"],
    sections: [
      { type: "lead", text: "The garage is a 20A circuit with 12 AWG copper. On a block house, garage boxes are usually cut-in. Runs that serve the garage are often attic runs, even if the boxes look close — check the plan and the legend." },
      { type: "diagram", id: "ri-garage" },
      {
        type: "table",
        caption: "Garage rules",
        headers: ["Item", "What to do"],
        rows: [
          ["Receptacles", "A 20A garage receptacle circuit (210.11(C)(4)). At least one receptacle per car bay. Sharma standard: 48 in to center (Code allows up to 5½ ft — 210.52(G)(1)). No other outlets on this circuit, except readily accessible outdoor receptacles (210.11(C)(4) Exception)."],
          ["Boxes on block", "Cut-in boxes on exterior walls and in the garage. Nail-on boxes on wood framing."],
          ["Door openers and extras", "Follow the plan. Do not skip a bay."],
        ],
      },
      {
        type: "do",
        items: ["Use weather-ready boxes where the plan or the location needs them.", "Set garage receptacles at 48 in to center, unless the plan says otherwise."],
      },
      {
        type: "never",
        items: ["Do not feed garage receptacles from a 15A lighting circuit.", "Do not use a kitchen small-appliance circuit out here."],
      },
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    blurb: "Front and back outlets, balconies, and weather-ready boxes.",
    tags: ["exterior", "outdoor", "front", "back", "balcony", "deck", "porch", "in-use", "WR", "210.52(E)"],
    sections: [
      { type: "lead", text: "Outdoor receptacles have to be there, at the right place, in weather-ready boxes. Do not steal them off a kitchen small-appliance circuit." },
      { type: "diagram", id: "ri-exterior" },
      {
        type: "table",
        caption: "Required outdoor receptacles (NEC 210.52(E))",
        headers: ["Place", "Rule"],
        rows: [
          ["Front and back", "One at the front and one at the back. Sharma standard: 24 in above grade (Code allows up to 6½ ft — 210.52(E)(1))."],
          ["Balconies, decks, and porches", "Required as well (210.52(E)(3)). Follow the plan for each one."],
          ["Boxes", "Cut-in on exterior block walls. Weather-ready, with an in-use cover at trim. The circuit is 20A with 12 AWG copper on Sharma jobs, protected at the breaker."],
        ],
      },
      {
        type: "do",
        items: ["Seal exterior penetrations. Sleeve and seal low-voltage and power where they leave the house."],
      },
      {
        type: "never",
        items: ["Do not feed outdoor outlets from a kitchen small-appliance circuit (210.52(B)(2)).", "Do not leave an outdoor box without a weather-ready cover plan."],
      },
    ],
  },
  {
    id: "attic",
    title: "Attic",
    blurb: "How to run cable in the trusses, the scuttle, and attic equipment.",
    tags: ["attic", "truss", "diagonal", "scuttle", "guard strip", "joist", "home run"],
    sections: [
      { type: "lead", text: "Most home runs live in the attic. Walk the trusses before you pull. Step only on joists or trusses — never on drywall. Do not go up alone as a new helper." },
      { type: "diagram", id: "ri-attic" },
      {
        type: "table",
        caption: "Attic routing on Sharma jobs",
        headers: ["Run", "How to pull it"],
        rows: [
          ["Home runs and 240V runs", "Go diagonal — one clean line from the panel to the drop, not a wandering S."],
          ["Other attic runs", "Parallel or perpendicular to the trusses."],
          ["Drops", "Down through top plates into stud bays. Chain receptacles box to box through bored studs — prefer a wall chain over an attic jump."],
          ["Near the scuttle", "Within 6 ft of a scuttle with no permanent stairs: NM along the sides of the joists or framing, or through bored holes — never loose across the tops (NEC 320.23(A) and (B) via 334.23). No guard strips as the method, no no-wire zone, do not move devices. With permanent stairs or a ladder, never run NM loose across the tops where people walk — that zone is not limited to 6 ft."],
          ["Attic light", "Just beside the scuttle, switched at the attic entry (NEC 210.70(A)(3))."],
        ],
      },
      {
        type: "table",
        caption: "If there is attic equipment",
        headers: ["Item", "Rule"],
        rows: [
          ["Light", "An appliance in the attic also gets a light at or near the unit, switched at the attic entry (NEC 210.70(A)(3), FBC-R M1305.1.3.1). If the unit is not beside the scuttle, the scuttle light does not count as that light — follow the plan."],
          ["Service receptacle", "125V 15/20A, at or near the unit, within 25 ft on the same level (NEC 210.63, FBC-R M1305.1.3.1). Never on the load side of the equipment disconnect. GFCI protection (210.8(E)) comes from the breaker on Sharma jobs."],
        ],
      },
      {
        type: "do",
        items: ["Pick the line before you pull: start, path, drop. If the run does not read as a clean line, fix it before cover.", "Staple on a line. Cables flat, side by side, never crushed."],
      },
      {
        type: "never",
        items: ["Never cut, notch, or drill a truss on your own.", "Never walk on drywall. Never leave coils of spare cable in the wall or attic — spare wire lives at the box (the 6 in).", "Do not run NM loose across the tops of joists within 6 ft of a scuttle. Do not install guard strips as the method, do not create a no-wire zone, and do not move devices."],
      },
    ],
  },
  {
    id: "hvac",
    title: "HVAC",
    blurb: "Condenser and air-handler circuits, disconnects, and the service receptacle.",
    tags: ["hvac", "condenser", "air handler", "disconnect", "210.63", "whip", "MOCP", "heat kit"],
    sections: [
      { type: "lead", text: "HVAC wire and breakers come from the nameplate and the plan — never from a guess. The condenser and air handler are hardwired or landed at a disconnect. They do not get a 240V receptacle box." },
      { type: "diagram", id: "ri-hvac" },
      {
        type: "table",
        caption: "Electrical rough-in for HVAC",
        headers: ["Item", "What to do"],
        rows: [
          ["Condenser / AC", "A standard 2-pole breaker sized to the nameplate MOCP — never a GFCI breaker on the condenser. Listed, labeled HVAC equipment is exempt from the outdoor-outlet GFCI rule (FBC-R E3408.1, Exception No. 2 to NEC 210.8(F)). Disconnect within sight of the unit (440.14), plus a whip at trim."],
          ["Air handler and heat kit", "Per the nameplate and the plan. Hardwired or to a disconnect — no 240V receptacle box."],
          ["Service receptacle", "125V 15/20A, within 25 ft of the unit, same level (NEC 210.63). Never on the load side of the equipment disconnect. GFCI protection (210.8(E); outdoors also 210.8(A)(3)) comes from the breaker on Sharma jobs."],
          ["Attic air handler", "Needs a light at or near the unit, switched at the attic entry, plus the 125V service receptacle at or near the unit (210.70(A)(3), 210.63, FBC-R M1305.1.3.1). The scuttle-side light is in addition when the unit is not beside the scuttle."],
        ],
      },
      { type: "note", text: "Only the dryer and the range get a 240V receptacle box (the range is sometimes surface-mount). Water heater, condenser, and air handler are hardwired or run to a disconnect." },
      {
        type: "do",
        items: ["Pull every HVAC circuit the plan shows. Leave the disconnect location ready.", "Label the home runs. Size per MCA and MOCP on the nameplate, not a guess."],
      },
      {
        type: "never",
        items: ["Never put a GFCI breaker on the condenser.", "Never invent a wire size for the AC. If the nameplate is missing, stop and tell your foreman."],
      },
    ],
  },
  {
    id: "boxes",
    title: "Boxes and heights",
    blurb: "Which box to use, wall-receptacle height (18 in to the bottom of the box), switch height (48 in to center), and the spacing rules inspectors check.",
    tags: ["box", "height", "18", "cut-in", "bracket", "nail-on", "fan", "vanity", "spacing", "foyer", "mud ring"],
    sections: [
      { type: "lead", text: "The right box, at the right height, set for the finished wall. Receptacles measure to the BOTTOM of the box; switches measure to the CENTER. If the plans show a height, the plans win." },
      { type: "diagram", id: "heights" },
      {
        type: "table",
        caption: "Default heights on Sharma jobs",
        headers: ["Device", "Height"],
        rows: [
          ["Wall receptacles", "18 inches to the bottom of the box, when the plans do not specify"],
          ["Switches", "48 inches to the center (Sharma standard)"],
          ["Counter receptacles", "Per plan or foreman"],
        ],
      },
      {
        type: "table",
        caption: "Which box goes where",
        headers: ["Where", "Box"],
        rows: [
          ["Wood framing", "Nail-on boxes (a typical 1-gang is about 22 cu in, or the size your foreman hands you)"],
          ["Outside walls and garage (block houses)", "Cut-in boxes"],
          ["Interior face of a block wall", "Bracket boxes. A 2-gang there is a 2-gang bracket."],
          ["Ceiling fans", "A listed fan-rated box only"],
          ["Smoke / CO", "A 1-gang nail-on box — not a round box"],
          ["Vanity lights only", "Bar-light boxes"],
          ["Next to the panel, on framing", "Nail-on"],
        ],
      },
      {
        type: "table",
        caption: "Spacing inspectors check (NEC 210.52)",
        headers: ["Place", "Rule"],
        rows: [
          ["Walls", "No point along a wall 2 ft or wider is more than 6 ft from a receptacle (210.52(A))."],
          ["Kitchen counters", "No point along a counter 12 in or wider is more than 24 in from a receptacle (210.52(C)(1))."],
          ["Island / peninsula", "One receptacle for the first 9 sq ft (or fraction) of countertop, plus one more per additional 18 sq ft or fraction. Peninsula: one within 2 ft of the outer end (NEC 210.52(C)(2))."],
          ["Bath", "One within 3 ft of each basin (210.52(D)). None in the 3 ft by 8 ft tub/shower zone (406.9(C))."],
          ["Laundry, garage, outdoor, halls, foyers", "See the room pages. Halls 10 ft + (210.52(H)). Foyers over 60 sq ft: a receptacle on each wall 3 ft + (210.52(I))."],
        ],
      },
      { type: "note", text: "Set the box for the drywall thickness so it sits flush with the finished wall. Recessed cans are usually a trim item — follow the plan. Box fill: every wire, device, and clamp takes space (NEC 314.16). Stuffed? Use a bigger box or ask. Never bury a junction (314.29)." },
      {
        type: "do",
        items: [
          "Ask: measuring from subfloor or finished floor?",
          "At least 6 in of free conductor, 3 in past the box face (300.14). Sheath at least ¼ in into the box (314.17).",
        ],
      },
      {
        type: "never",
        items: [
          "Do not invent a number for counter-receptacle height.",
          "Do not use a regular ceiling box for a fan.",
          "Do not force a device into a packed box.",
        ],
      },
    ],
  },
  {
    id: "wire",
    title: "Wire, cable, and stapling",
    blurb: "Copper 14 on 15A and 12 on 20A, staples, nail plates, and clean runs.",
    tags: ["wire", "cable", "staple", "334.30", "nail plate", "300.4", "14", "12", "copper", "nm-b", "sheath"],
    sections: [
      { type: "lead", text: "This guide teaches both wires Sharma runs. Copper NM-B: 14 AWG on a 15A breaker, 12 AWG on a 20A breaker. CCA (marked CU-CLAD AL): one size up — 12 AWG on 15A, 10 AWG on 20A. CCA: use the screw terminals, never the push-in holes. Wire nuts must say AL-CU. Ask your lead if unsure. Ordinary 15/20A device screw terminals are fine with CCA — CO/ALR is only for plain aluminum. The lead decides which wire a job gets — never swap on your own, and never backstab. If a spool does not match what the lead called for, stop and ask." },
      { type: "diagram", id: "wire-pair" },
      {
        type: "table",
        caption: "Copper NM-B — match the wire to the breaker",
        headers: ["Copper wire", "Breaker", "Typical Sharma use"],
        rows: [
          ["14 AWG (14/2, 14/3)", "15A", "Area circuits: lights, fans, and general receptacles"],
          ["12 AWG (12/2, 12/3)", "20A", "Kitchen small-appliance, laundry, bath receptacles, garage, exterior, and dishwasher / disposal / hood"],
          ["10 AWG copper", "30A, or per plan", "Electric dryer (often 10/3) and some water heaters — follow the plan"],
          ["8 or 6 AWG copper", "Per plan and nameplate", "Range and larger loads"],
        ],
      },
      { type: "diagram", id: "staple" },
      {
        type: "table",
        caption: "Stapling and support (NEC 334.30)",
        headers: ["Rule", "What to do"],
        rows: [
          ["Most boxes", "Secure within 12 in of the box, and at least every 4½ ft along the run (334.30)."],
          ["Single-gang box with no cable clamp", "Secure within 8 in (314.17(C) exception)."],
          ["How tight", "Snug — never tight enough to cut the jacket. Drive it straight."],
          ["Stacked cables", "Several home runs on one stud only with a listed cable stacker. Never double up a plain staple."],
          ["Typical staple sizes", "A small single-cable staple is for one 14/2, 12/2, 14/3, or 12/3. A large or wide staple is for one 10/2, 10/3, or 8/2 — the listing on the box wins."],
          ["Zip ties", "A screw-mount tie can support a bundle (attic home runs, panel area, low voltage) — a support, not a shortcut around stapling. Black is outdoor / UV, white is indoor. Cinch snug, never crush, trim the tail."],
        ],
      },
      { type: "diagram", id: "nailplate" },
      {
        type: "table",
        caption: "Protection and makeup",
        headers: ["Rule", "What to do"],
        rows: [
          ["Nail plates (kick plates)", "16-ga steel (at least 1/16 in) where a hole or notch edge is closer than 1¼ in to the face of the framing (300.4(A)). Center-bored studs need no plate. On a block house, plates often go where cable crosses a furring strip close to the face."],
          ["Into the box", "Sheath at least ¼ in into the box (314.17). At least 6 in of free wire, with 3 in past the box face (300.14)."],
          ["Straight runs", "In walls: horizontal or vertical with the framing, drops plumb into the box, no slants, no coils. Square, deliberate turns."],
        ],
      },
      {
        type: "do",
        items: ["Read the print on the jacket before you pull. Copper 14 with 15A, copper 12 with 20A (NEC 240.4(D)).", "If the house needs an island feed, use UF or THWN-2 in conduit — never NM underground."],
      },
      {
        type: "never",
        items: [
          "Never put 14 AWG on a 20A breaker.",
          "Never pull aluminum or copper-clad aluminum branch cable from this guide. Stop and ask.",
          "Never staple so tight you cut the sheath. Never skip a nail plate that 300.4 requires.",
        ],
      },
    ],
  },
  {
    id: "panel",
    title: "Home runs and the panel area",
    blurb: "How to pull and label home runs, panel working space, and grounding.",
    tags: ["panel", "home run", "label", "meter", "gec", "ufer", "ground rod", "110.26", "230.85", "working space"],
    sections: [
      { type: "lead", text: "Helpers do not work in an energized panel or remove a deadfront. You can label home runs, keep the area clear, and photograph a closed panel if asked. The can, the working space, and the grounding must be right at rough-in." },
      { type: "diagram", id: "panel" },
      {
        type: "table",
        caption: "Home runs",
        headers: ["Rule", "What to do"],
        rows: [
          ["Path", "Home runs and 240V runs go diagonal through the attic. Trace every home run back to the panel on the plan before you pull."],
          ["Labels", "Label every home run at the panel end with circuit number and room, exactly as the panel schedule says — e.g. “12 – Kitchen counter.” Marker on tape on the sheath, clear enough to read in a photo. Labels go on before the cable enters the can."],
          ["Connectors", "One cable per connector. Never jam two under one."],
          ["Numbers", "Do not renumber circuits or swap breakers. A foreman-approved field change gets marked in red on the field set."],
        ],
      },
      {
        type: "table",
        caption: "Panel, meter, and grounding",
        headers: ["Item", "What to check"],
        rows: [
          ["New gear", "A Siemens 200A meter-main (often an MM0202B1200) and a Siemens 200A 30-space panel, per the plan. Existing Square D panels get Square D breakers."],
          ["Working space", "30 in wide (or the panel width), 36 in deep, and 6½ ft high, kept clear (110.26(A))."],
          ["Where the panel cannot go", "Not in a bathroom, a clothes closet, or over steps (240.24(D), (E), and (F))."],
          ["Emergency disconnect", "An outdoor emergency disconnect, labeled “EMERGENCY DISCONNECT, SERVICE DISCONNECT” (NEC 230.85)."],
          ["Grounding", "Sharma standard, per the plan: two 5/8 in × 8 ft rods, acorn clamps, #4 bare copper GEC, intersystem bonding bridge. A Ufer counts only when the plans or footing actually have one. Bond every electrode present (250.50, 250.52). Metal water pipe bonded within 5 ft of entry where 250.68(C) applies. CSST bonded per the manufacturer and the Florida Fuel Gas code."],
          ["Surge protection", "A Type 1 or Type 2 SPD at the service — integral to the service equipment or immediately adjacent (NEC 230.67). Follow the plan."],
        ],
      },
      {
        type: "do",
        items: ["Count labelled home runs against the panel schedule before you call it done.", "Keep drinks, scraps, and leftover wire off the panel."],
      },
      {
        type: "never",
        items: ["Never work in an open energized panel. Never touch bus bars, lugs, or service conductors.", "Never leave a panel open and walk away.", "Never land a 15A home run in a bathroom box."],
      },
    ],
  },
  {
    id: "smoke",
    title: "Smoke and CO",
    blurb: "Where the boxes go, how they interconnect, and the 1-gang nail-on box.",
    tags: ["smoke", "co", "carbon", "alarm", "detector", "interconnect", "14/3", "R314", "R315"],
    sections: [
      { type: "lead", text: "Smoke and CO boxes go in at rough-in. Get the locations right now — moving them after drywall is painful." },
      { type: "diagram", id: "ri-smoke" },
      {
        type: "table",
        caption: "Locations",
        headers: ["Alarm", "Where"],
        rows: [
          ["Smoke", "In each bedroom, outside each sleeping area, and on each story (FBC R314.3). At least 3 ft from a bath door or a supply register."],
          ["CO", "Within 10 ft of each bedroom when the house has a fuel-burning appliance or an attached garage (F.S. 553.885, FBC R315)."],
        ],
      },
      {
        type: "table",
        caption: "How Sharma wires them",
        headers: ["Rule", "What to do"],
        rows: [
          ["The box", "A 1-gang nail-on box — not a round box."],
          ["The circuit", "One 15A area circuit (unswitched, AFCI at the breaker). One power feed into a single detector; the rest daisy-chain on 14/3 so if one sounds, they all sound."],
        ],
      },
      {
        type: "do",
        items: ["Put a box at every plan location, and add any the Code requires if a bedroom was missed.", "Keep the interconnect on 14/3 and do not switch the smoke circuit."],
      },
      {
        type: "never",
        items: ["Do not use a round fan or light box for a smoke alarm.", "Do not put a smoke box within 3 ft of a bath door or a supply register.", "Do not leave CO out of a house with an attached garage or a gas appliance."],
      },
    ],
  },
  {
    id: "lowvoltage",
    title: "Low voltage",
    blurb: "Data, TV, and doorbell rough-in — kept away from the power wires.",
    tags: ["low voltage", "data", "tv", "doorbell", "thermostat", "725", "CM", "CL2"],
    sections: [
      { type: "lead", text: "Pull low-voltage only where it is in the scope and on the plan. On a standard Sharma electrical takeoff, thermostat wire is not included unless someone has added it." },
      { type: "diagram", id: "ri-lowvoltage" },
      {
        type: "table",
        caption: "Low-voltage rough-in",
        headers: ["Item", "What to do"],
        rows: [
          ["Boxes", "Device boxes or rings at the planned data, TV, and doorbell spots."],
          ["Cable", "Use cable listed for the use (CM/CMR, CL2/CL3, or in conduit)."],
          ["Support", "Support and protect it. Nail plates go on wherever the cable is within 1¼ in of the stud face."],
          ["Separation", "Keep low-voltage cable out of power boxes and raceways unless a listed barrier is used. Keep 2 in from power wiring (725.136, 800.133)."],
          ["Labels", "Label data and TV cables at both ends. Mount and ground a structured-media panel if the plan has one."],
          ["Penetrations", "Sleeve and seal exterior cable. Fire-stop where required."],
        ],
      },
      {
        type: "do",
        items: ["Follow the plan for camera, doorbell, and data drops.", "Keep the low-voltage runs as clean and straight as the power runs."],
      },
      {
        type: "never",
        items: ["Do not pull thermostat wire unless the plan or your foreman has it in scope.", "Do not drop data cable into a power box.", "Do not skip nail plates on low-voltage just because it is not 120V."],
      },
    ],
  },
  {
    id: "gfci",
    title: "GFCI / AFCI by room",
    blurb: "Where shock and arc-fault protection belong — at the breaker on Sharma jobs.",
    tags: ["gfci", "afci", "dual-function", "210.8", "210.12", "breaker", "by room"],
    sections: [
      { type: "lead", text: "GFCI protects people from shock. AFCI protects against fire from dangerous arcing. On Sharma new houses the standard is dual-function AFCI/GFCI breakers in the panel, not GFCI receptacles, unless the plan or the foreman says otherwise." },
      { type: "diagram", id: "gfci-afci" },
      {
        type: "table",
        caption: "Where it is planned (plain map)",
        headers: ["Room or area", "Typical protection"],
        rows: [
          ["Kitchens, baths, laundry, garages, outdoors, and within 6 ft of sinks or tubs", "GFCI, plus AFCI where 210.12 also applies. Kitchen, laundry, bath, garage, and exterior receptacle circuits are 20A."],
          ["HVAC service receptacle required by 210.63", "GFCI required, even in a dry attic (210.8(E)). Provided at the breaker on Sharma jobs."],
          ["Family, dining, living, dens, bedrooms, closets, hallways, and similar rooms", "AFCI on the 120V 15A and 20A circuits (210.12(A))."],
          ["Condenser / AC", "A standard 2-pole breaker to MOCP — never GFCI. Listed and labeled HVAC equipment is exempt from outdoor-outlet GFCI under FBC-R E3408.1, Exception No. 2 to NEC 210.8(F)."],
          ["Range and electric dryer", "2-pole GFCI breakers, per company standard and the plan."],
        ],
      },
      { type: "note", text: "The plan may show a GFCI symbol at a receptacle. That still usually means protection — on Sharma jobs that protection is typically the dual-function breaker, not a GFCI device in the wall. Follow the plan and your foreman. See NEC 210.8(A) and 210.12(A)." },
      {
        type: "do",
        items: ["Check the panel schedule marks AFCI / GFCI (or dual-function) for each circuit.", "If a breaker later trips, tell the foreman. Do not bypass it."],
      },
      {
        type: "never",
        items: ["Never bypass a GFCI or AFCI.", "Never put a GFCI breaker on the condenser.", "Do not assume every “GFCI” mark on the plan is a GFCI receptacle."],
      },
    ],
  },
  {
    id: "inspect",
    title: "Inspection-ready checklist",
    blurb: "Walk this with your foreman, take photos in the crew app, then use Inspection Prep to mark the house ready.",
    tags: ["inspection", "checklist", "photos", "inspect", "ready", "walkthrough"],
    sections: [
      { type: "lead", text: "Do not call for inspection until you can honestly check these off. Use Inspection Prep to walk the official Electrical Rough-in list and mark the house ready." },
      { type: "link", href: "https://sharma-inspect.sharma-crew.workers.dev", label: "Open Inspection Prep", note: "Use the Electrical Rough-in checklist. Photos in the crew app get the company watermark." },
      { type: "diagram", id: "photos" },
      {
        type: "table",
        caption: "Boxes, cable, and circuits",
        headers: ["Check", "Look for"],
        rows: [
          ["Boxes", "They match the plans. Fan-rated boxes at every fan. Depth fits the drywall. Wall receptacles 18 in to the bottom of the box unless the plans say otherwise. Switches 48 in to center. Counters per plan or foreman."],
          ["Spacing and required outlets", "Wall, counter, island, bath, hall, foyer, laundry, garage, and outdoor rules — see the room pages."],
          ["Staples and plates", "NM within 12 in of each box and every 4½ ft (8 in at a single-gang box with no clamp). Nail plates where holes are closer than 1¼ in to the face."],
          ["Makeup", "6 in free, 3 in past the face, sheath ¼ in into the box. Grounds spliced and made up. Metal boxes bonded. Neutrals at switch locations. Box fill OK."],
          ["Circuits", "Two 20A small-appliance circuits (kitchen, pantry, breakfast, dining, fridge); 20A laundry; 20A bath; 20A garage. Dedicated appliance runs per the plan. 240V landings pulled. No NM under a slab."],
          ["Attic", "Within 6 ft of a scuttle with no permanent stairs: NM along the sides of the joists or framing (or through bored holes), never loose across the tops. No guard strips, no no-wire zone, devices not moved. Attic light beside the scuttle, switched at entry."],
        ],
      },
      {
        type: "table",
        caption: "Smoke, panel, and close-out",
        headers: ["Check", "Look for"],
        rows: [
          ["Smoke / CO", "Boxes in each bedroom, outside sleeping areas, each story; CO where required; interconnect on an unswitched AFCI circuit."],
          ["Panel and service", "Working space clear. No panel in a bath, closet, or over steps. Home runs labelled. Grounding ready. Emergency disconnect labeled. Type 1 or 2 SPD at the service (230.67). HVAC circuits and disconnects pulled."],
          ["Close-out", "Exterior and garage boxes weather-ready. Holes foamed or fire-stopped. Site clean. Foreman walk done. Permit card and plans on site."],
        ],
      },
      {
        type: "table",
        caption: "Photos — every phase, through the crew app",
        headers: ["Shoot", "What to capture"],
        rows: [
          ["Permit", "Permit box or card posted"],
          ["Service", "Meter and service, grounding (rods, GEC, bonding bridge), interior panel with home runs labelled"],
          ["Protection", "Foam or sealing, nail plates and furring, island or UF feeds"],
          ["Equipment", "Every 240V location, neat switch-box makeup, smoke / CO locations"],
          ["Problems", "Problem spots, taped and noted, before they are covered"],
        ],
      },
      {
        type: "do",
        items: ["Walk the list out loud with your foreman. Cannot check a line? You are not ready.", "Upload photos in the crew app — watermarked with company, licenses, date/time (Eastern), address."],
      },
      {
        type: "never",
        items: ["Do not call for inspection with missing labels, missing plates, or a dirty house.", "Do not use unwatermarked personal photos as the job record."],
      },
    ],
  },
  {
    id: "mistakes",
    title: "Common mistakes",
    blurb: "The misses that fail inspections — cheap to do right now, expensive after drywall.",
    tags: ["mistakes", "fail", "callback", "forgot", "wrong", "classic"],
    sections: [
      { type: "lead", text: "Learn this list and you will save callbacks and failed inspections." },
      { type: "diagram", id: "ri-mistakes" },
      {
        type: "table",
        caption: "The ones we see over and over",
        headers: ["#", "The mistake"],
        rows: [
          ["1", "Box not flush with the finished wall — set it for the drywall thickness."],
          ["2", "No staple within 12 in of a box, or over 4½ ft between staples."],
          ["3", "Missing nail plate where the hole is closer than 1¼ in to the stud face."],
          ["4", "Cable sheath stopping short — less than ¼ in into the box."],
          ["5", "Under 6 in of free wire at the box, or under 3 in past its face."],
          ["6", "Box overfilled."],
          ["7", "Wrong wire on the breaker — 14 AWG copper on a 20A is the classic. 14 on 15A, 12 on 20A."],
          ["8", "Grounds not made up, or not bonded to a metal box."],
          ["9", "A required receptacle missing — counter, bath, outdoor, garage, laundry, hallway, or foyer."],
          ["10", "Home runs not labelled at the panel — or two cables under one connector."],
          ["11", "A 15A home run landed in a bathroom box."],
          ["12", "A fan on a box that is not fan-rated, or a smoke alarm in a round box."],
          ["13", "Heights guessed: switches off the Sharma 48 in to center, or a counter height invented instead of taken from the plan or foreman."],
          ["14", "A small-appliance circuit feeding an outdoor outlet, or a fridge on its own circuit when the plan did not say to."],
          ["15", "NM underground or under a slab — or a truss cut to make a pull fit."],
          ["16", "NM loose across the tops of the joists within 6 ft of a scuttle — or a no-wire zone / moved devices at the scuttle."],
          ["17", "Dining receptacles on a 15A area circuit instead of a small-appliance circuit."],
        ],
      },
      {
        type: "do",
        items: ["If you are not sure, stop and ask. A question is cheaper than opening a wall."],
      },
      {
        type: "never",
        items: ["Never guess a height, a wire size, or a 240V landing.", "Never cover a problem hoping no one will see it — tape it, note it, and tell your foreman."],
      },
    ],
  },
];

export const ROUGHIN_ANSWERS = [
  { id: "ri-order", title: "Work a house in order", answer: "Walk and mark, set the meter-main and panel cans, set boxes (including vanity and smoke/CO), drill, pull circuits, pull 240V, staple and nail-plate, make up grounds, label home runs, install grounding, pipe the service, then walk the checklist and take photos.", topic: "start", tags: ["order", "sequence", "steps"] },
  { id: "ri-plan-wins", title: "The plan always wins", answer: "If this guide and the plan disagree, follow the plan and ask your foreman. If the house and the drawing do not match, stop, tell your foreman, and do not move boxes on your own.", topic: "start", tags: ["plan", "conflict", "drawing"] },
  { id: "ri-18", title: "Wall receptacles are 18 inches to the bottom of the box when the plans do not specify", answer: "When the plans do not specify a height, wall receptacles go 18 inches to the bottom of the box. Switches are 48 inches to center (Sharma standard). Counter receptacles have no default number — they are per plan or foreman.", topic: "boxes", tags: ["18", "height", "receptacle", "bottom"] },
  { id: "ri-no-height-guess", title: "Switches are 48 inches to center — do not guess counter height", answer: "Switches go 48 inches to the center of the box on Sharma jobs, unless the plan shows a different height. Counter-receptacle height has no standard number — it is per plan or foreman only.", topic: "boxes", tags: ["switch height", "counter", "48"] },
  { id: "ri-cu", title: "Copper 14 AWG on 15A, 12 AWG on 20A — CCA one size up", answer: "Sharma runs both copper and CCA. Copper: 14 AWG is protected at 15 amps, 12 AWG at 20 amps. CCA is sized one AWG up: 12 AWG on 15A, 10 AWG on 20A. CCA: use the screw terminals, never the push-in holes. Wire nuts must say AL-CU. Ask your lead if unsure. Ordinary 15/20A device screw terminals are fine with CCA — CO/ALR is only for plain aluminum. Never put 14 AWG on a 20A breaker. The lead decides which wire a job gets — helpers never swap on their own. Never backstab.", topic: "wire", tags: ["copper", "14", "12", "cca", "aluminum", "10"] },
  { id: "ri-staple", title: "Staple within 12 inches, or 8 if there is no clamp", answer: "Secure NM within 12 inches of most boxes and at least every 4½ feet (NEC 334.30). If a single-gang box has no cable clamp, secure within 8 inches (314.17(C) exception). Do not crush the jacket.", topic: "wire", tags: ["staple", "12", "8", "4.5"] },
  { id: "ri-plate", title: "Nail plate if closer than 1¼ inch", answer: "Add a steel nail plate when the edge of a hole or notch is closer than 1¼ inch to the face of the framing (NEC 300.4(A)).", topic: "wire", tags: ["nail plate", "kick plate", "1.25"] },
  { id: "ri-free", title: "6 inches of free wire, ¼ inch of sheath", answer: "Leave at least 6 inches of free conductor, with 3 inches past the box face (300.14). The NM sheath must extend at least ¼ inch into the box (314.17).", topic: "boxes", tags: ["6 inch", "300.14", "sheath", "314.17"] },
  { id: "ri-bath-home", title: "Never land a 15A home run in a bathroom box", answer: "Land a 15A home run in the first box outside the bath. A 20A bath-receptacle circuit may home-run straight to the bath.", topic: "baths", tags: ["bathroom", "home run", "15a"] },
  { id: "ri-fridge", title: "The fridge rides on a small-appliance circuit", answer: "On Sharma jobs the refrigerator is on one of the two 20A small-appliance circuits that serve kitchen, pantry, breakfast, and dining receptacles. It does not get its own dedicated circuit unless the plan says so (210.52(B)(1) Exception No. 2 allows an individual 15A or larger fridge circuit). Those circuits must not feed outdoor outlets (210.52(B)(2)).", topic: "kitchen", tags: ["fridge", "refrigerator", "small-appliance"] },
  { id: "ri-sa", title: "Two 20A kitchen small-appliance circuits", answer: "A dwelling needs at least two 20A small-appliance circuits with 12 AWG copper (NEC 210.11(C)(1)). They serve kitchen, pantry, breakfast, and dining receptacle outlets — including countertop receptacles — plus the fridge (210.52(B)). The fridge shares one of them unless the plan gives it an individual circuit. These circuits must not supply any other outlets and must not feed outdoor outlets (210.52(B)(2)).", topic: "kitchen", tags: ["kitchen", "20a", "counter"] },
  { id: "ri-island", title: "Island feeds are never NM", answer: "An island or peninsula needs at least one receptacle for the first 9 sq ft (or fraction thereof) of countertop, and one more for every additional 18 sq ft or fraction thereof. On a peninsula, at least one receptacle shall be within 2 ft of the outer end (NEC 210.52(C)(2)). The under-slab or underground feed must be UF or THWN-2 in conduit — never NM (300.9, 334.12(B)(4)).", topic: "kitchen", tags: ["island", "uf", "underground"] },
  { id: "ri-240box", title: "Only the dryer and range get a 240V receptacle box", answer: "The dryer gets a 240V receptacle box. The range sometimes does, and it may be surface-mount. Water heater, AC condenser, and air handler are hardwired or run to a disconnect — no receptacle box.", topic: "hvac", tags: ["240", "dryer", "range", "water heater", "disconnect"] },
  { id: "ri-smoke-loc", title: "Smoke in each bedroom, outside sleeping, each story", answer: "Smoke alarms go in each bedroom, outside each sleeping area, and on each story (FBC R314.3), not within 3 ft of a bath door or supply register. Use a 1-gang nail-on box, not a round box. One power feed on an unswitched 15A AFCI area circuit; daisy-chain the rest on 14/3.", topic: "smoke", tags: ["smoke", "bedroom", "14/3"] },
  { id: "ri-co", title: "CO within 10 feet of bedrooms when required", answer: "A CO alarm is required within 10 ft of each bedroom if the house has a fuel-burning appliance or an attached garage (F.S. 553.885, FBC R315).", topic: "smoke", tags: ["co", "carbon monoxide", "garage", "gas"] },
  { id: "ri-label", title: "Label home runs before they enter the can", answer: "Label every home run at the panel with the circuit number and room, matching the panel schedule. Write it on tape on the sheath. One cable per connector. Do not renumber breakers.", topic: "panel", tags: ["label", "home run", "connector"] },
  { id: "ri-workspace", title: "Panel working space is 30 by 36 by 6½", answer: "Keep 30 inches of width (or the panel width), 36 inches of depth, and 6½ feet of height clear in front of the panel (110.26(A)). Do not put a panel in a bathroom, a clothes closet, or over steps.", topic: "panel", tags: ["110.26", "working space", "closet"] },
  { id: "ri-hvac-rec", title: "HVAC service receptacle within 25 feet", answer: "A 125V service receptacle must be within 25 ft of the condenser or air handler, on the same level, and not on the load side of the equipment disconnect (NEC 210.63). It requires GFCI protection (210.8(E)). Attic equipment also needs a light at or near the unit, switched at the attic entry (210.70(A)(3) and FBC-R M1305.1.3.1). Put the usual attic light just beside the scuttle, switched at entry. The 240V HVAC runs go to a disconnect, not a receptacle box.", topic: "hvac", tags: ["210.63", "service receptacle", "attic"] },
  { id: "ri-lv", title: "Keep low voltage 2 inches from power", answer: "Low-voltage cable stays out of power boxes unless a listed barrier is used, and stays at least 2 inches from power wiring (725.136, 800.133). Do not pull thermostat wire unless it is in scope.", topic: "lowvoltage", tags: ["low voltage", "data", "thermostat"] },
  { id: "ri-dual", title: "Sharma uses dual-function breakers", answer: "On new houses, AFCI and GFCI protection is usually a dual-function breaker in the panel, not a GFCI receptacle, unless the plan or foreman says otherwise. Never put a GFCI breaker on the condenser.", topic: "gfci", tags: ["dual-function", "gfci", "afci"] },
  { id: "ri-spacing", title: "Wall spacing is 6 feet, counters 24 inches", answer: "No point along a wall 2 ft or wider should be more than 6 ft from a receptacle (210.52(A)). On a counter 12 in or wider, no point should be more than 24 in from a receptacle (210.52(C)(1)).", topic: "boxes", tags: ["spacing", "6 ft", "24 in", "210.52"] },
  { id: "ri-attic-run", title: "Home runs go diagonal in the attic", answer: "Home runs and 240V runs go diagonal through the attic, one clean line to the drop. Other attic runs stay parallel or perpendicular to the trusses. Within 6 ft of a scuttle that has no permanent stairs, run NM along the sides of the joists or framing, or through bored holes — never loose across the tops (NEC 320.23(A) and (B) via 334.23). Do not use guard strips, do not create a no-wire zone, and do not move devices. Never cut a truss.", topic: "attic", tags: ["diagonal", "attic", "scuttle"] },
  { id: "ri-block", title: "Cut-in, bracket, or nail-on — it depends on the wall", answer: "Wood framing gets nail-on boxes. Exterior walls and garages on a block house get cut-in boxes. The interior face of a block wall gets a bracket box.", topic: "boxes", tags: ["cut-in", "bracket", "block", "nail-on"] },
  { id: "ri-fan", title: "Fans need a fan-rated box; smokes need a 1-gang", answer: "A ceiling fan needs a listed fan-rated box. A smoke or CO alarm gets a 1-gang nail-on box, not a round box.", topic: "boxes", tags: ["fan", "smoke box"] },
  { id: "ri-photos", title: "Photos go in the crew app before you call inspection", answer: "Shoot the permit, service and grounding, labelled panel, nail plates, 240V landings, smoke/CO, and any problem spots. Official photos go through the crew app so they are watermarked. Then walk Inspection Prep.", topic: "inspect", tags: ["photos", "inspection prep"] },
];

export function roughinPageById(id) {
  return ROUGHIN_PAGES.find((p) => p.id === id) || null;
}

export function answersForRoughin(id) {
  return ROUGHIN_ANSWERS.filter((a) => a.topic === id);
}
