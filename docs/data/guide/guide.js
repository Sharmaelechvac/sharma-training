import { ROUGHIN_PAGES, ROUGHIN_ANSWERS } from "./roughin.js";

/* Residential Rough-In Guide field guide — Sharma Electric & HVAC.
   Plain-language reference for helpers on Florida residential new construction.
   Content pending review by Sharma's master electrician. */

export const BANNER =
  "Content pending review by Sharma's master electrician; follow your foreman and the plans.";

export const REVIEWED =
  "Reviewed by Sharma's master electrician. Follow your foreman and the plans.";

export const LIC = "Sharma Electric & HVAC · Lic. EC13013924 · CAC1823596";

export const TOPICS = [
  {
    id: "wire",
    title: "Wire sizes",
    blurb: "14 with 15A, 12 with 20A, colors, and how to read the jacket.",
    tags: ["wire", "cable", "nm-b", "nmb", "romex", "awg", "gauge", "14", "12", "10", "15a", "20a", "30a", "colors", "black", "white", "red", "neutral", "ground", "14/2", "12/2", "14/3", "12/3"],
    sections: [
      { type: "lead", text: "The writing on the cable jacket tells you the size and how many wires are inside. The breaker size must match the wire size." },
      { type: "diagram", id: "wire-pair" },
      {
        type: "table",
        caption: "NM-B (Romex) sizes you will see most",
        headers: ["Wire", "Breaker", "Typical use on our houses"],
        rows: [
          ["14 AWG", "15A", "Lights, fans, and general wall receptacles (area circuits)"],
          ["12 AWG", "20A", "Kitchen small-appliance, laundry, bath receptacles, garage, and dishwasher / disposal / hood"],
          ["10 AWG", "30A", "Some water heaters, condensers, or dryers — follow the plan"],
          ["8 or 6 AWG", "Per plan", "Ranges and larger loads — follow the plan and the foreman"],
        ],
      },
      {
        type: "table",
        caption: "How to read the jacket",
        headers: ["Printed", "Means"],
        rows: [
          ["12/2 w/ground", "Two insulated wires (black, white) plus a bare ground, 12 AWG"],
          ["12/3 w/ground", "Three insulated wires (black, red, white) plus a ground, 12 AWG"],
          ["14/2 or 14/3", "Same idea, but 14 AWG — use only on 15A circuits"],
        ],
      },
      { type: "diagram", id: "colors" },
      {
        type: "table",
        caption: "Wire colors",
        headers: ["Color", "Usually"],
        rows: [
          ["Black, red, or blue", "Hot (the ungrounded conductor)"],
          ["White or gray", "Neutral — do not use as a hot unless the foreman has you re-identify it"],
          ["Bare or green", "Equipment ground — never use it as a neutral"],
        ],
      },
      {
        type: "do",
        items: [
          "Match the breaker to the wire: 14 AWG with 15A, 12 AWG with 20A.",
          "Read the jacket before you pull or land a cable.",
          "Ask the foreman if a size is not on the plan or looks wrong.",
        ],
      },
      {
        type: "never",
        items: [
          "Never put 14 AWG on a 20A breaker.",
          "Never use the bare or green ground as a neutral.",
          "Never guess a feeder or appliance size — check the plan.",
        ],
      },
      { type: "note", text: "The 15A / 14 AWG and 20A / 12 AWG pairing comes from the small-conductor rule in NEC 240.4(D). On Sharma jobs, 15A area circuits carry an area's lights, fans, and general receptacles together. 20A is used where the Code requires it." },
    ],
  },
  {
    id: "heights",
    title: "Box heights",
    blurb: "Wall receptacles are 18 inches to the bottom of the box when the plans don't say. Switches are 48 inches to center. Counters follow the plan.",
    tags: ["height", "heights", "box", "receptacle", "outlet", "switch", "counter", "18", "inches", "center", "kitchen", "device height"],
    sections: [
      { type: "lead", text: "Receptacles measure to the BOTTOM of the box. Switches measure to the CENTER. If the plans show a height, use the plans. If they don't, use the rules below and confirm with your foreman." },
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
        type: "do",
        items: [
          "Use 18 inches to the bottom of the box for ordinary wall receptacles when the plans are silent.",
          "Set switches at 48 inches to center, unless the plan shows a different height.",
          "Keep a run of receptacles level and consistent.",
          "Ask the foreman whether you are measuring from the subfloor or the finished floor.",
        ],
      },
      {
        type: "never",
        items: [
          "Do not invent a number for counter-receptacle height. That one is per plan or foreman only.",
          "Do not mix heights on the same wall unless the plan calls for it.",
        ],
      },
    ],
  },
  {
    id: "gfci",
    title: "GFCI / AFCI where",
    blurb: "GFCI is shock protection. AFCI is fire protection from dangerous arcs. Know where each belongs.",
    tags: ["gfci", "afci", "gfi", "gfp", "arc", "fault", "dual-function", "breaker", "kitchen", "bath", "garage", "outdoor", "laundry", "reset", "trip"],
    sections: [
      { type: "lead", text: "Two different protections, often in one breaker. If a breaker trips, tell your foreman. Do not bypass it." },
      { type: "diagram", id: "gfci-afci" },
      {
        type: "table",
        caption: "What each one does",
        headers: ["Device", "Protects against", "Plain meaning"],
        rows: [
          ["GFCI", "Ground faults (shock)", "Current leaves the hot and does not come back on the neutral — for example through a person or water."],
          ["AFCI", "Dangerous arcing (fire)", "A damaged or pinched wire, or a loose connection, starts arcing inside a wall or cord."],
          ["Dual-function breaker", "Both", "One breaker in the panel that does GFCI and AFCI together."],
        ],
      },
      {
        type: "table",
        caption: "Where you will usually see this",
        headers: ["Protection", "Typical locations (follow the plan and current code)"],
        rows: [
          ["GFCI", "Kitchens, bathrooms, garages, outdoors, laundry, and other wet or damp areas (NEC 210.8)."],
          ["AFCI", "Many of the dwelling circuits in a house (NEC 210.12)."],
        ],
      },
      {
        type: "do",
        items: [
          "On Sharma new houses the standard is dual-function AFCI/GFCI breakers, not GFCI receptacles, unless the plan or the foreman says otherwise.",
          "If a breaker or GFCI trips, stop and tell the foreman.",
        ],
      },
      {
        type: "never",
        items: [
          "Never bypass, tape over, or 'fix' a GFCI or AFCI that trips.",
          "Never reset a breaker over and over to keep working. Something is wrong.",
          "Do not swap in a GFCI receptacle on your own. On Sharma jobs, GFCI protection comes from the breaker in the panel — if protection looks wrong, tell the foreman.",
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    blurb: "Everyday hand tools, testers, and how to use a meter without guessing.",
    tags: ["tools", "meter", "multimeter", "tester", "pliers", "strippers", "lineman", "voltage", "continuity", "leads", "com"],
    sections: [
      { type: "lead", text: "Use the right tool, keep it in shape, and never trust a tester you have not just proven." },
      { type: "diagram", id: "meter" },
      {
        type: "table",
        caption: "Hand tools you will carry",
        headers: ["Tool", "Used for"],
        rows: [
          ["Lineman's pliers", "Twisting, cutting, and pulling"],
          ["Diagonal cutters / dikes", "Clean cuts on conductors"],
          ["Needle-nose", "Tight boxes and forming hooks"],
          ["Wire strippers", "Removing insulation without nicking the copper"],
          ["Screwdrivers and nut drivers", "Devices, plates, and lugs — use insulated tools near live parts"],
          ["Tape measure and level", "Box heights and straight device rows"],
          ["Fish tape", "Pulling cable through walls or conduit, as directed"],
        ],
      },
      {
        type: "table",
        caption: "Testers",
        headers: ["Tester", "What it is"],
        rows: [
          ["Non-contact voltage tester (tick tracer)", "A first check only — not the final word"],
          ["Multimeter", "Measures voltage, and often continuity or resistance"],
          ["Receptacle tester", "Checks polarity and ground at a plugged-in outlet"],
        ],
      },
      {
        type: "do",
        items: [
          "Prove your tester on a known live source, test the circuit, then prove the tester again.",
          "Black lead in COM, red lead in V when measuring voltage.",
          "Start on a high range if the meter is not auto-ranging.",
        ],
      },
      {
        type: "never",
        items: [
          "Do not measure continuity or resistance on a live circuit.",
          "Do not treat a dead tester as a dead circuit.",
          "If you do not know how to take a reading, ask. Do not guess.",
        ],
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    blurb: "Lockout, PPE, ladders, test-before-you-touch, heat, and staying out of the panel.",
    tags: ["safety", "loto", "lockout", "tagout", "ppe", "glasses", "ladder", "fiberglass", "heat", "attic", "test", "touch", "panel", "deadfront", "shock"],
    sections: [
      { type: "lead", text: "Nothing on the job is worth a shock, a fall, or heat illness. If you are not sure, stop and ask the foreman." },
      { type: "diagram", id: "prove" },
      {
        type: "table",
        caption: "The rules that keep you safe",
        headers: ["Topic", "Remember"],
        rows: [
          ["Lockout / tagout", "Lock it, tag it, then test it. Only the person who put the lock on may take it off."],
          ["PPE", "Safety glasses all day. Work boots, not sneakers. Gloves for pulling or sharp edges. Hard hat when others are working overhead."],
          ["Ladders", "Use fiberglass around electrical work, not aluminum. 4-to-1 angle. Three points of contact. Do not stand on the top cap."],
          ["Test before you touch", "Prove the tester, test the circuit, prove the tester again. Never trust a label or 'someone said it's off.'"],
          ["Heat", "Florida attics get dangerous. Drink water, take shade breaks, and tell the foreman at the first sign of dizziness, nausea, or confusion."],
          ["The panel", "Helpers do not remove a deadfront or work in an energized panel. Stay back when it is open."],
        ],
      },
      { type: "diagram", id: "panel" },
      {
        type: "do",
        items: [
          "Treat every circuit as live until you have tested it.",
          "On new construction, never assume the panel is dead.",
          "Hold a light, fetch tools, or photograph a closed panel if you are asked.",
        ],
      },
      {
        type: "never",
        items: [
          "Never touch bus bars, lugs, or service conductors.",
          "Never leave a panel open and walk away.",
          "Never work in a panel with wet hands or while standing in water.",
          "Never climb a damaged ladder or overreach — move the ladder.",
        ],
      },
    ],
  },
  {
    id: "roughin",
    title: "Rough-in",
    blurb: "Stapling, drilling, nail plates, boxes, and what to photograph before drywall.",
    tags: ["rough", "rough-in", "roughin", "staple", "securing", "support", "drill", "stud", "nail plate", "kick plate", "truss", "box fill", "fan box", "12 inches", "4.5", "8 inches"],
    sections: [
      { type: "lead", text: "Rough-in is after framing and before insulation and drywall. This is when boxes go in, cable is pulled and stapled, and the inspector looks. Photos now save a tear-out later." },
      { type: "diagram", id: "staple" },
      {
        type: "table",
        caption: "Stapling and securing NM cable (NEC 334.30)",
        headers: ["Rule", "What to do"],
        rows: [
          ["Most boxes", "Secure the cable within 12 inches of the box"],
          ["Along the run", "Support at least every 4½ feet"],
          ["Plastic box with no cable clamp", "Secure within 8 inches of the box"],
          ["How tight", "Snug — not so tight that the staple cuts the jacket"],
        ],
      },
      { type: "diagram", id: "nailplate" },
      {
        type: "table",
        caption: "Drilling and protection",
        headers: ["Rule", "What to do"],
        rows: [
          ["Where to drill", "Center of the stud when you can"],
          ["Nail plates (kick plates)", "Required when the edge of a hole or notch is closer than 1¼ inch to the face of the framing (NEC 300.4)"],
          ["Trusses", "Never cut or notch a truss. Stop and tell the foreman."],
        ],
      },
      {
        type: "table",
        caption: "Boxes",
        headers: ["Rule", "What to do"],
        rows: [
          ["Keep them accessible", "Never bury a junction in a wall or ceiling (NEC 314.29)"],
          ["Ceiling fans", "A fan needs a listed fan-rated box — a regular ceiling box is not enough"],
          ["Box fill", "Every wire, device, and clamp takes space (NEC 314.16). If it looks stuffed, use a bigger box or ask."],
        ],
      },
      {
        type: "do",
        items: [
          "Take clear photos of boxes, runs, and problem areas before drywall. Use the crew app so they are watermarked.",
          "Use the right size staple for the cable. Do not stack cables under one staple unless that staple is listed for it.",
        ],
      },
      {
        type: "never",
        items: [
          "Never bury a splice or a box.",
          "Never cut a truss or a structural member on your own.",
          "Never force a device into a packed box.",
        ],
      },
    ],
  },
  {
    id: "trim",
    title: "Trim",
    blurb: "Devices, screw colors, service loops, testing, and photo checklists.",
    tags: ["trim", "trim-out", "device", "receptacle", "switch", "plate", "brass", "silver", "pigtail", "service loop", "photo", "watermark", "crew app"],
    sections: [
      { type: "lead", text: "Trim-out is after drywall and paint. Devices go in, plates go on, and everything gets tested. The house should look clean when you leave." },
      { type: "diagram", id: "device" },
      {
        type: "table",
        caption: "Screw colors on a receptacle or switch",
        headers: ["Screw", "Lands"],
        rows: [
          ["Brass", "Hot"],
          ["Silver", "Neutral"],
          ["Green", "Ground"],
        ],
      },
      {
        type: "table",
        caption: "Making up a device",
        headers: ["Step", "How"],
        rows: [
          ["Hooks", "Wrap the wire clockwise around a screw so tightening closes the hook"],
          ["Grounds", "Pigtail the grounds"],
          ["In the box", "Leave a service loop so the device can come out later without going tight"],
          ["Plates", "Device flush and square so the plate sits flat and does not rock"],
          ["Test", "Check polarity and ground on every receptacle, as the foreman directs"],
        ],
      },
      { type: "diagram", id: "photos" },
      {
        type: "table",
        caption: "Photo checklist — every phase gets photos",
        headers: ["When", "What to shoot"],
        rows: [
          ["Rough-in", "Boxes, cable runs, nail plates, the panel area, and anything unusual"],
          ["Inspections", "What the inspector will see, plus any correction"],
          ["Trim and final", "Finished devices, plates, and the completed work"],
        ],
      },
      {
        type: "do",
        items: [
          "Use the crew app for official job photos. It watermarks them with the company name, license numbers, date and time (Eastern), and the address.",
          "Take clear, well-lit photos. Take more rather than fewer.",
          "Tell the foreman right away if you nick a wire, crack a plate, or damage a surface.",
        ],
      },
      {
        type: "never",
        items: [
          "Do not use push-in 'stab' connections unless the device is listed for that use. Prefer the screws or listed clamps.",
          "Do not send unofficial, unwatermarked photos as the job record.",
          "Do not leave scraps, screws, or cable bits on the floor.",
        ],
      },
    ],
  },
  {
    id: "glossary",
    title: "Glossary",
    blurb: "Plain meanings for the words you will hear on the job.",
    tags: ["glossary", "terms", "definitions", "words", "dictionary"],
    sections: [
      { type: "lead", text: "Tap a word on the home search, or scan the list below. If a term is used differently on your job, follow your foreman." },
    ],
  },
];

export const ANSWERS = [
  { id: "14-15", title: "14 AWG goes on a 15A breaker", answer: "14-gauge wire is protected at 15 amps. Use it on 15A area circuits (lights, fans, general receptacles). Never put 14 AWG on a 20A breaker.", topic: "wire", tags: ["14", "15a", "15 amp", "awg", "breaker", "wire size"] },
  { id: "12-20", title: "12 AWG goes on a 20A breaker", answer: "12-gauge wire is protected at 20 amps. Typical uses: kitchen small-appliance circuits, laundry, bath receptacles, garage, and dishwasher / disposal / hood.", topic: "wire", tags: ["12", "20a", "20 amp", "kitchen", "laundry"] },
  { id: "no-14-on-20", title: "Never put 14 AWG on a 20A breaker", answer: "The breaker must match the wire. 14 AWG can only be protected at 15 amps (NEC 240.4(D)). If the circuit is 20A, it has to be 12 AWG or larger.", topic: "wire", tags: ["14", "20a", "mismatch", "too small", "overfuse"] },
  { id: "read-jacket", title: "How to read 12/2 w/ground", answer: "12 is the wire size (AWG). 2 means two insulated conductors (usually black and white). “W/ground” means there is also a bare equipment ground. 12/3 adds a red wire, often used for 3-way switches.", topic: "wire", tags: ["12/2", "14/2", "12/3", "14/3", "romex", "jacket", "nm-b"] },
  { id: "colors", title: "Wire colors: hot, neutral, ground", answer: "Black, red, or blue is usually hot. White or gray is the neutral. Bare or green is the equipment ground. Never use the ground as a neutral.", topic: "wire", tags: ["color", "black", "white", "green", "bare", "hot", "neutral", "ground"] },
  { id: "rec-height", title: "Wall receptacle height is 18 inches to the bottom of the box when the plans do not specify", answer: "When the plans do not specify a height, wall receptacles go 18 inches to the bottom of the box. Confirm whether you are measuring from the subfloor or the finished floor.", topic: "heights", tags: ["18", "outlet height", "receptacle height", "box height", "bottom"] },
  { id: "switch-height", title: "Switches go 48 inches to center", answer: "Sharma standard: switches sit 48 inches to the center of the box. If the plan shows a different height, the plan wins.", topic: "heights", tags: ["switch height", "switch box", "48"] },
  { id: "counter-height", title: "Counter receptacles are per plan or foreman", answer: "Kitchen and other counter receptacles have no default height in this guide. Use the plan or ask the foreman.", topic: "heights", tags: ["counter", "kitchen outlet", "backsplash"] },
  { id: "gfci-is", title: "GFCI protects people from shock", answer: "A GFCI watches for current leaving the hot and not coming back on the neutral. It trips to protect a person. Typical areas: kitchens, baths, garages, outdoors, and laundry. See NEC 210.8 and follow the plan.", topic: "gfci", tags: ["gfci", "gfi", "shock", "ground fault"] },
  { id: "afci-is", title: "AFCI protects against fire from arcing", answer: "An AFCI looks for dangerous arcing from damaged wires or loose connections that can start a fire. Many house circuits need it. See NEC 210.12.", topic: "gfci", tags: ["afci", "arc", "fire"] },
  { id: "dual-function", title: "Sharma uses dual-function breakers", answer: "On Sharma new houses the standard is dual-function AFCI/GFCI breakers in the panel, not GFCI receptacles, unless the plan or the foreman says otherwise.", topic: "gfci", tags: ["dual", "breaker", "company", "receptacle"] },
  { id: "no-bypass", title: "Never bypass a GFCI or AFCI", answer: "A trip is a warning. Tell the foreman. Do not reset it over and over, tape it, or jump it out so you can keep working.", topic: "gfci", tags: ["bypass", "trip", "reset"] },
  { id: "test-touch", title: "Test before you touch", answer: "Prove your tester on a known live source, test the circuit, then prove the tester again. A dead tester looks just like a dead circuit. Do not trust a breaker label alone.", topic: "safety", tags: ["test", "touch", "prove", "meter", "live"] },
  { id: "loto", title: "Only you can remove your lock", answer: "The person who puts a lockout lock on is the only person who may take it off. Lock it, tag it, then test it before you work.", topic: "safety", tags: ["lockout", "tagout", "loto", "lock"] },
  { id: "ladder", title: "Use a fiberglass ladder around electrical work", answer: "Do not use aluminum around electrical work. Set an extension ladder at a 4-to-1 angle (1 foot out for every 4 feet of height). Keep three points of contact. Stay off the top cap.", topic: "safety", tags: ["ladder", "fiberglass", "aluminum", "4-to-1"] },
  { id: "heat", title: "Heat illness: stop and tell the foreman", answer: "Florida attics get dangerously hot. Drink water before you are thirsty. Dizziness, nausea, headache, or confusion means stop now and tell your foreman. Do not tough it out.", topic: "safety", tags: ["heat", "attic", "water", "hot", "heat stroke"] },
  { id: "panel", title: "Helpers stay out of the panel", answer: "Do not remove a deadfront or work in an energized panel. Never touch bus bars, lugs, or service conductors. Stay back when the panel is open unless the foreman calls you over and it is safe.", topic: "safety", tags: ["panel", "deadfront", "bus", "breaker box", "service"] },
  { id: "staple-12", title: "Staple NM within 12 inches of most boxes", answer: "Secure NM cable within 12 inches of most boxes and at least every 4½ feet along the run (NEC 334.30). If a plastic box has no cable clamp, secure within 8 inches. Do not staple so tight that you cut the jacket.", topic: "roughin", tags: ["staple", "12", "4.5", "8 inch", "support", "secure"] },
  { id: "nail-plate", title: "Nail plate if closer than 1¼ inch", answer: "If the edge of a bored hole or notch is closer than 1¼ inch to the face of the stud or plate, add a steel nail plate (kick plate). That is NEC 300.4.", topic: "roughin", tags: ["nail plate", "kick plate", "1.25", "1 1/4", "drill", "300.4"] },
  { id: "no-truss", title: "Never cut a truss", answer: "Do not cut, notch, or drill a truss or other structural member on your own. Stop and tell the foreman. The builder has to approve any alteration.", topic: "roughin", tags: ["truss", "cut", "structural", "attic"] },
  { id: "no-bury", title: "Never bury a junction", answer: "Every splice has to stay in an accessible box with a cover. Do not hide a junction in a wall, ceiling, or attic insulation (NEC 314.29).", topic: "roughin", tags: ["junction", "splice", "bury", "accessible", "box"] },
  { id: "fan-box", title: "A ceiling fan needs a fan-rated box", answer: "A regular ceiling box is not enough for a fan. Use a box listed for ceiling-fan support.", topic: "roughin", tags: ["fan", "ceiling box", "listed"] },
  { id: "screws", title: "Brass is hot, silver is neutral, green is ground", answer: "On a receptacle or switch, the brass screw gets the hot, the silver screw gets the neutral, and the green screw gets the ground. Hook the wire clockwise around the screw.", topic: "trim", tags: ["brass", "silver", "green", "screw", "hot", "neutral", "polarity"] },
  { id: "service-loop", title: "Leave a service loop in the box", answer: "Leave a neat extra loop of wire in the box so the device can be pulled out later for service without going tight or tearing a splice.", topic: "trim", tags: ["service loop", "extra wire", "make up"] },
  { id: "photos", title: "Every phase gets photos in the crew app", answer: "Take photos at rough-in, inspections, trim, and final. Official job photos go through the crew app, which watermarks them with the company name, license numbers, date and time (Eastern), and the address.", topic: "trim", tags: ["photo", "pictures", "watermark", "crew app", "camera"] },
  { id: "tick-tracer", title: "A tick tracer is only a first check", answer: "A non-contact voltage tester can hint that something is live, but it is not the final word. Confirm with a meter and the prove-test-prove method.", topic: "tools", tags: ["tick", "non-contact", "ncvt", "tester"] },
  { id: "com-lead", title: "Black meter lead goes in COM", answer: "For voltage, the black lead goes in COM and the red lead goes in the V jack. Do not measure continuity on a live circuit.", topic: "tools", tags: ["com", "leads", "meter", "multimeter"] },
  { id: "glasses", title: "Safety glasses stay on all day", answer: "Wear safety glasses the whole day, not just when you are cutting or drilling. Add a hard hat when other trades are working overhead.", topic: "safety", tags: ["ppe", "glasses", "eye", "hard hat"] },
];

export const GLOSSARY = [
  { term: "AFCI", def: "Arc-fault circuit interrupter. A device that trips when it sees dangerous arcing that can start a fire." },
  { term: "Area circuit", def: "On Sharma jobs, a 15A circuit that carries one area's lights, fans, and general receptacles together." },
  { term: "AWG", def: "American Wire Gauge. The wire size. A smaller number is a thicker wire (12 is thicker than 14)." },
  { term: "Box fill", def: "The space wires, devices, and clamps take up in a box. A stuffed box is a fail and a hazard (NEC 314.16)." },
  { term: "Bus bar", def: "The live metal bars inside a panel that feed the breakers. Helpers do not touch these." },
  { term: "Deadfront", def: "The cover on a panel that hides the live parts. Helpers do not remove it." },
  { term: "Device", def: "A switch, receptacle, dimmer, or similar item that gets mounted in a box." },
  { term: "Dual-function breaker", def: "A panel breaker that provides both AFCI and GFCI protection. Sharma's usual standard on new houses." },
  { term: "Equipment ground", def: "The bare or green wire that bonds metal and devices back to the panel for fault current. It is not a neutral." },
  { term: "GFCI", def: "Ground-fault circuit interrupter. A device that trips to protect people from shock." },
  { term: "Home run", def: "The cable that runs from the panel (or a feed point) out to the first box on a circuit." },
  { term: "Hot", def: "The ungrounded conductor. Usually black, red, or blue. This is the wire that is live when the circuit is on." },
  { term: "Kick plate / nail plate", def: "A steel plate that protects cable where a hole or notch is too close to the face of the framing." },
  { term: "LOTO", def: "Lockout / tagout. Lock and tag a circuit off, then test, before you work. Only you remove your lock." },
  { term: "Mud ring", def: "A plaster ring on a square box that sets the device at the finished wall surface." },
  { term: "Neutral", def: "The grounded conductor. Usually white or gray. It carries current back to the source under normal operation." },
  { term: "New-work box", def: "A nail-on box used when the walls are still open, before drywall." },
  { term: "NM-B (Romex)", def: "Nonmetallic sheathed cable used in dry residential work. The jacket is labeled with the size and wire count." },
  { term: "Old-work box", def: "A cut-in box used after the wall is closed, with ears or clamps that catch the drywall." },
  { term: "Pigtail", def: "A short jumper wire that connects several wires to one screw, often used on grounds or in a crowded box." },
  { term: "Polarity", def: "Hot on the brass, neutral on the silver, ground on the green. Reversed polarity is a fail." },
  { term: "Receptacle", def: "An outlet. The device you plug into." },
  { term: "Rough-in", def: "The stage after framing and before drywall, when boxes and cable are installed and inspected." },
  { term: "Service loop", def: "Extra wire left in a box so a device can be pulled out later for service." },
  { term: "Small-appliance circuit", def: "A 20A circuit that serves receptacle outlets in the kitchen, pantry, breakfast room, and dining room, including countertop receptacles. On Sharma jobs the fridge rides on one of these. These circuits must not supply any other outlets and must not feed outdoor outlets (NEC 210.52(B)). A dwelling needs at least two of them (210.11(C)(1))." },
  { term: "Stab-back", def: "Push-in connections on the back of a device. Do not use them unless the device is listed for that. Prefer screws or listed clamps." },
  { term: "Tick tracer", def: "A non-contact voltage tester. Useful as a first check, not the final word." },
  { term: "Traveler", def: "The wires that run between 3-way or 4-way switches, often on 14/3 or 12/3." },
  { term: "Trim-out", def: "The stage after drywall and paint, when devices, plates, and final testing are done." },
  { term: "Ufer", def: "A concrete-encased grounding electrode in the footing. Use it only when the plans or the footing actually have one." },
  { term: "Scuttle", def: "The attic access opening. Within 6 ft of a scuttle that has no permanent stairs, run NM along the sides of the joists or framing, or through bored holes — never loose across the tops (NEC 320.23(A) and (B) via 334.23). Do not use guard strips, do not create a no-wire zone, and do not move devices." },
  { term: "Meter-main", def: "The outdoor meter and service disconnect combination, usually a Siemens 200A can on a new Sharma house." },
  { term: "3-way switch", def: "A switch that controls a light from two locations. Usually wired with 14/3 or 12/3." },
];

export function searchGuide(query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return { answers: [], topics: [], terms: [], query: "" };
  const tokens = q.split(/\s+/).filter(Boolean);
  const scoreParts = (parts) => {
    const bags = parts.map((p) => String(p || "").toLowerCase());
    let s = 0;
    for (const tok of tokens) {
      const hits = bags.map((b) => b.includes(tok));
      if (!hits.some(Boolean)) return 0;
      if (hits[0]) s += 5;
      else if (hits[1]) s += 3;
      else s += 2;
    }
    return s;
  };

  const answers = ANSWERS.concat(ROUGHIN_ANSWERS).map((a) => {
    const s = scoreParts([a.title, a.answer, (a.tags || []).join(" "), a.id]);
    return { kind: "answer", item: a, s };
  })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  const topics = TOPICS.filter((tp) => tp.id !== "roughin").map((tp) => {
    const s = scoreParts([tp.title, tp.blurb, (tp.tags || []).join(" ")]);
    return { kind: "topic", item: tp, s };
  }).concat(ROUGHIN_PAGES.map((pg) => {
    const s = scoreParts([pg.title, pg.blurb, (pg.tags || []).join(" ") + " residential rough-in"]);
    return { kind: "rpage", item: pg, s };
  }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  const terms = GLOSSARY.map((g) => {
    const s = scoreParts([g.term, g.def]);
    return { kind: "term", item: g, s };
  })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);

  return { answers, topics, terms, query: q };
}

export function topicById(id) {
  return TOPICS.find((t) => t.id === id) || null;
}

export function answerById(id) {
  return ANSWERS.concat(ROUGHIN_ANSWERS).find((a) => a.id === id) || null;
}

export function answersForTopic(id) {
  return ANSWERS.concat(ROUGHIN_ANSWERS).filter((a) => a.topic === id);
}
