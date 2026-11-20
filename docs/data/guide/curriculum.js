/* Practice quizzes for Residential Rough-In Guide. GitHub edition: quizzes run on this device. */

export const PASS_PCT = 80;

export const MODULES = [
  {
    id: "safety",
    number: 1,
    title: "Safety",
    recap: "Lockout, PPE, fiberglass ladders, test-before-you-touch, Florida heat, and staying out of the panel. If you are not sure, stop and ask.",
    topicId: "safety",
    quiz: [
      { id: "s1", q: "Who may remove a lockout lock?", choices: ["Any journeyman on the crew", "Only the person who put it on", "The homeowner", "Anyone with the key ring"], answer: 1, explain: "The person who placed the lock is the only one who may take it off." },
      { id: "s2", q: "What is the last step before you touch a circuit you think is off?", choices: ["Read the breaker label", "Ask a coworker if they shut it off", "Prove your tester, test the circuit, then prove the tester again", "Flip the switch a few times"], answer: 2, explain: "A dead tester looks like a dead circuit. Prove, test, prove." },
      { id: "s3", q: "Which ladder should you use around electrical work?", choices: ["Aluminum", "Wood only, never fiberglass", "Fiberglass", "Whatever is closest"], answer: 2, explain: "Use a fiberglass ladder, not aluminum, around electrical work." },
      { id: "s4", q: "A meter reads zero. What might that mean?", choices: ["The circuit is definitely off", "The circuit is off, or the tester is dead — prove the tester", "The circuit is 240V", "Zero always means a good ground"], answer: 1, explain: "Prove the tester on a known live source before you trust a zero." },
      { id: "s5", q: "You feel dizzy and nauseous in a hot attic. What do you do?", choices: ["Finish the run, then rest", "Drink energy drinks and keep going", "Stop and tell the foreman right away", "Open the panel for more air"], answer: 2, explain: "Heat illness is an emergency in the making. Stop and tell the foreman." },
      { id: "s6", q: "What PPE should stay on all day?", choices: ["A welding hood", "Safety glasses", "Rubber gloves only at lunch", "Nothing if the house is empty"], answer: 1, explain: "Safety glasses stay on all day." },
      { id: "s7", q: "A helper's job at an open panel is to:", choices: ["Remove the deadfront and land a breaker", "Stay back unless the foreman calls you over and it is safe", "Tighten any loose lug you notice", "Hold a drink for the foreman on the bus bar"], answer: 1, explain: "Helpers do not work in an energized panel or remove a deadfront." },
      { id: "s8", q: "For every 4 feet of ladder height, the base should sit about:", choices: ["4 feet out", "1 foot out", "8 feet out", "Flush against the wall"], answer: 1, explain: "That is the 4-to-1 rule: 1 foot out for every 4 feet of height." },
    ],
  },
  {
    id: "tools",
    number: 2,
    title: "Tools and meters",
    recap: "Lineman's, strippers, and testers. A tick tracer is a first check only. Black lead in COM. Never measure continuity on a live circuit.",
    topicId: "tools",
    quiz: [
      { id: "t1", q: "A non-contact 'tick tracer' is:", choices: ["The final word that a circuit is dead", "A first check only, not the final word", "A replacement for a lockout", "Used to measure amps"], answer: 1, explain: "Confirm with a meter and prove-test-prove." },
      { id: "t2", q: "When measuring voltage, the black lead goes in:", choices: ["The A jack", "COM", "The 10A jack", "Either jack is fine"], answer: 1, explain: "Black in COM, red in V." },
      { id: "t3", q: "You should measure continuity or resistance:", choices: ["On a live circuit, to be thorough", "Only on a circuit that is confirmed off", "Across the panel bus", "With both leads in V"], answer: 1, explain: "Never measure continuity or resistance on a live circuit." },
      { id: "t4", q: "The prove-test-prove sequence is:", choices: ["Test the circuit, then put the meter away", "Prove the tester on a known live source, test the circuit, prove the tester again", "Tap the meter on the boot twice", "Read the breaker, then touch the wire"], answer: 1, explain: "Prove, test, prove keeps a dead tester from fooling you." },
      { id: "t5", q: "If you do not know how to take a reading, you should:", choices: ["Guess and write a number down", "Ask the foreman", "Use the tick tracer and call it good", "Turn every breaker off"], answer: 1, explain: "Ask. Do not guess." },
      { id: "t6", q: "Lineman's pliers are mainly for:", choices: ["Measuring voltage", "Twisting, cutting, and pulling", "Stripping only 10 AWG", "Bending EMT exclusively"], answer: 1, explain: "Lineman's are the everyday twist, cut, and pull tool." },
    ],
  },
  {
    id: "wire",
    number: 3,
    title: "Wire and cable",
    recap: "14 AWG with 15A, 12 AWG with 20A. Read the jacket. White is neutral, bare or green is ground. Never put 14 AWG on a 20A breaker.",
    topicId: "wire",
    quiz: [
      { id: "w1", q: "12/2 w/ground means:", choices: ["Twelve wires, two grounds", "Two insulated 12 AWG conductors plus a ground", "14 AWG on a 20A breaker", "A 12-foot cable with 2 outlets"], answer: 1, explain: "Size 12, two insulated wires (usually black and white), plus a bare ground." },
      { id: "w2", q: "14 AWG is protected at:", choices: ["20 amps", "15 amps", "30 amps", "Any breaker that fits"], answer: 1, explain: "14 AWG goes with a 15A breaker (NEC 240.4(D))." },
      { id: "w3", q: "May you put 14 AWG on a 20A breaker?", choices: ["Yes, if the run is short", "Yes, in kitchens only", "No", "Yes, if you double the cable"], answer: 2, explain: "Never. 14 AWG cannot be protected at 20A." },
      { id: "w4", q: "A white insulated conductor is usually the:", choices: ["Hot", "Neutral", "Equipment ground", "Traveler only, always"], answer: 1, explain: "White or gray is the neutral unless the foreman has you re-identify it." },
      { id: "w5", q: "A bare or green conductor is the:", choices: ["Neutral", "Hot", "Equipment ground — never use it as a neutral", "Spare"], answer: 2, explain: "Ground is not a neutral." },
      { id: "w6", q: "Kitchen small-appliance circuits are typically:", choices: ["15A with 14 AWG", "20A with 12 AWG", "30A with 10 AWG", "Any leftover 14/2"], answer: 1, explain: "Those are 20A circuits, so they get 12 AWG." },
      { id: "w7", q: "14/3 or 12/3 is often used for:", choices: ["A bare ground only", "3-way switches (black, red, white, plus ground)", "Service entrance", "Speaker wire"], answer: 1, explain: "The extra insulated conductor (usually red) is why 3-wire cable is used on 3-ways." },
      { id: "w8", q: "On Sharma area circuits (lights, fans, general receptacles), the usual pairing is:", choices: ["12 AWG on 15A", "14 AWG on 15A", "14 AWG on 20A", "10 AWG on 15A"], answer: 1, explain: "Area circuits are 15A, so they use 14 AWG." },
    ],
  },
  {
    id: "boxes",
    number: 4,
    title: "Boxes and devices",
    recap: "Boxes stay accessible. Fans need a fan-rated box. Brass is hot, silver is neutral, green is ground. Don't force a packed box.",
    topicId: "roughin",
    quiz: [
      { id: "b1", q: "May you bury a junction in a wall or ceiling?", choices: ["Yes, if you tape it well", "Yes, in insulation only", "No — boxes and splices must stay accessible", "Yes, above a tub"], answer: 2, explain: "NEC 314.29: junctions stay accessible." },
      { id: "b2", q: "A ceiling fan must be mounted to:", choices: ["Any plastic ceiling box", "A box listed for ceiling-fan support", "A nail in the joist", "A mud ring alone"], answer: 1, explain: "A regular ceiling box is not enough." },
      { id: "b3", q: "On a receptacle, the brass screw is for the:", choices: ["Neutral", "Ground", "Hot", "Traveler only"], answer: 2, explain: "Brass = hot, silver = neutral, green = ground." },
      { id: "b4", q: "The silver screw is for the:", choices: ["Hot", "Neutral", "Ground", "Cable clamp"], answer: 1, explain: "Silver is the neutral." },
      { id: "b5", q: "If a box is packed tight, you should:", choices: ["Force the device in anyway", "Use a bigger box or ask the foreman", "Leave the ground out to make room", "Hide a splice behind the drywall"], answer: 1, explain: "Box fill matters (NEC 314.16). Don't force it." },
      { id: "b6", q: "On Sharma jobs, GFCI protection for receptacles comes from:", choices: ["A GFCI receptacle at the first outlet", "A dual-function breaker in the panel", "A GFCI plug on the tool cord", "The meter-main only"], answer: 1, explain: "Sharma standard is dual-function AFCI/GFCI breakers in the panel — not GFCI receptacles — unless the plan or foreman says otherwise." },
    ],
  },
  {
    id: "roughin",
    number: 5,
    title: "Rough-in basics",
    recap: "Wall receptacles are 18 inches to the bottom of the box when plans are silent. Switches are 48 inches to center. Counters are per plan or foreman. Copper 14/15 and 12/20. Never land a 15A home run in a bathroom box. Staple within 12 inches (8 if the plastic box has no clamp) and every 4½ feet.",
    topicId: "roughin",
    quiz: [
      { id: "r1", q: "When the plans do not specify, wall receptacles go:", choices: ["12 inches to center", "18 inches to the bottom of the box", "24 inches to center", "Whatever looks right"], answer: 1, explain: "18 inches to the bottom of the box, unless the plans say otherwise." },
      { id: "r2", q: "On Sharma jobs, switches go:", choices: ["48 inches to center", "42 inches to center", "52 inches to center", "Any height that looks right"], answer: 0, explain: "Sharma standard is 48 inches to the center of the box. If the plan shows a different height, the plan wins." },
      { id: "r3", q: "Counter receptacle height is:", choices: ["8 inches above the counter, always", "18 inches to the bottom of the box", "Per plan or foreman — no number", "The same as a wall receptacle"], answer: 2, explain: "Counters have no default height in this guide." },
      { id: "r4", q: "NM cable at a typical box must be secured within:", choices: ["3 feet", "12 inches (8 inches if the plastic box has no clamp)", "6 feet", "Only at mid-span"], answer: 1, explain: "NEC 334.30: 12 inches normally, 8 inches when the nonmetallic box has no clamp. Also support every 4½ feet." },
      { id: "r5", q: "A steel nail plate is required when a hole or notch is closer than:", choices: ["3 inches to the face of the framing", "1¼ inch to the face of the framing", "6 inches to the sole plate", "Any time you drill a stud"], answer: 1, explain: "NEC 300.4: protect when closer than 1¼ inch." },
      { id: "r6", q: "If a truss is in the way, you should:", choices: ["Cut a notch and keep moving", "Drill a large hole through the peak", "Stop and tell the foreman — never cut a truss on your own", "Bend the cable around and staple to the truss web however it fits"], answer: 2, explain: "Never cut or alter a truss without approval." },
      { id: "r7", q: "Staples should be:", choices: ["As tight as possible, to bite the copper", "Snug, without cutting the jacket", "Optional if the cable is short", "Shared freely, two cables under any staple"], answer: 1, explain: "A tight staple can damage the insulation. Use a staple listed for stacked cables if you stack them." },
      { id: "r8", q: "Rough-in happens:", choices: ["After the paint dries", "After framing and before insulation and drywall", "Only at final inspection", "After the homeowner moves in"], answer: 1, explain: "Boxes and cable go in while the walls are open." },
      { id: "r9", q: "A 15A home run should:", choices: ["Always land in the bathroom vanity box", "Land in the first box outside the bath, never in a bathroom box", "Be spliced onto the 20A bath circuit", "Skip the bath hall entirely"], answer: 1, explain: "Never land a 15A home run in a bathroom box." },
      { id: "r10", q: "On Sharma jobs, the kitchen refrigerator:", choices: ["Always gets its own dedicated circuit", "Rides on one of the 20A small-appliance circuits unless the plan says otherwise", "Is wired with 14 AWG on 15A", "Shares the outdoor outlet circuit"], answer: 1, explain: "The fridge shares a small-appliance circuit. Those circuits must not feed outdoor outlets." },
      { id: "r11", q: "Branch-circuit wire pairing is:", choices: ["10 AWG on 20A and 12 AWG on 15A for both wires", "Copper 14 AWG on 15A / 12 AWG on 20A; CCA 12 AWG on 15A / 10 AWG on 20A", "Any size if the run is short", "12 AWG on every breaker"], answer: 1, explain: "Copper: 14 AWG with 15A, 12 AWG with 20A. CCA sizes one AWG up: 12 AWG with 15A, 10 AWG with 20A. The lead decides which wire the job gets; never backstab." },
      { id: "r12", q: "A smoke-alarm box should be:", choices: ["A round fan box", "A 4-inch fan-rated box", "A 1-gang nail-on box — not a round box", "Omitted until trim"], answer: 2, explain: "Smoke and CO get a 1-gang nail-on box, not a round box." },
    ],
  },
  {
    id: "trim",
    number: 6,
    title: "Trim-out basics",
    recap: "Hook wires clockwise. Brass hot, silver neutral, green ground. Leave a service loop. Test polarity. Official photos go in the crew app.",
    topicId: "trim",
    quiz: [
      { id: "tr1", q: "A hook around a screw terminal should go:", choices: ["Counter-clockwise, so it springs off", "Clockwise, so tightening closes the hook", "Straight under the screw, no hook", "Around the ground screw only"], answer: 1, explain: "Tightening a clockwise hook pulls the wire in, not out." },
      { id: "tr2", q: "Brass, silver, and green screws are for:", choices: ["Neutral, hot, ground", "Hot, neutral, ground", "Ground, hot, neutral", "Travelers only"], answer: 1, explain: "Brass is hot, silver is neutral, green is ground." },
      { id: "tr3", q: "A service loop is:", choices: ["A loop of leftover cable in the attic", "Extra wire in the box so the device can come out later", "A lockout tag", "A GFCI test button"], answer: 1, explain: "Leave enough slack in the box for future service." },
      { id: "tr4", q: "Push-in 'stab' connections on a device are:", choices: ["Always preferred", "Fine on 20A circuits only", "Only OK if the device is listed for them — prefer screws or listed clamps", "Required by Code"], answer: 2, explain: "Don't stab unless the device is listed for it." },
      { id: "tr5", q: "After devices are in, you should:", choices: ["Leave without testing", "Test polarity and ground as the foreman directs", "Paint the plates", "Turn every breaker to trip"], answer: 1, explain: "Test the work. Leave the house clean." },
      { id: "tr6", q: "Trim-out is done:", choices: ["Before the drywall", "After drywall and paint", "Only in the panel", "At the permit office"], answer: 1, explain: "Devices and plates go in after the walls are finished." },
    ],
  },
  {
    id: "gfci",
    number: 7,
    title: "GFCI / AFCI concepts",
    recap: "GFCI is shock protection. AFCI is fire protection from arcs. Sharma's usual standard is dual-function breakers. Never bypass a trip.",
    topicId: "gfci",
    quiz: [
      { id: "g1", q: "A GFCI is meant to protect:", choices: ["The utility transformer", "People from shock", "Only 240V equipment", "The trusses"], answer: 1, explain: "GFCI watches for current that is not coming back on the neutral." },
      { id: "g2", q: "An AFCI is meant to protect against:", choices: ["Low water pressure", "Fire from dangerous arcing", "A dead battery in a smoke alarm", "Over-tightened plates"], answer: 1, explain: "AFCI looks for arcing that can start a fire." },
      { id: "g3", q: "If a GFCI or AFCI trips, you should:", choices: ["Bypass it so the crew can finish", "Reset it repeatedly until it holds", "Tell the foreman and not bypass it", "Tape the test button down"], answer: 2, explain: "A trip is a warning. Never bypass it." },
      { id: "g4", q: "A dual-function breaker provides:", choices: ["AFCI only", "GFCI only", "Both AFCI and GFCI", "Whole-house surge only"], answer: 2, explain: "Both protections in one breaker." },
      { id: "g5", q: "On Sharma new houses, the usual standard is:", choices: ["GFCI receptacles at every outlet", "Dual-function breakers, unless the plan or foreman says otherwise", "No GFCI in kitchens", "AFCI receptacles only"], answer: 1, explain: "Company practice is dual-function breakers, not a house full of GFCI receptacles, unless you are told otherwise." },
      { id: "g6", q: "GFCI protection is typically required in:", choices: ["Only the attic", "Kitchens, baths, garages, outdoors, and laundry, among other wet or damp areas", "Closets only", "The doorbell circuit only"], answer: 1, explain: "Follow NEC 210.8, the plan, and the foreman." },
      { id: "g7", q: "The Code article most often cited for GFCI in dwellings is:", choices: ["NEC 110.26", "NEC 210.8", "NEC 680 only", "NEC 500"], answer: 1, explain: "210.8 covers GFCI protection of receptacles. 210.12 covers AFCI." },
    ],
  },
  {
    id: "panel",
    number: 8,
    title: "Panel awareness",
    recap: "Helpers do not remove a deadfront or work in an energized panel. Never touch the bus. Don't leave a panel open and walk away.",
    topicId: "safety",
    quiz: [
      { id: "p1", q: "A helper should:", choices: ["Remove the deadfront to look around", "Land breakers alone if the main is on", "Not remove the deadfront or work in an energized panel", "Stand on the panel can for a better reach"], answer: 2, explain: "Stay out of the panel unless the foreman has a safe task for you." },
      { id: "p2", q: "Bus bars, lugs, and service conductors are:", choices: ["Safe to touch if you are barefoot", "Off limits — never touch them", "OK to lean tools on", "Painted, so they are insulated"], answer: 1, explain: "Those parts can be live and can kill." },
      { id: "p3", q: "If a panel is open, you should:", choices: ["Leave it open and go to lunch", "Set your drink on the can", "Not leave it open and walk away", "Store leftover wire inside it"], answer: 2, explain: "Don't leave a panel open. Don't set drinks or tools on it." },
      { id: "p4", q: "If you are not sure a panel task is for you:", choices: ["Try one lug and see", "Stop and ask the foreman", "Watch a video mid-job and then try", "Have another helper watch"], answer: 1, explain: "Stop and ask." },
      { id: "p5", q: "Which of these is a reasonable helper task?", choices: ["Photograph a closed panel if asked, or fetch tools", "Remove the deadfront", "Tighten the main lugs", "Touch the bus with a tick tracer held in both hands"], answer: 0, explain: "Closed-panel photos, carrying materials, and staying back are appropriate. Live panel work is not." },
    ],
  },
  {
    id: "jobsite",
    number: 9,
    title: "Jobsite and photos",
    recap: "Be respectful, clean up, and tell the foreman if something gets damaged. Every phase gets photos. Official shots go through the crew app so they are watermarked.",
    topicId: "trim",
    quiz: [
      { id: "j1", q: "Official job photos should be taken:", choices: ["On a personal chat app with no watermark", "In the crew app, so they get the company watermark", "Only at the end of the whole job", "Never, because of privacy"], answer: 1, explain: "The crew app watermarks photos with the company, licenses, date and time, and address." },
      { id: "j2", q: "How often should the crew photograph the work?", choices: ["Never, unless there is a complaint", "Only if the builder asks", "Every phase — rough-in, inspections, trim, and final", "Once a year"], answer: 2, explain: "Every phase gets photos." },
      { id: "j3", q: "The watermark on crew-app photos includes:", choices: ["Prices and the helper's Social Security number", "Company name, license numbers, date and time (Eastern), and the address", "The homeowner's phone number", "A stock photo of a house"], answer: 1, explain: "Company, licenses, time, and address — no prices." },
      { id: "j4", q: "If you damage a counter, floor, or someone else's work:", choices: ["Hide it and hope no one notices", "Tell the foreman immediately", "Blame the painter", "Post it in a group chat and move on"], answer: 1, explain: "Tell the foreman right away." },
      { id: "j5", q: "Cable scraps and screws should be:", choices: ["Left for the next trade", "Cleaned up — copper scraps go where the foreman directs", "Swept into a wall cavity", "Piled on the panel"], answer: 1, explain: "Leave the house clean. Save copper as the foreman directs." },
      { id: "j6", q: "Unwatermarked personal photos of the job are:", choices: ["The official record", "Fine to send to the builder as the job record", "Not the official job record — use the crew app", "Required by the inspector"], answer: 2, explain: "The official record is the watermarked crew-app photos." },
    ],
  },

  {
    id: "roughin-rooms",
    number: 10,
    title: "Residential rough-in",
    recap: "Room-by-room rough-in: kitchen small-appliance rules, 240V boxes, smoke and CO, attic routing, panel labels, and HVAC service receptacles.",
    topicId: "roughin",
    quiz: [
      { id: "rr1", q: "How many 20A kitchen small-appliance circuits does a house need at least?", choices: ["One", "Two", "Four area circuits", "None if the fridge is gas"], answer: 1, explain: "At least two 20A small-appliance circuits (NEC 210.11(C)(1)), with 12 AWG copper." },
      { id: "rr2", q: "May a kitchen small-appliance circuit feed an outdoor outlet?", choices: ["Yes, it is convenient", "Yes, if it is GFCI", "No (NEC 210.52(B)(2))", "Only at the back door"], answer: 2, explain: "Small-appliance circuits must not feed outdoor outlets." },
      { id: "rr3", q: "Which 240V loads get a receptacle box on Sharma jobs?", choices: ["Water heater, condenser, and air handler", "The dryer, and the range when the plan uses a receptacle (sometimes surface-mount)", "Every 240V appliance", "Only the air handler"], answer: 1, explain: "Water heater, AC, and air handler are hardwired or landed at a disconnect." },
      { id: "rr4", q: "A CO alarm is required, within 10 ft of bedrooms, when:", choices: ["Every house, no exceptions", "The house has a fuel-burning appliance or an attached garage", "Only if the buyer pays extra", "Only in high-rise condos"], answer: 1, explain: "F.S. 553.885 and FBC R315: fuel-burning appliances or an attached garage." },
      { id: "rr5", q: "How does Sharma usually interconnect smoke alarms?", choices: ["Each alarm on its own 20A circuit", "One power feed into a single detector on an unswitched 15A AFCI area circuit; the others daisy-chain on 14/3", "Battery only, no interconnect", "Wireless only, no box"], answer: 1, explain: "One feed, 14/3 interconnect, unswitched AFCI area circuit." },
      { id: "rr6", q: "In the attic, home runs and 240V runs should:", choices: ["Wander from truss to truss to use leftover cable", "Go diagonal, one clean line from the panel to the drop", "Always run on the bottom chord in a tight coil", "Be stapled to the drywall after it is up"], answer: 1, explain: "Home runs and 240V go diagonal. Other attic runs follow the trusses." },
      { id: "rr7", q: "An HVAC service receptacle must be:", choices: ["In the street", "Within 25 ft of the unit, on the same level (NEC 210.63)", "Inside the condenser disconnect", "Omitted if the unit has a whip"], answer: 1, explain: "125V receptacle within 25 ft, same level. Attic units also need a light switched at the entry." },
      { id: "rr8", q: "Home runs should be labelled:", choices: ["After the inspector leaves", "In a notebook only", "At the panel, with circuit number and room, before the cable goes into the can", "With the helper's first name only"], answer: 2, explain: "Label to match the panel schedule, on the sheath, before the cable enters the can. One cable per connector." },
      { id: "rr9", q: "A panel may not be installed:", choices: ["On a garage wall", "In a bathroom, a clothes closet, or over steps", "In a laundry room", "On the first floor"], answer: 1, explain: "NEC 240.24(D), (E), and (F)." },
      { id: "rr10", q: "Low-voltage cable should:", choices: ["Be dropped into the nearest power box to save time", "Stay out of power boxes and at least 2 in from power wiring, unless a listed barrier is used", "Replace NM for lighting", "Never get a nail plate"], answer: 1, explain: "Keep 2 inches of separation (725.136, 800.133). Nail plates still apply." },
      { id: "rr11", q: "An island or under-slab kitchen feed must be:", choices: ["Regular NM-B, if the run is short", "UF, or THWN-2 in conduit — never NM", "14/2 on a 20A breaker", "Any leftover 12/3"], answer: 1, explain: "Never NM in underground or under-slab conduit (300.9, 334.12(B)(4))." },
      { id: "rr12", q: "The condenser / AC breaker should be:", choices: ["A GFCI breaker, always", "A standard 2-pole sized to the nameplate MOCP — never GFCI", "A 15A single-pole", "Any leftover 20A"], answer: 1, explain: "Condensers get a standard 2-pole to MOCP, no GFCI. Size comes from the nameplate, not a guess." },
      { id: "rr13", q: "Within 6 ft of a scuttle that has no permanent stairs, how should you run NM?", choices: ["Loose across the tops of the joists, with guard strips", "Along the sides of the joists or framing, or through bored holes — never loose across the tops", "Leave a 6 ft no-wire zone and move devices", "Only on top of the joists if they are marked"], answer: 1, explain: "NEC 320.23(A) and (B) via 334.23: run along the sides or through bored holes. Do not use guard strips as the method, do not create a no-wire zone, and do not move devices." },
      { id: "rr14", q: "An island with 20 sq ft of countertop needs at least how many receptacles under NEC 2020 210.52(C)(2)?", choices: ["One, because it is larger than 24 in by 12 in", "Two — one for the first 9 sq ft, and one more for the remaining 11 sq ft (a fraction of 18 sq ft)", "Three, one per 6 sq ft", "None if the walls already have receptacles"], answer: 1, explain: "At least one receptacle for the first 9 sq ft or fraction, and one more for every additional 18 sq ft or fraction. 20 sq ft is 9 plus 11, and 11 is a fraction of 18, so two receptacles." },
    ],
  },
];

export function publicModules() {
  return MODULES.map((m) => ({
    id: m.id,
    number: m.number,
    title: m.title,
    recap: m.recap,
    topicId: m.topicId,
    questions: m.quiz.length,
    quiz: m.quiz.map((q) => ({ id: q.id, q: q.q, choices: q.choices })),
  }));
}

export function gradeQuiz(moduleId, answers) {
  const mod = MODULES.find((m) => m.id === moduleId);
  if (!mod) return { error: "Unknown module." };
  const results = [];
  let correct = 0;
  for (const q of mod.quiz) {
    const picked = Number(answers && answers[q.id]);
    const ok = picked === q.answer;
    if (ok) correct += 1;
    results.push({
      id: q.id,
      q: q.q,
      choices: q.choices,
      picked: Number.isInteger(picked) ? picked : null,
      answer: q.answer,
      ok,
      explain: q.explain,
    });
  }
  const total = mod.quiz.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return { moduleId, title: mod.title, correct, total, pct, passed: pct >= PASS_PCT, results };
}

export function moduleById(id) {
  return MODULES.find((m) => m.id === id) || null;
}
