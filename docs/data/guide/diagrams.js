/* Diagram SVGs extracted verbatim from the Rough-In Guide app (presentation assets, not lesson text). */
export function diagram(id) {
  const svg = {
    "wire-pair": `<svg viewBox="0 0 360 150" role="img" aria-label="14 AWG with 15 amp, 12 AWG with 20 amp">
      <rect x="8" y="20" width="150" height="110" rx="14" fill="#fff" stroke="#132a5c"/>
      <text x="83" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#132a5c" font-family="system-ui">14 AWG</text>
      <text x="83" y="78" text-anchor="middle" font-size="28" font-weight="800" fill="#132a5c" font-family="system-ui">15A</text>
      <text x="83" y="104" text-anchor="middle" font-size="12" fill="#64748b" font-family="system-ui">area circuits</text>
      <rect x="202" y="20" width="150" height="110" rx="14" fill="#132a5c"/>
      <text x="277" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#F0A43C" font-family="system-ui">12 AWG</text>
      <text x="277" y="78" text-anchor="middle" font-size="28" font-weight="800" fill="#fff" font-family="system-ui">20A</text>
      <text x="277" y="104" text-anchor="middle" font-size="12" fill="#c7d2fe" font-family="system-ui">kitchen, laundry, bath, garage</text>
    </svg>`,
    colors: `<svg viewBox="0 0 360 120" role="img" aria-label="Cable colors: black and red hot, white neutral, bare ground">
      <rect x="10" y="36" width="340" height="48" rx="16" fill="#F0A43C"/>
      <rect x="28" y="48" width="70" height="24" rx="8" fill="#111"/>
      <rect x="108" y="48" width="70" height="24" rx="8" fill="#b91c1c"/>
      <rect x="188" y="48" width="70" height="24" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
      <rect x="268" y="48" width="70" height="24" rx="8" fill="#cbd5e1"/>
      <text x="63" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">HOT</text>
      <text x="143" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">HOT</text>
      <text x="223" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">NEUTRAL</text>
      <text x="303" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">GROUND</text>
      <text x="63" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">black</text>
      <text x="143" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">red</text>
      <text x="223" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">white</text>
      <text x="303" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">bare / green</text>
    </svg>`,
    heights: `<svg viewBox="0 0 360 220" role="img" aria-label="Wall receptacle 18 inches to the bottom of the box; switches 48 inches to center">
      <rect x="55" y="10" width="150" height="190" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="55" y="200" width="150" height="10" fill="#94a3b8"/>
      <rect x="103" y="30" width="54" height="32" rx="4" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <text x="130" y="44" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">SWITCH</text>
      <line x1="103" y1="46" x2="157" y2="46" stroke="#F0A43C" stroke-width="2"/>
      <rect x="112" y="140" width="36" height="26" rx="2" fill="#132a5c"/>
      <line x1="222" y1="200" x2="222" y2="166" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="200" x2="230" y2="200" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="166" x2="230" y2="166" stroke="#F0A43C" stroke-width="3"/>
      <text x="238" y="180" font-size="14" font-weight="800" fill="#132a5c" font-family="system-ui">18"</text>
      <text x="238" y="194" font-size="9" fill="#64748b" font-family="system-ui">to BOTTOM of box</text>
      <line x1="292" y1="200" x2="292" y2="46" stroke="#F0A43C" stroke-width="3"/>
      <line x1="284" y1="200" x2="300" y2="200" stroke="#F0A43C" stroke-width="3"/>
      <line x1="284" y1="46" x2="300" y2="46" stroke="#F0A43C" stroke-width="3"/>
      <text x="308" y="118" font-size="14" font-weight="800" fill="#132a5c" font-family="system-ui">48"</text>
      <text x="308" y="132" font-size="9" fill="#64748b" font-family="system-ui">to center</text>
    </svg>`,
    "gfci-afci": `<svg viewBox="0 0 360 130" role="img" aria-label="GFCI protects people, AFCI protects against fire from arcs">
      <rect x="8" y="10" width="164" height="110" rx="14" fill="#fff" stroke="#132a5c"/>
      <circle cx="90" cy="48" r="20" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>
      <path d="M80 48 l6 6 12-14" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <text x="90" y="86" text-anchor="middle" font-size="16" font-weight="800" fill="#132a5c" font-family="system-ui">GFCI</text>
      <text x="90" y="106" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">protects people</text>
      <rect x="188" y="10" width="164" height="110" rx="14" fill="#132a5c"/>
      <path d="M250 30 l8 18 -14 4 22 30" fill="none" stroke="#F0A43C" stroke-width="3" stroke-linecap="round"/>
      <text x="270" y="86" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" font-family="system-ui">AFCI</text>
      <text x="270" y="106" text-anchor="middle" font-size="11" fill="#c7d2fe" font-family="system-ui">protects from fire</text>
    </svg>`,
    meter: `<svg viewBox="0 0 360 140" role="img" aria-label="Multimeter, black lead in COM, red lead in V">
      <rect x="110" y="12" width="140" height="116" rx="10" fill="#132a5c"/>
      <rect x="122" y="24" width="116" height="40" rx="4" fill="#d1fae5"/>
      <text x="180" y="50" text-anchor="middle" font-size="16" font-weight="800" fill="#132a5c" font-family="system-ui">120.3 V</text>
      <circle cx="140" cy="90" r="10" fill="#111"/><text x="140" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">COM</text>
      <circle cx="180" cy="90" r="10" fill="#b91c1c"/><text x="180" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">V</text>
      <circle cx="220" cy="90" r="10" fill="#334155"/><text x="220" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">A</text>
      <path d="M140 100 C 80 130, 40 80, 28 120" stroke="#111" stroke-width="4" fill="none"/>
      <path d="M180 100 C 250 130, 300 80, 332 120" stroke="#b91c1c" stroke-width="4" fill="none"/>
    </svg>`,
    prove: `<svg viewBox="0 0 360 110" role="img" aria-label="Prove, test, prove">
      <rect x="8" y="18" width="100" height="74" rx="12" fill="#132a5c"/>
      <text x="58" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#F0A43C" font-family="system-ui">1. PROVE</text>
      <text x="58" y="70" text-anchor="middle" font-size="10" fill="#c7d2fe" font-family="system-ui">known live</text>
      <rect x="130" y="18" width="100" height="74" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="180" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">2. TEST</text>
      <text x="180" y="70" text-anchor="middle" font-size="10" fill="#64748b" font-family="system-ui">the circuit</text>
      <rect x="252" y="18" width="100" height="74" rx="12" fill="#132a5c"/>
      <text x="302" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#F0A43C" font-family="system-ui">3. PROVE</text>
      <text x="302" y="70" text-anchor="middle" font-size="10" fill="#c7d2fe" font-family="system-ui">tester again</text>
    </svg>`,
    panel: `<svg viewBox="0 0 360 160" role="img" aria-label="Stay back from an open panel">
      <rect x="90" y="8" width="180" height="144" rx="8" fill="#1e293b"/>
      <rect x="104" y="22" width="152" height="116" rx="4" fill="#0f172a"/>
      <rect x="112" y="32" width="50" height="10" fill="#64748b"/>
      <rect x="112" y="48" width="20" height="14" fill="#F0A43C"/>
      <rect x="136" y="48" width="20" height="14" fill="#F0A43C"/>
      <rect x="198" y="48" width="48" height="80" fill="#334155"/>
      <circle cx="180" cy="80" r="28" fill="none" stroke="#dc2626" stroke-width="6"/>
      <path d="M162 98 L198 62" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
      <text x="180" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="#991b1b" font-family="system-ui">STAY BACK</text>
    </svg>`,
    staple: `<svg viewBox="0 0 360 140" role="img" aria-label="Staple within 12 inches of the box and every 4 and a half feet">
      <rect x="20" y="70" width="14" height="50" fill="#cbd5e1"/>
      <rect x="40" y="86" width="28" height="22" fill="#132a5c"/>
      <path d="M54 86 C 80 40, 200 40, 330 70" fill="none" stroke="#F0A43C" stroke-width="6"/>
      <path d="M100 52 c 0 10 16 10 16 0" stroke="#132a5c" stroke-width="3" fill="none"/>
      <path d="M220 48 c 0 10 16 10 16 0" stroke="#132a5c" stroke-width="3" fill="none"/>
      <line x1="54" y1="120" x2="108" y2="120" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#166534" font-family="system-ui">12" (or 8")</text>
      <text x="230" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">every 4½ ft</text>
    </svg>`,
    nailplate: `<svg viewBox="0 0 360 150" role="img" aria-label="Nail plate when a hole is closer than one and one quarter inches to the face">
      <rect x="130" y="8" width="44" height="134" fill="#d6c7a1" stroke="#8b7355"/>
      <circle cx="152" cy="70" r="9" fill="#0f172a"/>
      <rect x="168" y="50" width="8" height="44" fill="#94a3b8" stroke="#334155"/>
      <line x1="176" y1="70" x2="250" y2="70" stroke="#F0A43C" stroke-width="2"/>
      <text x="250" y="66" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">if &lt; 1¼"</text>
      <text x="250" y="84" font-size="12" fill="#64748b" font-family="system-ui">add a nail plate</text>
    </svg>`,
    device: `<svg viewBox="0 0 360 140" role="img" aria-label="Receptacle screws: brass hot, silver neutral, green ground">
      <rect x="130" y="10" width="100" height="120" rx="8" fill="#f8fafc" stroke="#132a5c" stroke-width="2"/>
      <circle cx="155" cy="48" r="8" fill="none" stroke="#132a5c" stroke-width="3"/>
      <circle cx="205" cy="48" r="8" fill="none" stroke="#132a5c" stroke-width="3"/>
      <rect x="172" y="78" width="16" height="10" rx="2" fill="#132a5c"/>
      <circle cx="122" cy="48" r="7" fill="#b45309"/><text x="70" y="53" text-anchor="end" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">brass · hot</text>
      <circle cx="238" cy="48" r="7" fill="#94a3b8"/><text x="252" y="53" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">silver · neutral</text>
      <circle cx="180" cy="118" r="7" fill="#15803d"/><text x="194" y="123" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">green · ground</text>
    </svg>`,
    "ri-order": `<svg viewBox="0 0 360 110" role="img" aria-label="Walk, set boxes, pull, staple, inspect">
      <rect x="8" y="22" width="80" height="66" rx="12" fill="#132a5c"/>
      <text x="48" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#F0A43C" font-family="system-ui">1. WALK</text>
      <text x="48" y="68" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">mark boxes</text>
      <rect x="100" y="22" width="80" height="66" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="140" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#132a5c" font-family="system-ui">2. SET</text>
      <text x="140" y="68" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">boxes + cans</text>
      <rect x="192" y="22" width="80" height="66" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="232" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#132a5c" font-family="system-ui">3. PULL</text>
      <text x="232" y="68" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">staple + plate</text>
      <rect x="284" y="22" width="68" height="66" rx="12" fill="#132a5c"/>
      <text x="318" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#F0A43C" font-family="system-ui">4. WALK</text>
      <text x="318" y="68" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">then inspect</text>
    </svg>`,
    "ri-attic": `<svg viewBox="0 0 360 140" role="img" aria-label="Home runs go diagonal in the attic; other runs follow the trusses">
      <path d="M20 110 L180 20 L340 110" fill="none" stroke="#cbd5e1" stroke-width="6"/>
      <path d="M60 90 L80 50 L100 90 L120 50 L140 90 L160 50 L180 90 L200 50 L220 90 L240 50 L260 90 L280 50 L300 90" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <path d="M70 100 L250 40" stroke="#F0A43C" stroke-width="4" stroke-linecap="round"/>
      <text x="180" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">home runs go diagonal</text>
    </svg>`,
    "ri-smoke": `<svg viewBox="0 0 360 130" role="img" aria-label="Smoke in each bedroom, outside sleeping, and on each story">
      <rect x="16" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="61" cy="48" r="10" fill="#F0A43C"/>
      <text x="61" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">bedroom</text>
      <rect x="135" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="180" cy="48" r="10" fill="#F0A43C"/>
      <text x="180" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">outside sleeping</text>
      <rect x="254" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="299" cy="48" r="10" fill="#F0A43C"/>
      <text x="299" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">each story</text>
      <text x="180" y="118" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">1-gang nail-on boxes, 14/3 interconnect</text>
    </svg>`,
    photos: `<svg viewBox="0 0 360 140" role="img" aria-label="Crew app photo with a watermark">
      <rect x="90" y="8" width="180" height="124" rx="16" fill="#0f172a"/>
      <rect x="102" y="20" width="156" height="100" rx="8" fill="#334155"/>
      <rect x="102" y="84" width="156" height="36" fill="#132a5ccc"/>
      <text x="180" y="100" text-anchor="middle" font-size="9" fill="#fff" font-family="system-ui">Sharma Electric &amp; HVAC</text>
      <text x="180" y="114" text-anchor="middle" font-size="8" fill="#F0A43C" font-family="system-ui">Lic. · date/time ET · address</text>
    </svg>`,
    "ri-kitchen": `<svg viewBox="0 0 360 150" role="img" aria-label="Kitchen counter receptacles: no point on the counter more than 24 inches from a receptacle">
      <rect x="20" y="82" width="230" height="48" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <rect x="14" y="74" width="242" height="9" fill="#132a5c"/>
      <rect x="66" y="42" width="24" height="18" rx="2" fill="#132a5c"/>
      <rect x="176" y="42" width="24" height="18" rx="2" fill="#132a5c"/>
      <line x1="78" y1="26" x2="188" y2="26" stroke="#F0A43C" stroke-width="3"/>
      <line x1="78" y1="20" x2="78" y2="32" stroke="#F0A43C" stroke-width="3"/>
      <line x1="188" y1="20" x2="188" y2="32" stroke="#F0A43C" stroke-width="3"/>
      <text x="133" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">no point &gt; 24 in from a receptacle</text>
      <rect x="272" y="52" width="72" height="78" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <circle cx="292" cy="74" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="324" cy="74" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="292" cy="102" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="324" cy="102" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">counters ride on two 20A small-appliance circuits</text>
    </svg>`,
    "ri-bath": `<svg viewBox="0 0 360 150" role="img" aria-label="Bath: receptacle within 3 feet of each basin, none in the tub or shower zone">
      <rect x="14" y="42" width="132" height="72" rx="16" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <path d="M28 56 L132 100 M132 56 L28 100" stroke="#dc2626" stroke-width="3"/>
      <text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b" font-family="system-ui">TUB ZONE — NO RECEPTACLE</text>
      <rect x="228" y="78" width="100" height="14" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="268" y="92" width="10" height="30" fill="#94a3b8"/>
      <rect x="238" y="36" width="24" height="18" rx="2" fill="#132a5c"/>
      <line x1="250" y1="66" x2="300" y2="66" stroke="#F0A43C" stroke-width="3"/>
      <text x="252" y="60" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">within 3 ft</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">20A bath circuit · one receptacle at each basin</text>
    </svg>`,
    "ri-bedroom": `<svg viewBox="0 0 360 150" role="img" aria-label="Bedroom wall: no point more than 6 feet from a receptacle; smoke alarm on the ceiling">
      <rect x="30" y="34" width="300" height="86" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="30" y="120" width="300" height="8" fill="#94a3b8"/>
      <circle cx="180" cy="56" r="11" fill="#F0A43C"/>
      <text x="180" y="60" text-anchor="middle" font-size="8" font-weight="800" fill="#132a5c" font-family="system-ui">SMK</text>
      <rect x="62" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="274" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <line x1="74" y1="22" x2="286" y2="22" stroke="#F0A43C" stroke-width="3"/>
      <line x1="74" y1="16" x2="74" y2="28" stroke="#F0A43C" stroke-width="3"/>
      <line x1="286" y1="16" x2="286" y2="28" stroke="#F0A43C" stroke-width="3"/>
      <text x="180" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">no point &gt; 6 ft from a receptacle</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">smoke in every bedroom · fan-rated box at fans</text>
    </svg>`,
    "ri-living": `<svg viewBox="0 0 360 150" role="img" aria-label="Living areas: wall spacing 6 feet, hallway and foyer receptacles">
      <rect x="20" y="34" width="320" height="86" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="20" y="120" width="320" height="8" fill="#94a3b8"/>
      <rect x="150" y="34" width="52" height="86" fill="#fff"/>
      <path d="M150 34 v86 M202 34 v86" stroke="#94a3b8" stroke-width="2"/>
      <text x="176" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b" font-family="system-ui">DOOR</text>
      <rect x="52" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="238" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="300" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <text x="180" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">walls 2 ft + get receptacles · max 6 ft to one</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">halls 10 ft + need one · foyers: each wall 3 ft +</text>
    </svg>`,
    "ri-laundry": `<svg viewBox="0 0 360 150" role="img" aria-label="Laundry: 20 amp washer receptacle and a separate 240 volt dryer run">
      <rect x="40" y="34" width="110" height="96" rx="8" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <circle cx="95" cy="76" r="26" fill="none" stroke="#132a5c" stroke-width="3"/>
      <text x="95" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">WASHER · 20A</text>
      <rect x="210" y="34" width="110" height="96" rx="8" fill="#132a5c"/>
      <circle cx="265" cy="76" r="26" fill="none" stroke="#F0A43C" stroke-width="3"/>
      <text x="265" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">DRYER · 240V</text>
      <text x="180" y="18" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">check the plan: gas or electric dryer?</text>
    </svg>`,
    "ri-garage": `<svg viewBox="0 0 360 170" role="img" aria-label="Garage: one receptacle per car bay, 48 inches to center">
      <rect x="24" y="26" width="140" height="104" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <rect x="196" y="26" width="140" height="104" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <path d="M24 52 h140 M24 78 h140 M24 104 h140 M196 52 h140 M196 78 h140 M196 104 h140" stroke="#94a3b8" stroke-width="2"/>
      <rect x="168" y="70" width="24" height="16" rx="2" fill="#132a5c"/>
      <line x1="180" y1="78" x2="180" y2="86" stroke="#F0A43C" stroke-width="2"/>
      <line x1="150" y1="140" x2="150" y2="78" stroke="#F0A43C" stroke-width="3"/>
      <line x1="142" y1="140" x2="158" y2="140" stroke="#F0A43C" stroke-width="3"/>
      <line x1="142" y1="78" x2="158" y2="78" stroke="#F0A43C" stroke-width="3"/>
      <text x="120" y="118" text-anchor="end" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">48"</text>
      <text x="120" y="132" text-anchor="end" font-size="9" fill="#64748b" font-family="system-ui">to center</text>
      <rect x="24" y="140" width="312" height="8" fill="#94a3b8"/>
      <text x="255" y="162" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">one receptacle per bay · 20A circuit</text>
    </svg>`,
    "ri-exterior": `<svg viewBox="0 0 360 160" role="img" aria-label="Outdoor receptacle 24 inches above grade, front and back of the house">
      <path d="M90 62 L180 14 L270 62" fill="none" stroke="#132a5c" stroke-width="4"/>
      <rect x="106" y="62" width="148" height="66" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="160" y="88" width="38" height="40" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="222" y="96" width="22" height="16" rx="2" fill="#132a5c"/>
      <line x1="20" y1="128" x2="340" y2="128" stroke="#94a3b8" stroke-width="4"/>
      <text x="30" y="122" font-size="10" font-weight="700" fill="#64748b" font-family="system-ui">GRADE</text>
      <line x1="286" y1="128" x2="286" y2="104" stroke="#F0A43C" stroke-width="3"/>
      <line x1="278" y1="128" x2="294" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <line x1="278" y1="104" x2="294" y2="104" stroke="#F0A43C" stroke-width="3"/>
      <text x="302" y="112" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">24"</text>
      <text x="302" y="126" font-size="9" fill="#64748b" font-family="system-ui">above grade</text>
      <text x="180" y="152" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">one at the front, one at the back · weather-ready box</text>
    </svg>`,
    "ri-hvac": `<svg viewBox="0 0 360 150" role="img" aria-label="Condenser: disconnect within sight, service receptacle within 25 feet">
      <rect x="30" y="52" width="104" height="78" rx="8" fill="#132a5c"/>
      <circle cx="82" cy="86" r="26" fill="none" stroke="#F0A43C" stroke-width="3"/>
      <path d="M82 60 v52 M56 86 h52 M64 68 l36 36 M100 68 l-36 36" stroke="#F0A43C" stroke-width="2"/>
      <text x="82" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">CONDENSER</text>
      <rect x="176" y="40" width="34" height="46" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <path d="M186 52 l14 20" stroke="#dc2626" stroke-width="3"/>
      <text x="193" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">DISCONNECT</text>
      <text x="193" y="114" text-anchor="middle" font-size="8" fill="#64748b" font-family="system-ui">within sight</text>
      <rect x="268" y="66" width="24" height="18" rx="2" fill="#132a5c"/>
      <text x="280" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">SERVICE</text>
      <text x="280" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">RECEPTACLE</text>
      <line x1="140" y1="126" x2="262" y2="126" stroke="#F0A43C" stroke-width="2" stroke-dasharray="5 4"/>
      <text x="201" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#132a5c" font-family="system-ui">within 25 ft</text>
      <text x="180" y="18" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">wire + breaker come from the nameplate</text>
    </svg>`,
    "ri-lowvoltage": `<svg viewBox="0 0 360 150" role="img" aria-label="Keep low-voltage cable at least 2 inches from power wiring and out of power boxes">
      <rect x="52" y="40" width="86" height="70" rx="6" fill="#132a5c"/>
      <text x="95" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#F0A43C" font-family="system-ui">POWER</text>
      <text x="95" y="88" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">120V box</text>
      <rect x="222" y="40" width="86" height="70" rx="6" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <text x="265" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#132a5c" font-family="system-ui">DATA / TV</text>
      <text x="265" y="88" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">own box or ring</text>
      <line x1="146" y1="122" x2="214" y2="122" stroke="#F0A43C" stroke-width="3"/>
      <line x1="146" y1="116" x2="146" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="116" x2="214" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <text x="180" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">2 in min</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">label both ends · nail plates still apply</text>
    </svg>`,
    "ri-mistakes": `<svg viewBox="0 0 360 150" role="img" aria-label="Check the classic misses before you call for inspection">
      <rect x="110" y="12" width="140" height="126" rx="8" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="150" y="6" width="60" height="16" rx="6" fill="#132a5c"/>
      <path d="M128 44 l6 6 10-12" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="44" x2="232" y2="44" stroke="#cbd5e1" stroke-width="4"/>
      <path d="M128 72 l6 6 10-12" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="72" x2="232" y2="72" stroke="#cbd5e1" stroke-width="4"/>
      <path d="M128 96 l12 12 M140 96 l-12 12" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="102" x2="232" y2="102" stroke="#cbd5e1" stroke-width="4"/>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">one missed staple or plate fails the whole house</text>
    </svg>`,
  };
  return svg[id] ? `<div class="diagram">${svg[id]}</div>` : "";
}
