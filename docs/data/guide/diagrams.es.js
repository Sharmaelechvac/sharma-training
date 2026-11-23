/* Diagramas SVG extraídos textualmente de la app de la Guía de Rough-In (recursos de presentación, no texto de lección). */
export function diagram(id) {
  const svg = {
    "wire-pair": `<svg viewBox="0 0 360 150" role="img" aria-label="14 AWG con 15 amperios, 12 AWG con 20 amperios">
      <rect x="8" y="20" width="150" height="110" rx="14" fill="#fff" stroke="#132a5c"/>
      <text x="83" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#132a5c" font-family="system-ui">14 AWG</text>
      <text x="83" y="78" text-anchor="middle" font-size="28" font-weight="800" fill="#132a5c" font-family="system-ui">15A</text>
      <text x="83" y="104" text-anchor="middle" font-size="12" fill="#64748b" font-family="system-ui">circuitos de área</text>
      <rect x="202" y="20" width="150" height="110" rx="14" fill="#132a5c"/>
      <text x="277" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#F0A43C" font-family="system-ui">12 AWG</text>
      <text x="277" y="78" text-anchor="middle" font-size="28" font-weight="800" fill="#fff" font-family="system-ui">20A</text>
      <text x="277" y="104" text-anchor="middle" font-size="12" fill="#c7d2fe" font-family="system-ui">cocina, lavandería, baño, garaje</text>
    </svg>`,
    colors: `<svg viewBox="0 0 360 120" role="img" aria-label="Colores del cable: negro y rojo vivos, blanco neutro, desnudo tierra">
      <rect x="10" y="36" width="340" height="48" rx="16" fill="#F0A43C"/>
      <rect x="28" y="48" width="70" height="24" rx="8" fill="#111"/>
      <rect x="108" y="48" width="70" height="24" rx="8" fill="#b91c1c"/>
      <rect x="188" y="48" width="70" height="24" rx="8" fill="#f8fafc" stroke="#94a3b8"/>
      <rect x="268" y="48" width="70" height="24" rx="8" fill="#cbd5e1"/>
      <text x="63" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">VIVO</text>
      <text x="143" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">VIVO</text>
      <text x="223" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">NEUTRO</text>
      <text x="303" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">TIERRA</text>
      <text x="63" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">negro</text>
      <text x="143" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">rojo</text>
      <text x="223" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">blanco</text>
      <text x="303" y="106" text-anchor="middle" font-size="11" fill="#334155" font-family="system-ui">desnudo / verde</text>
    </svg>`,
    heights: `<svg viewBox="0 0 360 220" role="img" aria-label="Receptáculo de pared a 18 pulgadas hasta la parte inferior de la caja; interruptores a 48 pulgadas al centro">
      <rect x="55" y="10" width="150" height="190" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="55" y="200" width="150" height="10" fill="#94a3b8"/>
      <rect x="103" y="30" width="54" height="32" rx="4" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <text x="130" y="44" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">APAGADOR</text>
      <line x1="103" y1="46" x2="157" y2="46" stroke="#F0A43C" stroke-width="2"/>
      <rect x="112" y="140" width="36" height="26" rx="2" fill="#132a5c"/>
      <line x1="222" y1="200" x2="222" y2="166" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="200" x2="230" y2="200" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="166" x2="230" y2="166" stroke="#F0A43C" stroke-width="3"/>
      <text x="238" y="180" font-size="14" font-weight="800" fill="#132a5c" font-family="system-ui">18"</text>
      <text x="238" y="194" font-size="9" fill="#64748b" font-family="system-ui">a la base de la caja</text>
      <line x1="292" y1="200" x2="292" y2="46" stroke="#F0A43C" stroke-width="3"/>
      <line x1="284" y1="200" x2="300" y2="200" stroke="#F0A43C" stroke-width="3"/>
      <line x1="284" y1="46" x2="300" y2="46" stroke="#F0A43C" stroke-width="3"/>
      <text x="308" y="118" font-size="14" font-weight="800" fill="#132a5c" font-family="system-ui">48"</text>
      <text x="308" y="132" font-size="9" fill="#64748b" font-family="system-ui">al centro</text>
    </svg>`,
    "gfci-afci": `<svg viewBox="0 0 360 130" role="img" aria-label="El GFCI protege a las personas, el AFCI protege contra incendios por arcos">
      <rect x="8" y="10" width="164" height="110" rx="14" fill="#fff" stroke="#132a5c"/>
      <circle cx="90" cy="48" r="20" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>
      <path d="M80 48 l6 6 12-14" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <text x="90" y="86" text-anchor="middle" font-size="16" font-weight="800" fill="#132a5c" font-family="system-ui">GFCI</text>
      <text x="90" y="106" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">protege personas</text>
      <rect x="188" y="10" width="164" height="110" rx="14" fill="#132a5c"/>
      <path d="M250 30 l8 18 -14 4 22 30" fill="none" stroke="#F0A43C" stroke-width="3" stroke-linecap="round"/>
      <text x="270" y="86" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" font-family="system-ui">AFCI</text>
      <text x="270" y="106" text-anchor="middle" font-size="11" fill="#c7d2fe" font-family="system-ui">protege del fuego</text>
    </svg>`,
    meter: `<svg viewBox="0 0 360 140" role="img" aria-label="Multímetro, cable negro en COM, cable rojo en V">
      <rect x="110" y="12" width="140" height="116" rx="10" fill="#132a5c"/>
      <rect x="122" y="24" width="116" height="40" rx="4" fill="#d1fae5"/>
      <text x="180" y="50" text-anchor="middle" font-size="16" font-weight="800" fill="#132a5c" font-family="system-ui">120.3 V</text>
      <circle cx="140" cy="90" r="10" fill="#111"/><text x="140" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">COM</text>
      <circle cx="180" cy="90" r="10" fill="#b91c1c"/><text x="180" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">V</text>
      <circle cx="220" cy="90" r="10" fill="#334155"/><text x="220" y="116" text-anchor="middle" font-size="10" fill="#fff" font-family="system-ui">A</text>
      <path d="M140 100 C 80 130, 40 80, 28 120" stroke="#111" stroke-width="4" fill="none"/>
      <path d="M180 100 C 250 130, 300 80, 332 120" stroke="#b91c1c" stroke-width="4" fill="none"/>
    </svg>`,
    prove: `<svg viewBox="0 0 360 110" role="img" aria-label="Comprobar, probar, comprobar">
      <rect x="8" y="18" width="100" height="74" rx="12" fill="#132a5c"/>
      <text x="58" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#F0A43C" font-family="system-ui">1. COMPROBAR</text>
      <text x="58" y="70" text-anchor="middle" font-size="10" fill="#c7d2fe" font-family="system-ui">fuente viva</text>
      <rect x="130" y="18" width="100" height="74" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="180" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">2. PROBAR</text>
      <text x="180" y="70" text-anchor="middle" font-size="10" fill="#64748b" font-family="system-ui">el circuito</text>
      <rect x="252" y="18" width="100" height="74" rx="12" fill="#132a5c"/>
      <text x="302" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#F0A43C" font-family="system-ui">3. COMPROBAR</text>
      <text x="302" y="70" text-anchor="middle" font-size="10" fill="#c7d2fe" font-family="system-ui">el probador</text>
    </svg>`,
    panel: `<svg viewBox="0 0 360 160" role="img" aria-label="Aléjate de un panel abierto">
      <rect x="90" y="8" width="180" height="144" rx="8" fill="#1e293b"/>
      <rect x="104" y="22" width="152" height="116" rx="4" fill="#0f172a"/>
      <rect x="112" y="32" width="50" height="10" fill="#64748b"/>
      <rect x="112" y="48" width="20" height="14" fill="#F0A43C"/>
      <rect x="136" y="48" width="20" height="14" fill="#F0A43C"/>
      <rect x="198" y="48" width="48" height="80" fill="#334155"/>
      <circle cx="180" cy="80" r="28" fill="none" stroke="#dc2626" stroke-width="6"/>
      <path d="M162 98 L198 62" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
      <text x="180" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="#991b1b" font-family="system-ui">ALÉJATE</text>
    </svg>`,
    staple: `<svg viewBox="0 0 360 140" role="img" aria-label="Grapa dentro de 12 pulgadas de la caja y cada 4 pies y medio">
      <rect x="20" y="70" width="14" height="50" fill="#cbd5e1"/>
      <rect x="40" y="86" width="28" height="22" fill="#132a5c"/>
      <path d="M54 86 C 80 40, 200 40, 330 70" fill="none" stroke="#F0A43C" stroke-width="6"/>
      <path d="M100 52 c 0 10 16 10 16 0" stroke="#132a5c" stroke-width="3" fill="none"/>
      <path d="M220 48 c 0 10 16 10 16 0" stroke="#132a5c" stroke-width="3" fill="none"/>
      <line x1="54" y1="120" x2="108" y2="120" stroke="#16a34a" stroke-width="2"/>
      <text x="80" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#166534" font-family="system-ui">12" (or 8")</text>
      <text x="230" y="28" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">cada 4½ ft</text>
    </svg>`,
    nailplate: `<svg viewBox="0 0 360 150" role="img" aria-label="Placa de clavos cuando un hoyo está a menos de una pulgada y cuarto de la cara">
      <rect x="130" y="8" width="44" height="134" fill="#d6c7a1" stroke="#8b7355"/>
      <circle cx="152" cy="70" r="9" fill="#0f172a"/>
      <rect x="168" y="50" width="8" height="44" fill="#94a3b8" stroke="#334155"/>
      <line x1="176" y1="70" x2="250" y2="70" stroke="#F0A43C" stroke-width="2"/>
      <text x="250" y="66" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">if &lt; 1¼"</text>
      <text x="250" y="84" font-size="12" fill="#64748b" font-family="system-ui">pon la placa</text>
    </svg>`,
    device: `<svg viewBox="0 0 360 140" role="img" aria-label="Tornillos del receptáculo: latón vivo, plata neutro, verde tierra">
      <rect x="130" y="10" width="100" height="120" rx="8" fill="#f8fafc" stroke="#132a5c" stroke-width="2"/>
      <circle cx="155" cy="48" r="8" fill="none" stroke="#132a5c" stroke-width="3"/>
      <circle cx="205" cy="48" r="8" fill="none" stroke="#132a5c" stroke-width="3"/>
      <rect x="172" y="78" width="16" height="10" rx="2" fill="#132a5c"/>
      <circle cx="122" cy="48" r="7" fill="#b45309"/><text x="70" y="53" text-anchor="end" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">latón · vivo</text>
      <circle cx="238" cy="48" r="7" fill="#94a3b8"/><text x="252" y="53" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">plata · neutro</text>
      <circle cx="180" cy="118" r="7" fill="#15803d"/><text x="194" y="123" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">verde · tierra</text>
    </svg>`,
    "ri-order": `<svg viewBox="0 0 360 110" role="img" aria-label="Recorrer, poner cajas, jalar, engrapar, inspeccionar">
      <rect x="8" y="22" width="80" height="66" rx="12" fill="#132a5c"/>
      <text x="48" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#F0A43C" font-family="system-ui">1. RECORRER</text>
      <text x="48" y="68" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">marcar cajas</text>
      <rect x="100" y="22" width="80" height="66" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="140" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#132a5c" font-family="system-ui">2. PONER</text>
      <text x="140" y="68" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">cajas + latas</text>
      <rect x="192" y="22" width="80" height="66" rx="12" fill="#fff" stroke="#132a5c"/>
      <text x="232" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#132a5c" font-family="system-ui">3. JALAR</text>
      <text x="232" y="68" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">grapa + placa</text>
      <rect x="284" y="22" width="68" height="66" rx="12" fill="#132a5c"/>
      <text x="318" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#F0A43C" font-family="system-ui">4. RECORRER</text>
      <text x="318" y="68" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">inspeccionar</text>
    </svg>`,
    "ri-attic": `<svg viewBox="0 0 360 140" role="img" aria-label="Los home runs van en diagonal en el ático; las demás corridas siguen las cerchas">
      <path d="M20 110 L180 20 L340 110" fill="none" stroke="#cbd5e1" stroke-width="6"/>
      <path d="M60 90 L80 50 L100 90 L120 50 L140 90 L160 50 L180 90 L200 50 L220 90 L240 50 L260 90 L280 50 L300 90" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <path d="M70 100 L250 40" stroke="#F0A43C" stroke-width="4" stroke-linecap="round"/>
      <text x="180" y="130" text-anchor="middle" font-size="12" font-weight="700" fill="#132a5c" font-family="system-ui">los home runs van en diagonal</text>
    </svg>`,
    "ri-smoke": `<svg viewBox="0 0 360 130" role="img" aria-label="Humo en cada recámara, fuera del área de dormir y en cada piso">
      <rect x="16" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="61" cy="48" r="10" fill="#F0A43C"/>
      <text x="61" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">recámara</text>
      <rect x="135" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="180" cy="48" r="10" fill="#F0A43C"/>
      <text x="180" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">fuera de dormir</text>
      <rect x="254" y="20" width="90" height="70" rx="8" fill="#fff" stroke="#132a5c"/>
      <circle cx="299" cy="48" r="10" fill="#F0A43C"/>
      <text x="299" y="78" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">cada piso</text>
      <text x="180" y="118" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">cajas de clavar de 1 gang, interconexión 14/3</text>
    </svg>`,
    photos: `<svg viewBox="0 0 360 140" role="img" aria-label="Foto de la app de la cuadrilla con marca de agua">
      <rect x="90" y="8" width="180" height="124" rx="16" fill="#0f172a"/>
      <rect x="102" y="20" width="156" height="100" rx="8" fill="#334155"/>
      <rect x="102" y="84" width="156" height="36" fill="#132a5ccc"/>
      <text x="180" y="100" text-anchor="middle" font-size="9" fill="#fff" font-family="system-ui">Sharma Electric &amp; HVAC</text>
      <text x="180" y="114" text-anchor="middle" font-size="8" fill="#F0A43C" font-family="system-ui">Lic. · fecha/hora ET · dirección</text>
    </svg>`,
    "ri-kitchen": `<svg viewBox="0 0 360 150" role="img" aria-label="Receptáculos de encimera de cocina: ningún punto de la encimera a más de 24 pulgadas de un receptáculo">
      <rect x="20" y="82" width="230" height="48" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <rect x="14" y="74" width="242" height="9" fill="#132a5c"/>
      <rect x="66" y="42" width="24" height="18" rx="2" fill="#132a5c"/>
      <rect x="176" y="42" width="24" height="18" rx="2" fill="#132a5c"/>
      <line x1="78" y1="26" x2="188" y2="26" stroke="#F0A43C" stroke-width="3"/>
      <line x1="78" y1="20" x2="78" y2="32" stroke="#F0A43C" stroke-width="3"/>
      <line x1="188" y1="20" x2="188" y2="32" stroke="#F0A43C" stroke-width="3"/>
      <text x="133" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">ningún punto a &gt; 24 in de un receptáculo</text>
      <rect x="272" y="52" width="72" height="78" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <circle cx="292" cy="74" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="324" cy="74" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="292" cy="102" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <circle cx="324" cy="102" r="9" fill="none" stroke="#132a5c" stroke-width="2"/>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">las encimeras van en dos circuitos de 20A de aparatos pequeños</text>
    </svg>`,
    "ri-bath": `<svg viewBox="0 0 360 150" role="img" aria-label="Baño: receptáculo dentro de 3 pies de cada lavabo, ninguno en la zona de la tina o la ducha">
      <rect x="14" y="42" width="132" height="72" rx="16" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <path d="M28 56 L132 100 M132 56 L28 100" stroke="#dc2626" stroke-width="3"/>
      <text x="80" y="132" text-anchor="middle" font-size="10" font-weight="700" fill="#991b1b" font-family="system-ui">TINA: SIN RECEPTÁCULO</text>
      <rect x="228" y="78" width="100" height="14" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="268" y="92" width="10" height="30" fill="#94a3b8"/>
      <rect x="238" y="36" width="24" height="18" rx="2" fill="#132a5c"/>
      <line x1="250" y1="66" x2="300" y2="66" stroke="#F0A43C" stroke-width="3"/>
      <text x="252" y="60" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">dentro de 3 ft</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">circuito de baño de 20A · un receptáculo en cada lavabo</text>
    </svg>`,
    "ri-bedroom": `<svg viewBox="0 0 360 150" role="img" aria-label="Pared de recámara: ningún punto a más de 6 pies de un receptáculo; alarma de humo en el techo">
      <rect x="30" y="34" width="300" height="86" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="30" y="120" width="300" height="8" fill="#94a3b8"/>
      <circle cx="180" cy="56" r="11" fill="#F0A43C"/>
      <text x="180" y="60" text-anchor="middle" font-size="8" font-weight="800" fill="#132a5c" font-family="system-ui">SMK</text>
      <rect x="62" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="274" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <line x1="74" y1="22" x2="286" y2="22" stroke="#F0A43C" stroke-width="3"/>
      <line x1="74" y1="16" x2="74" y2="28" stroke="#F0A43C" stroke-width="3"/>
      <line x1="286" y1="16" x2="286" y2="28" stroke="#F0A43C" stroke-width="3"/>
      <text x="180" y="12" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">ningún punto a &gt; 6 ft de un receptáculo</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">humo en cada recámara · caja de ventilador</text>
    </svg>`,
    "ri-living": `<svg viewBox="0 0 360 150" role="img" aria-label="Áreas de estar: separación en pared de 6 pies, receptáculos en pasillos y vestíbulos">
      <rect x="20" y="34" width="320" height="86" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="20" y="120" width="320" height="8" fill="#94a3b8"/>
      <rect x="150" y="34" width="52" height="86" fill="#fff"/>
      <path d="M150 34 v86 M202 34 v86" stroke="#94a3b8" stroke-width="2"/>
      <text x="176" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b" font-family="system-ui">PUERTA</text>
      <rect x="52" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="238" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <rect x="300" y="92" width="24" height="16" rx="2" fill="#132a5c"/>
      <text x="180" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">paredes 2 ft+ con receptáculo · máx 6 ft</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">pasillos de 10 ft+ llevan uno · vestíbulos: cada pared 3 ft+</text>
    </svg>`,
    "ri-laundry": `<svg viewBox="0 0 360 150" role="img" aria-label="Lavandería: receptáculo de lavadora de 20 amperios y una corrida separada de secadora de 240 voltios">
      <rect x="40" y="34" width="110" height="96" rx="8" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <circle cx="95" cy="76" r="26" fill="none" stroke="#132a5c" stroke-width="3"/>
      <text x="95" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">LAVADORA · 20A</text>
      <rect x="210" y="34" width="110" height="96" rx="8" fill="#132a5c"/>
      <circle cx="265" cy="76" r="26" fill="none" stroke="#F0A43C" stroke-width="3"/>
      <text x="265" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">SECADORA · 240V</text>
      <text x="180" y="18" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">revisa el plano: ¿secadora de gas o eléctrica?</text>
    </svg>`,
    "ri-garage": `<svg viewBox="0 0 360 170" role="img" aria-label="Garaje: un receptáculo por bahía de auto, 48 pulgadas al centro">
      <rect x="24" y="26" width="140" height="104" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <rect x="196" y="26" width="140" height="104" fill="#dbe4f5" stroke="#132a5c" stroke-width="2"/>
      <path d="M24 52 h140 M24 78 h140 M24 104 h140 M196 52 h140 M196 78 h140 M196 104 h140" stroke="#94a3b8" stroke-width="2"/>
      <rect x="168" y="70" width="24" height="16" rx="2" fill="#132a5c"/>
      <line x1="180" y1="78" x2="180" y2="86" stroke="#F0A43C" stroke-width="2"/>
      <line x1="150" y1="140" x2="150" y2="78" stroke="#F0A43C" stroke-width="3"/>
      <line x1="142" y1="140" x2="158" y2="140" stroke="#F0A43C" stroke-width="3"/>
      <line x1="142" y1="78" x2="158" y2="78" stroke="#F0A43C" stroke-width="3"/>
      <text x="120" y="118" text-anchor="end" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">48"</text>
      <text x="120" y="132" text-anchor="end" font-size="9" fill="#64748b" font-family="system-ui">al centro</text>
      <rect x="24" y="140" width="312" height="8" fill="#94a3b8"/>
      <text x="255" y="162" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">uno por bahía · circuito de 20A</text>
    </svg>`,
    "ri-exterior": `<svg viewBox="0 0 360 160" role="img" aria-label="Receptáculo exterior a 24 pulgadas sobre el nivel del suelo, al frente y atrás de la casa">
      <path d="M90 62 L180 14 L270 62" fill="none" stroke="#132a5c" stroke-width="4"/>
      <rect x="106" y="62" width="148" height="66" fill="#e8eef8" stroke="#132a5c" stroke-width="2"/>
      <rect x="160" y="88" width="38" height="40" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="222" y="96" width="22" height="16" rx="2" fill="#132a5c"/>
      <line x1="20" y1="128" x2="340" y2="128" stroke="#94a3b8" stroke-width="4"/>
      <text x="30" y="122" font-size="10" font-weight="700" fill="#64748b" font-family="system-ui">NIVEL</text>
      <line x1="286" y1="128" x2="286" y2="104" stroke="#F0A43C" stroke-width="3"/>
      <line x1="278" y1="128" x2="294" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <line x1="278" y1="104" x2="294" y2="104" stroke="#F0A43C" stroke-width="3"/>
      <text x="302" y="112" font-size="13" font-weight="800" fill="#132a5c" font-family="system-ui">24"</text>
      <text x="302" y="126" font-size="9" fill="#64748b" font-family="system-ui">sobre el nivel</text>
      <text x="180" y="152" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">uno al frente, uno atrás · caja para intemperie</text>
    </svg>`,
    "ri-hvac": `<svg viewBox="0 0 360 150" role="img" aria-label="Condensador: desconexión a la vista, receptáculo de servicio dentro de 25 pies">
      <rect x="30" y="52" width="104" height="78" rx="8" fill="#132a5c"/>
      <circle cx="82" cy="86" r="26" fill="none" stroke="#F0A43C" stroke-width="3"/>
      <path d="M82 60 v52 M56 86 h52 M64 68 l36 36 M100 68 l-36 36" stroke="#F0A43C" stroke-width="2"/>
      <text x="82" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">CONDENSADOR</text>
      <rect x="176" y="40" width="34" height="46" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <path d="M186 52 l14 20" stroke="#dc2626" stroke-width="3"/>
      <text x="193" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">DESCONEXIÓN</text>
      <text x="193" y="114" text-anchor="middle" font-size="8" fill="#64748b" font-family="system-ui">a la vista</text>
      <rect x="268" y="66" width="24" height="18" rx="2" fill="#132a5c"/>
      <text x="280" y="102" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">SERVICIO</text>
      <text x="280" y="114" text-anchor="middle" font-size="9" font-weight="700" fill="#132a5c" font-family="system-ui">RECEPTÁCULO</text>
      <line x1="140" y1="126" x2="262" y2="126" stroke="#F0A43C" stroke-width="2" stroke-dasharray="5 4"/>
      <text x="201" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#132a5c" font-family="system-ui">dentro de 25 ft</text>
      <text x="180" y="18" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">el cable y el breaker salen de la placa de datos</text>
    </svg>`,
    "ri-lowvoltage": `<svg viewBox="0 0 360 150" role="img" aria-label="Mantén el cable de bajo voltaje al menos a 2 pulgadas del cableado de potencia y fuera de las cajas de potencia">
      <rect x="52" y="40" width="86" height="70" rx="6" fill="#132a5c"/>
      <text x="95" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#F0A43C" font-family="system-ui">POTENCIA</text>
      <text x="95" y="88" text-anchor="middle" font-size="9" fill="#c7d2fe" font-family="system-ui">caja de 120V</text>
      <rect x="222" y="40" width="86" height="70" rx="6" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <text x="265" y="70" text-anchor="middle" font-size="12" font-weight="800" fill="#132a5c" font-family="system-ui">DATA / TV</text>
      <text x="265" y="88" text-anchor="middle" font-size="9" fill="#64748b" font-family="system-ui">su propia caja</text>
      <line x1="146" y1="122" x2="214" y2="122" stroke="#F0A43C" stroke-width="3"/>
      <line x1="146" y1="116" x2="146" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <line x1="214" y1="116" x2="214" y2="128" stroke="#F0A43C" stroke-width="3"/>
      <text x="180" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#132a5c" font-family="system-ui">2 in mín</text>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">etiqueta ambos extremos · placas también</text>
    </svg>`,
    "ri-mistakes": `<svg viewBox="0 0 360 150" role="img" aria-label="Revisa los errores clásicos antes de llamar a inspección">
      <rect x="110" y="12" width="140" height="126" rx="8" fill="#fff" stroke="#132a5c" stroke-width="2"/>
      <rect x="150" y="6" width="60" height="16" rx="6" fill="#132a5c"/>
      <path d="M128 44 l6 6 10-12" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="44" x2="232" y2="44" stroke="#cbd5e1" stroke-width="4"/>
      <path d="M128 72 l6 6 10-12" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="72" x2="232" y2="72" stroke="#cbd5e1" stroke-width="4"/>
      <path d="M128 96 l12 12 M140 96 l-12 12" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="102" x2="232" y2="102" stroke="#cbd5e1" stroke-width="4"/>
      <text x="180" y="146" text-anchor="middle" font-size="11" fill="#64748b" font-family="system-ui">una grapa o placa olvidada reprueba toda la casa</text>
    </svg>`,
  };
  return svg[id] ? `<div class="diagram">${svg[id]}</div>` : "";
}
