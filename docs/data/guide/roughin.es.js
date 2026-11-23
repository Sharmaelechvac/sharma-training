/* Rough-in Residencial — la sección principal de la guía de campo de la Guía de Rough-In Residencial.
   Cobre: 14 AWG en 15A, 12 AWG en 20A. CCA un tamaño más grande: 12 AWG en 15A, 10 AWG en 20A. El líder decide el cable; nunca uses las conexiones traseras de presión (backstab). */

export const INSPECT_URL = "https://sharma-inspect.sharma-crew.workers.dev";

export const ROUGHIN_GROUPS = [
  { title: "Empieza aquí", ids: ["start"] },
  { title: "Cuarto por cuarto", ids: ["kitchen", "baths", "bedrooms", "living", "laundry", "garage", "exterior", "attic", "hvac"] },
  { title: "Cómo lo construimos", ids: ["boxes", "wire", "panel", "smoke", "lowvoltage", "gfci"] },
  { title: "Antes de pedir la inspección", ids: ["inspect", "mistakes"] },
];

export const ROUGHIN_PAGES = [
  {
    id: "start",
    title: "Antes de empezar",
    blurb: "Qué es el rough-in, el orden de la casa, qué puede hacer un ayudante y cómo leer el plano.",
    tags: ["start", "order", "safety", "plan", "diagram", "legend", "helper", "first day", "walk the house"],
    sections: [
      { type: "lead", text: "El rough-in es después de la estructura, antes del aislamiento y el drywall. Conviertes el plano en cajas, cable y un panel. Todavía nada tiene corriente. El plano siempre gana — si esta guía y el plano no coinciden, sigue el plano y pregunta a tu foreman." },
      { type: "diagram", id: "ri-order" },
      {
        type: "table",
        caption: "Trabaja la casa en este orden",
        headers: ["Paso", "Haz esto"],
        rows: [
          ["1", "Recorre la casa — foreman + el plano más reciente. Marca el panel, el medidor y cada caja."],
          ["2", "Instala el meter-main y las cajas del panel."],
          ["3", "Instala las cajas — el tipo correcto, en el lugar correcto."],
          ["4", "Instala las cajas de la luz de barra del tocador y de humo / CO."],
          ["5", "Perfora las placas superiores y los montantes según el trazado."],
          ["6", "Tira los home runs y los circuitos según el plano."],
          ["7", "Tira las corridas de 240V: estufa, secadora, calentador de agua, condensador, manejadora de aire."],
          ["8", "Engrapa y apoya cada cable. Placas de clavos donde se necesiten."],
          ["9", "Arma las tierras y los empalmes. Dobla el cable de forma ordenada."],
          ["10", "Etiqueta cada home run en el panel."],
          ["11", "Tierra y unión (bonding): varillas, GEC, puente de unión. Ufer solo si el plano o la zapata tiene uno."],
          ["12", "Entuba la acometida según el plano (a menudo PVC de 2 in, curvas (sweeps) y abrazaderas)."],
          ["13", "Recorre la lista de verificación con tu foreman, toma fotos en la app de la cuadrilla y pide la inspección."],
        ],
      },
      {
        type: "table",
        caption: "Qué puede hacer un ayudante nuevo — y qué debe esperar",
        headers: ["Puedes hacer esto", "No hagas esto solo"],
        rows: [
          ["Preparar el material, instalar cajas en las marcas, el foreman las revisa", "Trabajar en o cerca del panel o el medidor"],
          ["Perforar hoyos exactamente donde están marcados", "Tocar cualquier cosa energizada, o un poste de energía temporal"],
          ["Tirar el cable suave desde el carrete — sin dobleces ni torceduras", "Usar una escalera de más de 6 ft, o entrar solo al ático"],
          ["Engrapar cable, poner placas de clavos, etiquetar los extremos con claridad", "Cortar bloque o una cercha, o perforar más allá del punto marcado"],
          ["Barrer mientras trabajas", "Armar una corrida de 240V, o mover una caja fuera del plano"],
        ],
      },
      {
        type: "table",
        caption: "Cómo leer el plano",
        headers: ["Hoja", "Qué es"],
        rows: [
          ["Leyenda y notas (a menudo E-0)", "Léela primero — define cada símbolo en ese trabajo."],
          ["Plano de planta (a menudo E-1)", "Cada caja, luz, interruptor y corrida."],
          ["Horario del panel y cálculo de carga (a menudo E-2)", "Cada breaker: qué alimenta, tamaño del cable, tamaño del breaker."],
          ["Hojas de circuitos (a menudo E-3)", "Un circuito a la vez, y su camino de regreso al panel."],
        ],
      },
      { type: "note", text: "Trabaja solo con la revisión más reciente. Una etiqueta junto a un dispositivo es su número de circuito — tiene que coincidir con el horario del panel. El cobre 14 AWG va en 15A. El cobre 12 AWG va en 20A. Si el carrete no coincide con el horario, detente y pregunta. No sustituyas." },
      {
        type: "do",
        items: [
          "Traza un circuito en papel, luego recorre ese camino en la casa, antes de tirar el cable.",
          "Trata cada cable como si tuviera corriente hasta que tu foreman lo pruebe. Lentes puestos todo el día. Botas, no tenis. Toma agua antes de tener sed.",
          "Las preguntas del constructor van por la oficina — nunca de ti al constructor.",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca trabajes en nada energizado.",
          "Nunca muevas, saltes ni agregues una caja por tu cuenta. Nunca cambies el tamaño de un cable o un breaker.",
          "Nunca cortes ni perfores una cercha, una viga o bloque para que un plano encaje. Nunca desvíes un home run a otro circuito para «ahorrar cable».",
          "¿La casa y el plano no coinciden? Detente, avisa a tu foreman, marca el punto y pasa a otro circuito.",
        ],
      },
    ],
  },
  {
    id: "kitchen",
    title: "Cocina",
    blurb: "Circuitos de aparatos pequeños, encimeras, la nevera y 240V para la estufa.",
    tags: ["kitchen", "counter", "island", "peninsula", "fridge", "refrigerator", "dishwasher", "disposal", "range", "hood", "microwave", "small-appliance", "20a"],
    sections: [
      { type: "lead", text: "La cocina tiene más trabajo de 20A que el resto de la casa. Sigue el plano para cada aparato. Mantén las cajas ordenadas — este cuarto se revisa con lupa." },
      { type: "diagram", id: "ri-kitchen" },
      {
        type: "table",
        caption: "Circuitos de cocina en los trabajos de Sharma",
        headers: ["Circuito", "Qué debes saber"],
        rows: [
          ["2 × 20A de aparatos pequeños", "Cobre 12 AWG. Al menos dos circuitos de 20A para aparatos pequeños (NEC 210.11(C)(1)) sirven los receptáculos de la cocina, la despensa, el área de desayuno y el comedor — de pared, piso y encimera — más la nevera (210.52(B)). La nevera puede tener su propio circuito de 15A o más solo si el plano lo dice (210.52(B)(1) Excepción N.º 2). Ningún otro receptáculo en estos circuitos, y nunca receptáculos exteriores (210.52(B)(2)). Divide los receptáculos de la encimera entre los dos circuitos (210.52(B)(3))."],
          ["Lavavajillas, triturador, campana", "Normalmente un circuito compartido de 20A, a menos que el plano los separe."],
          ["Microondas", "Sigue el plano. No inventes un circuito dedicado a menos que el plano o tu foreman lo diga."],
          ["Estufa", "240V, cable y breaker según la placa de datos y el plano. A menudo cobre 8 AWG o 6 AWG. Si lleva receptáculo, a veces es una caja de montaje superficial. Un breaker GFCI de 2 polos es el estándar de la compañía — confirma el breaker exacto con tu foreman."],
        ],
      },
      {
        type: "table",
        caption: "Espaciado de encimeras e islas (NEC 210.52(C))",
        headers: ["Regla", "Significado simple"],
        rows: [
          ["Receptáculos de encimera", "Ningún punto a lo largo de una encimera de 12 in o más ancha está a más de 24 in de un receptáculo (210.52(C)(1)). Altura según el plano o el foreman."],
          ["Isla o península", "Al menos un receptáculo por los primeros 9 sq ft (o fracción) de encimera, más uno más por cada 18 sq ft adicionales o fracción (NEC 210.52(C)(2)(a)). En una península, un receptáculo dentro de 2 ft del extremo exterior, medido desde la pared de conexión (210.52(C)(2)(b)). Sigue el plano; si una isla grande muestra un solo receptáculo, pregunta a tu foreman."],
          ["La alimentación a una isla", "Bajo losa o subterránea: UF, o THWN-2 en conduit. Nunca NM bajo tierra ni bajo losa (300.9, 334.12(B)(4))."],
        ],
      },
      {
        type: "do",
        items: [
          "Instala las cajas de la cocina ordenadas, a la altura planeada.",
          "Usa cobre 12 AWG en cada circuito de cocina de 20A.",
        ],
      },
      {
        type: "never",
        items: [
          "No pongas la nevera en su propio circuito a menos que el plano lo diga — comparte un circuito de aparatos pequeños.",
          "No permitas que un circuito de aparatos pequeños alimente un receptáculo exterior.",
          "No inventes una altura de encimera — según el plano o el foreman. Los interruptores van a 48 in al centro.",
        ],
      },
    ],
  },
  {
    id: "baths",
    title: "Baños",
    blurb: "El circuito de 20A para receptáculos del baño, luces del tocador, extractores y la zona de la tina.",
    tags: ["bath", "bathroom", "vanity", "exhaust", "tub", "shower", "basin", "406.9", "15a home run"],
    sections: [
      { type: "lead", text: "Los baños son apretados, mojados y fáciles de reprobar. Coloca la caja del tocador con cuidado, mantente fuera de la zona de la tina y la ducha, y vigila dónde llega el home run." },
      { type: "diagram", id: "ri-bath" },
      {
        type: "table",
        caption: "Qué va en un baño",
        headers: ["Artículo", "Manera de Sharma"],
        rows: [
          ["Receptáculos del baño", "Un circuito de 20A, cobre 12 AWG (NEC 210.11(C)(3)). Un receptáculo dentro de 3 ft del borde exterior de cada lavabo (210.52(D)). Ningún otro receptáculo en este circuito — excepto, cuando alimenta un solo baño, otro equipo en ese mismo baño (Excepción del 210.11(C)(3)). Este circuito puede correr como home run directo al baño."],
          ["Luces", "Una luz de tocador sobre el espejo. Una luz de tina o ducha para lugar mojado que esté en el plano lleva su propia pata de interruptor (switch leg). Ninguna luz general de techo a menos que el plano muestre una."],
          ["Extractor", "Cada baño lleva un extractor."],
          ["Caja de barra del tocador", "Una caja para luz de barra — y solo para luces del tocador. Ponla ordenada, a la altura planeada."],
        ],
      },
      { type: "note", text: "Ningún receptáculo dentro de 3 ft horizontales y 8 ft verticales del borde de la tina o del umbral de la ducha (NEC 406.9(C))." },
      {
        type: "do",
        items: [
          "Lleva el home run de 20A de los receptáculos del baño hasta el baño si ese es el plano.",
          "Mantén las cajas de interruptores ordenadas. Un neutro pertenece a cada ubicación de interruptor (404.2(C)).",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca lleves un home run de 15A a una caja de baño. Llévalo a la primera caja fuera del baño.",
          "No pongas un receptáculo en la zona de la tina o la ducha.",
        ],
      },
    ],
  },
  {
    id: "bedrooms",
    title: "Recámaras",
    blurb: "Circuitos de área, ventiladores y una alarma de humo en cada recámara.",
    tags: ["bedroom", "sleeping", "fan", "smoke", "area circuit", "switched outlet", "half-switched"],
    sections: [
      { type: "lead", text: "Las recámaras normalmente van en un circuito de área de 15A — luces, ventiladores y receptáculos generales juntos — con cobre 14 AWG. Sigue el plano para ventiladores e interruptores de 3 vías." },
      { type: "diagram", id: "ri-bedroom" },
      {
        type: "table",
        caption: "Rough-in de recámara",
        headers: ["Artículo", "Qué hacer"],
        rows: [
          ["Receptáculos", "Ningún punto a lo largo de una pared de 2 ft o más ancha a más de 6 ft de un receptáculo (210.52(A)). Altura: 18 in hasta la parte inferior de la caja cuando los planos no dicen."],
          ["Interruptores", "48 in al centro (estándar de Sharma), a menos que el plano diga otra cosa. Un interruptor de 3 vías normalmente lleva 14/3 o 12/3. Un neutro pertenece a la caja del interruptor (404.2(C))."],
          ["Ventiladores de techo", "Una caja clasificada para ventilador en cada ubicación de ventilador. Una caja normal de techo no basta."],
          ["Alarma de humo", "Una caja de clavar de 1 gang en cada recámara — no una caja redonda. Ve la página de Humo y CO."],
        ],
      },
      {
        type: "do",
        items: [
          "En los trabajos de Sharma, todos los receptáculos van sin interruptor. No hay receptáculos mitad-interruptor (half-switched).",
          "Usa cobre 14 AWG en circuitos de área de 15A, cobre 12 AWG si el horario dice 20A.",
        ],
      },
      {
        type: "never",
        items: [
          "No omitas la caja de humo de la recámara.",
          "No cuelgues un ventilador de una caja que no esté clasificada para ventilador.",
        ],
      },
    ],
  },
  {
    id: "living",
    title: "Sala, comedor y pasillos",
    blurb: "Receptáculos generales, vestíbulos, pasillos y cuartos familiares o comedores.",
    tags: ["living", "family", "dining", "hallway", "foyer", "210.52", "area circuit"],
    sections: [
      { type: "lead", text: "Las salas, los cuartos familiares y los pasillos comparten circuitos de área de 15A, cobre 14 AWG — luces, ventiladores y receptáculos generales juntos. Sharma usa como máximo cuatro circuitos de área en una casa. Los receptáculos del comedor NO van en ellos — van en los circuitos de 20A de aparatos pequeños (NEC 210.52(B)). Las luces y los ventiladores del comedor sí pueden quedarse en un circuito de área." },
      { type: "diagram", id: "ri-living" },
      {
        type: "table",
        caption: "Receptáculos requeridos",
        headers: ["Lugar", "Regla"],
        rows: [
          ["Paredes", "Ningún punto a lo largo de una pared de 2 ft o más ancha está a más de 6 ft de un receptáculo (210.52(A)). Altura: 18 in hasta la parte inferior de la caja cuando los planos no lo especifican."],
          ["Receptáculos del comedor", "Servidos por los circuitos de 20A de aparatos pequeños, no por un circuito de área de 15A (210.52(B)). Sigue el plano."],
          ["Pasillos", "Un pasillo de 10 ft o más necesita un receptáculo (210.52(H))."],
          ["Vestíbulos de más de 60 sq ft", "Un receptáculo en cada pared de 3 ft o más ancha (210.52(I))."],
          ["Ubicaciones de ventilador en el comedor u otros", "Una caja clasificada para ventilador donde el plano muestra un ventilador."],
        ],
      },
      {
        type: "do",
        items: ["Mantén una corrida de receptáculos de pared nivelada y uniforme.", "Traza las patas de interruptor (switch legs) desde los arcos de interruptores del arquitecto. Cada carga con interruptor necesita una pata de interruptor."],
      },
      {
        type: "never",
        items: ["No muevas un interruptor del estándar de Sharma de 48 in al centro a menos que el plano lo diga.", "No saltes un receptáculo de vestíbulo o pasillo que el Código exige.", "No pongas los receptáculos del comedor en un circuito de área de 15A."],
      },
    ],
  },
  {
    id: "laundry",
    title: "Lavandería",
    blurb: "El circuito de lavandería de 20A y la secadora — que es una de las cajas de 240V que sí lleva receptáculo.",
    tags: ["laundry", "dryer", "washer", "210.52(F)", "10/3", "240"],
    sections: [
      { type: "lead", text: "La lavandería es un cuarto de 20A para el receptáculo de la lavadora, y una corrida de 240V para una secadora eléctrica. Confirma gas vs. eléctrica en el plano antes de tirar el cable de la secadora." },
      { type: "diagram", id: "ri-laundry" },
      {
        type: "table",
        caption: "Rough-in de lavandería",
        headers: ["Artículo", "Qué hacer"],
        rows: [
          ["Receptáculo de lavadora / lavandería", "Un circuito de lavandería de 20A con cobre 12 AWG (210.11(C)(2)). Se requiere un receptáculo de lavandería (210.52(F)). Este circuito no debe alimentar ningún otro receptáculo."],
          ["Secadora eléctrica", "Normalmente 10/3 de cobre en un breaker GFCI de 2 polos de 30A, según el plano y la placa de datos. La secadora es una de las cargas de 240V que sí lleva caja de receptáculo."],
          ["Secadora de gas", "Necesita solo un receptáculo de 120V — no tires una corrida de secadora de 240V a menos que el plano diga que la secadora es eléctrica."],
        ],
      },
      {
        type: "do",
        items: ["Tira la llegada de la secadora si el plano es eléctrico. Etiqueta el home run en el panel."],
      },
      {
        type: "never",
        items: ["No adivines gas vs. eléctrica. Revisa el plano.", "No uses 14 AWG en el circuito de lavandería de 20A."],
      },
    ],
  },
  {
    id: "garage",
    title: "Garaje",
    blurb: "Receptáculos de garaje de 20A, cajas de corte en bloque y un receptáculo por bahía de auto.",
    tags: ["garage", "car bay", "cut-in", "20a", "210.52(G)"],
    sections: [
      { type: "lead", text: "El garaje es un circuito de 20A con cobre 12 AWG. En una casa de bloque, las cajas del garaje normalmente son de corte. Las corridas que sirven al garaje a menudo son corridas por el ático, aunque las cajas se vean cerca — revisa el plano y la leyenda." },
      { type: "diagram", id: "ri-garage" },
      {
        type: "table",
        caption: "Reglas del garaje",
        headers: ["Artículo", "Qué hacer"],
        rows: [
          ["Receptáculos", "Un circuito de receptáculos de garaje de 20A (210.11(C)(4)). Al menos un receptáculo por bahía de auto. Estándar de Sharma: 48 in al centro (el Código permite hasta 5½ ft — 210.52(G)(1)). Ningún otro receptáculo en este circuito, excepto receptáculos exteriores de fácil acceso (Excepción del 210.11(C)(4))."],
          ["Cajas en bloque", "Cajas de corte en paredes exteriores y en el garaje. Cajas de clavar en estructura de madera."],
          ["Abridores de puerta y extras", "Sigue el plano. No saltes ninguna bahía."],
        ],
      },
      {
        type: "do",
        items: ["Usa cajas listas para intemperie donde el plano o la ubicación lo necesite.", "Pon los receptáculos del garaje a 48 in al centro, a menos que el plano diga otra cosa."],
      },
      {
        type: "never",
        items: ["No alimentes los receptáculos del garaje desde un circuito de iluminación de 15A.", "No uses un circuito de cocina de aparatos pequeños aquí."],
      },
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    blurb: "Receptáculos de frente y de atrás, balcones y cajas listas para intemperie.",
    tags: ["exterior", "outdoor", "front", "back", "balcony", "deck", "porch", "in-use", "WR", "210.52(E)"],
    sections: [
      { type: "lead", text: "Los receptáculos exteriores tienen que estar ahí, en el lugar correcto, en cajas listas para intemperie. No los robes de un circuito de cocina de aparatos pequeños." },
      { type: "diagram", id: "ri-exterior" },
      {
        type: "table",
        caption: "Receptáculos exteriores requeridos (NEC 210.52(E))",
        headers: ["Lugar", "Regla"],
        rows: [
          ["Frente y atrás", "Uno al frente y uno atrás. Estándar de Sharma: 24 in sobre el nivel del suelo (el Código permite hasta 6½ ft — 210.52(E)(1))."],
          ["Balcones, terrazas y porches", "También se requieren (210.52(E)(3)). Sigue el plano para cada uno."],
          ["Cajas", "De corte en paredes exteriores de bloque. Listas para intemperie, con tapa de uso en sitio (in-use) en el trim. El circuito es de 20A con cobre 12 AWG en los trabajos de Sharma, protegido en el breaker."],
        ],
      },
      {
        type: "do",
        items: ["Sella las penetraciones exteriores. Entuba y sella el bajo voltaje y la potencia donde salen de la casa."],
      },
      {
        type: "never",
        items: ["No alimentes los receptáculos exteriores desde un circuito de cocina de aparatos pequeños (210.52(B)(2)).", "No dejes una caja exterior sin un plan de tapa para intemperie."],
      },
    ],
  },
  {
    id: "attic",
    title: "Ático",
    blurb: "Cómo correr el cable en las cerchas, el scuttle y el equipo del ático.",
    tags: ["attic", "truss", "diagonal", "scuttle", "guard strip", "joist", "home run"],
    sections: [
      { type: "lead", text: "La mayoría de los home runs viven en el ático. Recorre las cerchas antes de tirar. Pisa solo las vigas o las cerchas — nunca el drywall. No subas solo siendo un ayudante nuevo." },
      { type: "diagram", id: "ri-attic" },
      {
        type: "table",
        caption: "Recorrido en el ático en los trabajos de Sharma",
        headers: ["Corrida", "Cómo tirarla"],
        rows: [
          ["Home runs y corridas de 240V", "Ve en diagonal — una sola línea limpia desde el panel hasta la bajada, no una S serpenteante."],
          ["Otras corridas del ático", "Paralelas o perpendiculares a las cerchas."],
          ["Bajadas", "Hacia abajo por las placas superiores hasta las bahías de los montantes. Encadena los receptáculos de caja en caja por montantes perforados — prefiere una cadena por la pared en vez de un salto por el ático."],
          ["Cerca del scuttle", "Dentro de 6 ft de un scuttle sin escaleras permanentes: NM por los lados de las vigas o la estructura, o por hoyos perforados — nunca suelto sobre las partes superiores (NEC 320.23(A) y (B) vía 334.23). Sin tiras protectoras (guard strips) como método, sin zona sin cables, no muevas dispositivos. Con escaleras permanentes o una escalera fija, nunca corras NM suelto sobre las partes superiores donde camina la gente — esa zona no se limita a 6 ft."],
          ["Luz del ático", "Justo al lado del scuttle, con interruptor en la entrada del ático (NEC 210.70(A)(3))."],
        ],
      },
      {
        type: "table",
        caption: "Si hay equipo en el ático",
        headers: ["Artículo", "Regla"],
        rows: [
          ["Luz", "Un aparato en el ático también lleva una luz en la unidad o cerca de ella, con interruptor en la entrada del ático (NEC 210.70(A)(3), FBC-R M1305.1.3.1). Si la unidad no está al lado del scuttle, la luz del scuttle no cuenta como esa luz — sigue el plano."],
          ["Receptáculo de servicio", "125V 15/20A, en la unidad o cerca de ella, dentro de 25 ft en el mismo nivel (NEC 210.63, FBC-R M1305.1.3.1). Nunca en el lado de carga de la desconexión del equipo. La protección GFCI (210.8(E)) viene del breaker en los trabajos de Sharma."],
        ],
      },
      {
        type: "do",
        items: ["Elige la línea antes de tirar: inicio, camino, bajada. Si la corrida no se lee como una línea limpia, arréglala antes de cubrir.", "Engrapa en línea. Cables planos, lado a lado, nunca aplastados."],
      },
      {
        type: "never",
        items: ["Nunca cortes, hagas muescas ni perfores una cercha por tu cuenta.", "Nunca camines sobre drywall. Nunca dejes rollos de cable sobrante en la pared o el ático — el cable sobrante vive en la caja (las 6 in).", "No corras NM suelto sobre las partes superiores de las vigas dentro de 6 ft de un scuttle. No instales tiras protectoras como método, no crees una zona sin cables y no muevas dispositivos."],
      },
    ],
  },
  {
    id: "hvac",
    title: "HVAC",
    blurb: "Circuitos del condensador y la manejadora de aire, desconexiones y el receptáculo de servicio.",
    tags: ["hvac", "condenser", "air handler", "disconnect", "210.63", "whip", "MOCP", "heat kit"],
    sections: [
      { type: "lead", text: "El cable y los breakers de HVAC salen de la placa de datos y del plano — nunca de una adivinanza. El condensador y la manejadora de aire se cablean directo o se conectan en una desconexión. No llevan caja de receptáculo de 240V." },
      { type: "diagram", id: "ri-hvac" },
      {
        type: "table",
        caption: "Rough-in eléctrico para HVAC",
        headers: ["Artículo", "Qué hacer"],
        rows: [
          ["Condensador / AC", "Un breaker estándar de 2 polos dimensionado al MOCP de la placa de datos — nunca un breaker GFCI en el condensador. El equipo de HVAC listado y etiquetado está exento de la regla de GFCI para receptáculos exteriores (FBC-R E3408.1, Excepción N.º 2 al NEC 210.8(F)). Desconexión a la vista de la unidad (440.14), más un látigo (whip) en el trim."],
          ["Manejadora de aire y kit de calor", "Según la placa de datos y el plano. Cableada directo o a una desconexión — sin caja de receptáculo de 240V."],
          ["Receptáculo de servicio", "125V 15/20A, dentro de 25 ft de la unidad, en el mismo nivel (NEC 210.63). Nunca en el lado de carga de la desconexión del equipo. La protección GFCI (210.8(E); en exteriores también 210.8(A)(3)) viene del breaker en los trabajos de Sharma."],
          ["Manejadora de aire en el ático", "Necesita una luz en la unidad o cerca de ella, con interruptor en la entrada del ático, más el receptáculo de servicio de 125V en la unidad o cerca de ella (210.70(A)(3), 210.63, FBC-R M1305.1.3.1). La luz del lado del scuttle es adicional cuando la unidad no está al lado del scuttle."],
        ],
      },
      { type: "note", text: "Solo la secadora y la estufa llevan caja de receptáculo de 240V (la estufa a veces es de montaje superficial). El calentador de agua, el condensador y la manejadora de aire se cablean directo o corren a una desconexión." },
      {
        type: "do",
        items: ["Tira cada circuito de HVAC que muestra el plano. Deja lista la ubicación de la desconexión.", "Etiqueta los home runs. Dimensiona según el MCA y el MOCP de la placa de datos, no por adivinanza."],
      },
      {
        type: "never",
        items: ["Nunca pongas un breaker GFCI en el condensador.", "Nunca inventes un tamaño de cable para el AC. Si falta la placa de datos, detente y avisa a tu foreman."],
      },
    ],
  },
  {
    id: "boxes",
    title: "Cajas y alturas",
    blurb: "Qué caja usar, altura de receptáculos de pared (18 in hasta la parte inferior de la caja), altura de interruptores (48 in al centro) y las reglas de espaciado que revisan los inspectores.",
    tags: ["box", "height", "18", "cut-in", "bracket", "nail-on", "fan", "vanity", "spacing", "foyer", "mud ring"],
    sections: [
      { type: "lead", text: "La caja correcta, a la altura correcta, preparada para la pared terminada. Los receptáculos se miden hasta la PARTE INFERIOR de la caja; los interruptores se miden hasta el CENTRO. Si los planos muestran una altura, ganan los planos." },
      { type: "diagram", id: "heights" },
      {
        type: "table",
        caption: "Alturas por defecto en los trabajos de Sharma",
        headers: ["Dispositivo", "Altura"],
        rows: [
          ["Receptáculos de pared", "18 pulgadas hasta la parte inferior de la caja, cuando los planos no lo especifican"],
          ["Interruptores", "48 pulgadas al centro (estándar de Sharma)"],
          ["Receptáculos de encimera", "Según el plano o el foreman"],
        ],
      },
      {
        type: "table",
        caption: "Qué caja va dónde",
        headers: ["Dónde", "Caja"],
        rows: [
          ["Estructura de madera", "Cajas de clavar (una típica de 1 gang es de unas 22 cu in, o el tamaño que te entregue tu foreman)"],
          ["Paredes exteriores y garaje (casas de bloque)", "Cajas de corte"],
          ["Cara interior de una pared de bloque", "Cajas de bracket. Una de 2 gang ahí es un bracket de 2 gang."],
          ["Ventiladores de techo", "Solo una caja clasificada para ventilador"],
          ["Humo / CO", "Una caja de clavar de 1 gang — no una caja redonda"],
          ["Solo luces del tocador", "Cajas para luz de barra"],
          ["Junto al panel, en estructura", "De clavar"],
        ],
      },
      {
        type: "table",
        caption: "Espaciado que revisan los inspectores (NEC 210.52)",
        headers: ["Lugar", "Regla"],
        rows: [
          ["Paredes", "Ningún punto a lo largo de una pared de 2 ft o más ancha está a más de 6 ft de un receptáculo (210.52(A))."],
          ["Encimeras de cocina", "Ningún punto a lo largo de una encimera de 12 in o más ancha está a más de 24 in de un receptáculo (210.52(C)(1))."],
          ["Isla / península", "Un receptáculo por los primeros 9 sq ft (o fracción) de encimera, más uno más por cada 18 sq ft adicionales o fracción. Península: uno dentro de 2 ft del extremo exterior (NEC 210.52(C)(2))."],
          ["Baño", "Uno dentro de 3 ft de cada lavabo (210.52(D)). Ninguno en la zona de tina/ducha de 3 ft por 8 ft (406.9(C))."],
          ["Lavandería, garaje, exterior, pasillos, vestíbulos", "Ve las páginas de cada cuarto. Pasillos de 10 ft + (210.52(H)). Vestíbulos de más de 60 sq ft: un receptáculo en cada pared de 3 ft + (210.52(I))."],
        ],
      },
      { type: "note", text: "Prepara la caja para el grosor del drywall para que quede al ras de la pared terminada. Las latas empotradas (cans) normalmente son un artículo del trim — sigue el plano. Capacidad de la caja: cada cable, dispositivo y abrazadera ocupa espacio (NEC 314.16). ¿Llena? Usa una caja más grande o pregunta. Nunca entierres una unión (314.29)." },
      {
        type: "do",
        items: [
          "Pregunta: ¿midiendo desde el subpiso o desde el piso terminado?",
          "Al menos 6 in de conductor libre, 3 in más allá de la cara de la caja (300.14). Forro al menos ¼ in dentro de la caja (314.17).",
        ],
      },
      {
        type: "never",
        items: [
          "No inventes un número para la altura de los receptáculos de encimera.",
          "No uses una caja normal de techo para un ventilador.",
          "No fuerces un dispositivo en una caja llena.",
        ],
      },
    ],
  },
  {
    id: "wire",
    title: "Cable, alambre y engrapado",
    blurb: "Cobre 14 en 15A y 12 en 20A, grapas, placas de clavos y corridas limpias.",
    tags: ["wire", "cable", "staple", "334.30", "nail plate", "300.4", "14", "12", "copper", "nm-b", "sheath"],
    sections: [
      { type: "lead", text: "Esta guía enseña los dos cables que corre Sharma. NM-B de cobre: 14 AWG en un breaker de 15A, 12 AWG en un breaker de 20A. CCA (marcado CU-CLAD AL): un tamaño más grande — 12 AWG en 15A, 10 AWG en 20A. CCA: usa los terminales de tornillo, nunca los hoyos de presión. Las tuercas para cable (wire nuts) deben decir AL-CU. Pregunta a tu líder si no estás seguro. Los terminales de tornillo normales de los dispositivos de 15/20A están bien con CCA — el CO/ALR es solo para aluminio puro. El líder decide qué cable lleva un trabajo — nunca lo cambies por tu cuenta, y nunca uses las conexiones traseras de presión (backstab). Si un carrete no coincide con lo que pidió el líder, detente y pregunta." },
      { type: "diagram", id: "wire-pair" },
      {
        type: "table",
        caption: "NM-B de cobre — combina el cable con el breaker",
        headers: ["Cable de cobre", "Breaker", "Uso típico en Sharma"],
        rows: [
          ["14 AWG (14/2, 14/3)", "15A", "Circuitos de área: luces, ventiladores y receptáculos generales"],
          ["12 AWG (12/2, 12/3)", "20A", "Cocina de aparatos pequeños, lavandería, receptáculos de baño, garaje, exterior, y lavavajillas / triturador / campana"],
          ["10 AWG de cobre", "30A, o según el plano", "Secadora eléctrica (a menudo 10/3) y algunos calentadores de agua — sigue el plano"],
          ["8 o 6 AWG de cobre", "Según el plano y la placa de datos", "Estufa y cargas más grandes"],
        ],
      },
      { type: "diagram", id: "staple" },
      {
        type: "table",
        caption: "Engrapado y apoyo (NEC 334.30)",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["La mayoría de las cajas", "Asegura dentro de 12 in de la caja, y al menos cada 4½ ft a lo largo de la corrida (334.30)."],
          ["Caja de 1 gang sin abrazadera para cable", "Asegura dentro de 8 in (excepción del 314.17(C))."],
          ["Qué tan apretado", "Firme — nunca tan apretado que corte el forro. Métela derecha."],
          ["Cables apilados", "Varios home runs en un solo montante solo con un apilador de cables (stacker) clasificado. Nunca dupliques una grapa común."],
          ["Tamaños típicos de grapa", "Una grapa pequeña de un solo cable es para un 14/2, 12/2, 14/3 o 12/3. Una grapa grande o ancha es para un 10/2, 10/3 u 8/2 — gana la clasificación en la caja."],
          ["Amarres (zip ties)", "Un amarre con montaje de tornillo puede apoyar un manojo (home runs del ático, área del panel, bajo voltaje) — un apoyo, no un atajo para no engrapar. Negro es para exterior / UV, blanco es para interior. Aprieta firme, nunca aplastes, recorta la cola."],
        ],
      },
      { type: "diagram", id: "nailplate" },
      {
        type: "table",
        caption: "Protección y armado",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["Placas de clavos (kick plates)", "Acero calibre 16 (al menos 1/16 in) donde el borde de un hoyo o muesca está a menos de 1¼ in de la cara de la estructura (300.4(A)). Los montantes perforados al centro no necesitan placa. En una casa de bloque, las placas a menudo van donde el cable cruza una tira de enrasado (furring strip) cerca de la cara."],
          ["Dentro de la caja", "Forro al menos ¼ in dentro de la caja (314.17). Al menos 6 in de cable libre, con 3 in más allá de la cara de la caja (300.14)."],
          ["Corridas rectas", "En las paredes: horizontales o verticales con la estructura, bajadas a plomo hasta la caja, sin diagonales, sin rollos. Vueltas cuadradas y deliberadas."],
        ],
      },
      {
        type: "do",
        items: ["Lee lo impreso en el forro antes de tirar. Cobre 14 con 15A, cobre 12 con 20A (NEC 240.4(D)).", "Si la casa necesita una alimentación a una isla, usa UF o THWN-2 en conduit — nunca NM bajo tierra."],
      },
      {
        type: "never",
        items: [
          "Nunca pongas 14 AWG en un breaker de 20A.",
          "Nunca tires cable de derivación de aluminio o aluminio revestido de cobre desde esta guía. Detente y pregunta.",
          "Nunca engrapes tan apretado que cortes el forro. Nunca saltes una placa de clavos que el 300.4 exige.",
        ],
      },
    ],
  },
  {
    id: "panel",
    title: "Home runs y el área del panel",
    blurb: "Cómo tirar y etiquetar los home runs, el espacio de trabajo del panel y la conexión a tierra.",
    tags: ["panel", "home run", "label", "meter", "gec", "ufer", "ground rod", "110.26", "230.85", "working space"],
    sections: [
      { type: "lead", text: "Los ayudantes no trabajan en un panel energizado ni quitan un deadfront. Puedes etiquetar home runs, mantener el área despejada y fotografiar un panel cerrado si te lo piden. La caja, el espacio de trabajo y la tierra tienen que estar correctos en el rough-in." },
      { type: "diagram", id: "panel" },
      {
        type: "table",
        caption: "Home runs",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["Camino", "Los home runs y las corridas de 240V van en diagonal por el ático. Traza cada home run de regreso al panel en el plano antes de tirar."],
          ["Etiquetas", "Etiqueta cada home run en el extremo del panel con el número de circuito y el cuarto, exactamente como dice el horario del panel — p. ej. «12 – Encimera de la cocina». Marcador sobre cinta en el forro, lo bastante claro para leerse en una foto. Las etiquetas van antes de que el cable entre a la caja."],
          ["Conectores", "Un cable por conector. Nunca metas dos a la fuerza bajo uno solo."],
          ["Números", "No renumeres circuitos ni cambies breakers. Un cambio de campo aprobado por el foreman se marca en rojo en el juego de campo."],
        ],
      },
      {
        type: "table",
        caption: "Panel, medidor y tierra",
        headers: ["Artículo", "Qué revisar"],
        rows: [
          ["Equipo nuevo", "Un meter-main Siemens de 200A (a menudo un MM0202B1200) y un panel Siemens de 200A de 30 espacios, según el plano. Los paneles Square D existentes llevan breakers Square D."],
          ["Espacio de trabajo", "30 in de ancho (o el ancho del panel), 36 in de profundidad y 6½ ft de altura, mantenido despejado (110.26(A))."],
          ["Dónde no puede ir el panel", "No en un baño, un clóset de ropa ni sobre escalones (240.24(D), (E) y (F))."],
          ["Desconexión de emergencia", "Una desconexión de emergencia exterior, etiquetada “EMERGENCY DISCONNECT, SERVICE DISCONNECT” (NEC 230.85)."],
          ["Conexión a tierra", "Estándar de Sharma, según el plano: dos varillas de 5/8 in × 8 ft, abrazaderas tipo acorn, GEC de cobre desnudo #4, puente de unión entre sistemas (intersystem bonding bridge). Un Ufer cuenta solo cuando los planos o la zapata realmente tengan uno. Une cada electrodo presente (250.50, 250.52). La tubería metálica de agua se une dentro de 5 ft de la entrada donde aplica el 250.68(C). El CSST se une según el fabricante y el código de gas combustible de Florida."],
          ["Protección contra sobretensiones", "Un SPD Tipo 1 o Tipo 2 en la acometida — integrado al equipo de acometida o inmediatamente al lado (NEC 230.67). Sigue el plano."],
        ],
      },
      {
        type: "do",
        items: ["Cuenta los home runs etiquetados contra el horario del panel antes de darlo por terminado.", "Mantén bebidas, recortes y cable sobrante fuera del panel."],
      },
      {
        type: "never",
        items: ["Nunca trabajes en un panel energizado abierto. Nunca toques las barras colectoras, los terminales ni los conductores de acometida.", "Nunca dejes un panel abierto y te vayas.", "Nunca lleves un home run de 15A a una caja de baño."],
      },
    ],
  },
  {
    id: "smoke",
    title: "Humo y CO",
    blurb: "Dónde van las cajas, cómo se interconectan y la caja de clavar de 1 gang.",
    tags: ["smoke", "co", "carbon", "alarm", "detector", "interconnect", "14/3", "R314", "R315"],
    sections: [
      { type: "lead", text: "Las cajas de humo y CO se ponen en el rough-in. Acierta las ubicaciones ahora — moverlas después del drywall es doloroso." },
      { type: "diagram", id: "ri-smoke" },
      {
        type: "table",
        caption: "Ubicaciones",
        headers: ["Alarma", "Dónde"],
        rows: [
          ["Humo", "En cada recámara, fuera de cada área de dormir y en cada piso (FBC R314.3). Al menos 3 ft de una puerta de baño o de un registro de suministro."],
          ["CO", "Dentro de 10 ft de cada recámara cuando la casa tiene un aparato que quema combustible o un garaje adjunto (F.S. 553.885, FBC R315)."],
        ],
      },
      {
        type: "table",
        caption: "Cómo las cablea Sharma",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["La caja", "Una caja de clavar de 1 gang — no una caja redonda."],
          ["El circuito", "Un circuito de área de 15A (sin interruptor, AFCI en el breaker). Una alimentación de energía a un solo detector; los demás se encadenan en 14/3 para que si uno suena, todos suenen."],
        ],
      },
      {
        type: "do",
        items: ["Pon una caja en cada ubicación del plano, y agrega las que el Código exija si se pasó una recámara.", "Mantén la interconexión en 14/3 y no pongas interruptor al circuito de humo."],
      },
      {
        type: "never",
        items: ["No uses una caja redonda de ventilador o de luz para una alarma de humo.", "No pongas una caja de humo dentro de 3 ft de una puerta de baño o de un registro de suministro.", "No dejes el CO fuera de una casa con garaje adjunto o un aparato de gas."],
      },
    ],
  },
  {
    id: "lowvoltage",
    title: "Bajo voltaje",
    blurb: "Rough-in de datos, TV y timbre — mantenido lejos de los cables de potencia.",
    tags: ["low voltage", "data", "tv", "doorbell", "thermostat", "725", "CM", "CL2"],
    sections: [
      { type: "lead", text: "Tira bajo voltaje solo donde esté en el alcance y en el plano. En un takeoff eléctrico estándar de Sharma, el cable del termostato no está incluido a menos que alguien lo haya agregado." },
      { type: "diagram", id: "ri-lowvoltage" },
      {
        type: "table",
        caption: "Rough-in de bajo voltaje",
        headers: ["Artículo", "Qué hacer"],
        rows: [
          ["Cajas", "Cajas para dispositivos o anillos en los puntos planeados de datos, TV y timbre."],
          ["Cable", "Usa cable clasificado para el uso (CM/CMR, CL2/CL3, o en conduit)."],
          ["Apoyo", "Apóyalo y protégelo. Las placas de clavos van donde sea que el cable esté dentro de 1¼ in de la cara del montante."],
          ["Separación", "Mantén el cable de bajo voltaje fuera de las cajas y canalizaciones de potencia a menos que se use una barrera clasificada. Mantén 2 in de los cables de potencia (725.136, 800.133)."],
          ["Etiquetas", "Etiqueta los cables de datos y TV en ambos extremos. Monta y conecta a tierra un panel de medios estructurado (structured-media) si el plano tiene uno."],
          ["Penetraciones", "Entuba y sella el cable exterior. Sello cortafuego donde se requiera."],
        ],
      },
      {
        type: "do",
        items: ["Sigue el plano para las bajadas de cámaras, timbre y datos.", "Mantén las corridas de bajo voltaje tan limpias y rectas como las de potencia."],
      },
      {
        type: "never",
        items: ["No tires cable de termostato a menos que el plano o tu foreman lo tenga en el alcance.", "No metas cable de datos en una caja de potencia.", "No saltes las placas de clavos en bajo voltaje solo porque no es 120V."],
      },
    ],
  },
  {
    id: "gfci",
    title: "GFCI / AFCI por cuarto",
    blurb: "Dónde pertenecen la protección contra choques y contra fallas de arco — en el breaker en los trabajos de Sharma.",
    tags: ["gfci", "afci", "dual-function", "210.8", "210.12", "breaker", "by room"],
    sections: [
      { type: "lead", text: "El GFCI protege a las personas contra choques eléctricos. El AFCI protege contra incendios por arcos peligrosos. En las casas nuevas de Sharma el estándar son los breakers de doble función AFCI/GFCI en el panel, no los receptáculos GFCI, a menos que el plano o el foreman diga otra cosa." },
      { type: "diagram", id: "gfci-afci" },
      {
        type: "table",
        caption: "Dónde se planea (mapa simple)",
        headers: ["Cuarto o área", "Protección típica"],
        rows: [
          ["Cocinas, baños, lavandería, garajes, exteriores, y dentro de 6 ft de lavabos o tinas", "GFCI, más AFCI donde también aplique el 210.12. Los circuitos de receptáculos de cocina, lavandería, baño, garaje y exterior son de 20A."],
          ["Receptáculo de servicio de HVAC requerido por el 210.63", "GFCI requerido, incluso en un ático seco (210.8(E)). Provisto en el breaker en los trabajos de Sharma."],
          ["Cuartos familiares, comedor, sala, estudios, recámaras, clósets, pasillos y cuartos similares", "AFCI en los circuitos de 120V de 15A y 20A (210.12(A))."],
          ["Condensador / AC", "Un breaker estándar de 2 polos hasta el MOCP — nunca GFCI. El equipo de HVAC listado y etiquetado está exento del GFCI para receptáculos exteriores bajo el FBC-R E3408.1, Excepción N.º 2 al NEC 210.8(F)."],
          ["Estufa y secadora eléctrica", "Breakers GFCI de 2 polos, según el estándar de la compañía y el plano."],
        ],
      },
      { type: "note", text: "El plano puede mostrar un símbolo GFCI en un receptáculo. Eso normalmente sigue significando protección — en los trabajos de Sharma esa protección típicamente es el breaker de doble función, no un dispositivo GFCI en la pared. Sigue el plano y a tu foreman. Ve el NEC 210.8(A) y el 210.12(A)." },
      {
        type: "do",
        items: ["Revisa que el horario del panel marque AFCI / GFCI (o doble función) para cada circuito.", "Si un breaker se dispara después, avisa al foreman. No lo puentes."],
      },
      {
        type: "never",
        items: ["Nunca puentes un GFCI o un AFCI.", "Nunca pongas un breaker GFCI en el condensador.", "No asumas que cada marca «GFCI» en el plano es un receptáculo GFCI."],
      },
    ],
  },
  {
    id: "inspect",
    title: "Lista de verificación para la inspección",
    blurb: "Recorre esto con tu foreman, toma fotos en la app de la cuadrilla y luego usa Inspection Prep para marcar la casa como lista.",
    tags: ["inspection", "checklist", "photos", "inspect", "ready", "walkthrough"],
    sections: [
      { type: "lead", text: "No pidas la inspección hasta que puedas marcar honestamente cada punto. Usa Inspection Prep para recorrer la lista oficial de Rough-in Eléctrico y marcar la casa como lista." },
      { type: "link", href: "https://sharma-inspect.sharma-crew.workers.dev", label: "Abrir Inspection Prep", note: "Usa la lista de verificación de Rough-in Eléctrico. Las fotos en la app de la cuadrilla llevan la marca de agua de la compañía." },
      { type: "diagram", id: "photos" },
      {
        type: "table",
        caption: "Cajas, cable y circuitos",
        headers: ["Revisión", "Qué buscar"],
        rows: [
          ["Cajas", "Coinciden con los planos. Cajas clasificadas para ventilador en cada ventilador. La profundidad se ajusta al drywall. Receptáculos de pared a 18 in hasta la parte inferior de la caja a menos que los planos digan otra cosa. Interruptores a 48 in al centro. Encimeras según el plano o el foreman."],
          ["Espaciado y receptáculos requeridos", "Reglas de pared, encimera, isla, baño, pasillo, vestíbulo, lavandería, garaje y exterior — ve las páginas de cada cuarto."],
          ["Grapas y placas", "NM dentro de 12 in de cada caja y cada 4½ ft (8 in en una caja de 1 gang sin abrazadera). Placas de clavos donde los hoyos están a menos de 1¼ in de la cara."],
          ["Armado", "6 in libres, 3 in más allá de la cara, forro ¼ in dentro de la caja. Tierras empalmadas y armadas. Cajas metálicas unidas (bonded). Neutros en las ubicaciones de interruptores. Capacidad de la caja correcta."],
          ["Circuitos", "Dos circuitos de 20A de aparatos pequeños (cocina, despensa, desayuno, comedor, nevera); lavandería de 20A; baño de 20A; garaje de 20A. Corridas dedicadas de aparatos según el plano. Llegadas de 240V tiradas. Nada de NM bajo una losa."],
          ["Ático", "Dentro de 6 ft de un scuttle sin escaleras permanentes: NM por los lados de las vigas o la estructura (o por hoyos perforados), nunca suelto sobre las partes superiores. Sin tiras protectoras, sin zona sin cables, dispositivos sin mover. Luz del ático al lado del scuttle, con interruptor en la entrada."],
        ],
      },
      {
        type: "table",
        caption: "Humo, panel y cierre",
        headers: ["Revisión", "Qué buscar"],
        rows: [
          ["Humo / CO", "Cajas en cada recámara, fuera de las áreas de dormir, en cada piso; CO donde se requiera; interconexión en un circuito AFCI sin interruptor."],
          ["Panel y acometida", "Espacio de trabajo despejado. Ningún panel en un baño, clóset o sobre escalones. Home runs etiquetados. Tierra lista. Desconexión de emergencia etiquetada. SPD Tipo 1 o 2 en la acometida (230.67). Circuitos y desconexiones de HVAC tirados."],
          ["Cierre", "Cajas exteriores y de garaje listas para intemperie. Hoyos espumados o con sello cortafuego. Sitio limpio. Recorrido del foreman hecho. Tarjeta del permiso y planos en el sitio."],
        ],
      },
      {
        type: "table",
        caption: "Fotos — cada fase, por la app de la cuadrilla",
        headers: ["Fotografía", "Qué capturar"],
        rows: [
          ["Permiso", "Caja o tarjeta del permiso colocada"],
          ["Acometida", "Medidor y acometida, tierra (varillas, GEC, puente de unión), panel interior con los home runs etiquetados"],
          ["Protección", "Espuma o sellado, placas de clavos y enrasado, alimentaciones de isla o UF"],
          ["Equipo", "Cada ubicación de 240V, armado ordenado de cajas de interruptores, ubicaciones de humo / CO"],
          ["Problemas", "Puntos con problemas, marcados con cinta y anotados, antes de que se cubran"],
        ],
      },
      {
        type: "do",
        items: ["Recorre la lista en voz alta con tu foreman. ¿No puedes marcar una línea? No estás listo.", "Sube las fotos en la app de la cuadrilla — con marca de agua de la compañía, licencias, fecha/hora (del Este) y dirección."],
      },
      {
        type: "never",
        items: ["No pidas la inspección con etiquetas faltantes, placas faltantes o una casa sucia.", "No uses fotos personales sin marca de agua como registro del trabajo."],
      },
    ],
  },
  {
    id: "mistakes",
    title: "Errores comunes",
    blurb: "Los fallos que reprueban inspecciones — baratos de hacer bien ahora, caros después del drywall.",
    tags: ["mistakes", "fail", "callback", "forgot", "wrong", "classic"],
    sections: [
      { type: "lead", text: "Aprende esta lista y ahorrarás retrabajos e inspecciones reprobadas." },
      { type: "diagram", id: "ri-mistakes" },
      {
        type: "table",
        caption: "Los que vemos una y otra vez",
        headers: ["#", "El error"],
        rows: [
          ["1", "Caja no al ras de la pared terminada — prepárala para el grosor del drywall."],
          ["2", "Sin grapa dentro de 12 in de una caja, o más de 4½ ft entre grapas."],
          ["3", "Falta la placa de clavos donde el hoyo está a menos de 1¼ in de la cara del montante."],
          ["4", "El forro del cable se queda corto — menos de ¼ in dentro de la caja."],
          ["5", "Menos de 6 in de cable libre en la caja, o menos de 3 in más allá de su cara."],
          ["6", "Caja sobrecargada."],
          ["7", "Cable equivocado en el breaker — el 14 AWG de cobre en un 20A es el clásico. 14 en 15A, 12 en 20A."],
          ["8", "Tierras sin armar, o sin unir a una caja metálica."],
          ["9", "Falta un receptáculo requerido — encimera, baño, exterior, garaje, lavandería, pasillo o vestíbulo."],
          ["10", "Home runs sin etiquetar en el panel — o dos cables bajo un conector."],
          ["11", "Un home run de 15A llegado a una caja de baño."],
          ["12", "Un ventilador en una caja que no está clasificada para ventilador, o una alarma de humo en una caja redonda."],
          ["13", "Alturas adivinadas: interruptores fuera del estándar de Sharma de 48 in al centro, o una altura de encimera inventada en vez de tomada del plano o del foreman."],
          ["14", "Un circuito de aparatos pequeños alimentando un receptáculo exterior, o una nevera en su propio circuito cuando el plano no lo dijo."],
          ["15", "NM bajo tierra o bajo una losa — o una cercha cortada para que una tirada encaje."],
          ["16", "NM suelto sobre las partes superiores de las vigas dentro de 6 ft de un scuttle — o una zona sin cables / dispositivos movidos en el scuttle."],
          ["17", "Receptáculos del comedor en un circuito de área de 15A en vez de un circuito de aparatos pequeños."],
        ],
      },
      {
        type: "do",
        items: ["Si no estás seguro, detente y pregunta. Una pregunta es más barata que abrir una pared."],
      },
      {
        type: "never",
        items: ["Nunca adivines una altura, un tamaño de cable o una llegada de 240V.", "Nunca cubras un problema esperando que nadie lo vea — márcalo con cinta, anótalo y avisa a tu foreman."],
      },
    ],
  },
];

export const ROUGHIN_ANSWERS = [
  { id: "ri-order", title: "Trabaja una casa en orden", answer: "Recorre y marca, instala el meter-main y las cajas del panel, instala las cajas (incluidas las del tocador y las de humo/CO), perfora, tira los circuitos, tira el 240V, engrapa y pon placas de clavos, arma las tierras, etiqueta los home runs, instala la tierra, entuba la acometida, luego recorre la lista de verificación y toma fotos.", topic: "start", tags: ["order", "sequence", "steps"] },
  { id: "ri-plan-wins", title: "El plano siempre gana", answer: "Si esta guía y el plano no coinciden, sigue el plano y pregunta a tu foreman. Si la casa y el plano no coinciden, detente, avisa a tu foreman y no muevas cajas por tu cuenta.", topic: "start", tags: ["plan", "conflict", "drawing"] },
  { id: "ri-18", title: "Los receptáculos de pared van a 18 pulgadas hasta la parte inferior de la caja cuando los planos no lo especifican", answer: "Cuando los planos no especifican una altura, los receptáculos de pared van a 18 pulgadas hasta la parte inferior de la caja. Los interruptores van a 48 pulgadas al centro (estándar de Sharma). La altura de los receptáculos de encimera no tiene un número por defecto — es según el plano o el foreman.", topic: "boxes", tags: ["18", "height", "receptacle", "bottom"] },
  { id: "ri-no-height-guess", title: "Los interruptores van a 48 pulgadas al centro — no adivines la altura de la encimera", answer: "Los interruptores van a 48 pulgadas al centro de la caja en los trabajos de Sharma, a menos que el plano muestre otra altura. La altura de los receptáculos de encimera no tiene un número estándar — es solo según el plano o el foreman.", topic: "boxes", tags: ["switch height", "counter", "48"] },
  { id: "ri-cu", title: "Cobre 14 AWG en 15A, 12 AWG en 20A — CCA un tamaño más grande", answer: "Sharma corre cobre y CCA. Cobre: el 14 AWG se protege a 15 amperios, el 12 AWG a 20 amperios. El CCA se dimensiona un AWG más grande: 12 AWG en 15A, 10 AWG en 20A. CCA: usa los terminales de tornillo, nunca los hoyos de presión. Las tuercas para cable deben decir AL-CU. Pregunta a tu líder si no estás seguro. Los terminales de tornillo normales de los dispositivos de 15/20A están bien con CCA — el CO/ALR es solo para aluminio puro. Nunca pongas 14 AWG en un breaker de 20A. El líder decide qué cable lleva un trabajo — los ayudantes nunca lo cambian por su cuenta. Nunca uses las conexiones traseras de presión.", topic: "wire", tags: ["copper", "14", "12", "cca", "aluminum", "10"] },
  { id: "ri-staple", title: "Engrapa dentro de 12 pulgadas, u 8 si no hay abrazadera", answer: "Asegura el NM dentro de 12 pulgadas de la mayoría de las cajas y al menos cada 4½ pies (NEC 334.30). Si una caja de 1 gang no tiene abrazadera para cable, asegura dentro de 8 pulgadas (excepción del 314.17(C)). No aplastes el forro.", topic: "wire", tags: ["staple", "12", "8", "4.5"] },
  { id: "ri-plate", title: "Placa de clavos si está a menos de 1¼ pulgada", answer: "Agrega una placa de clavos de acero cuando el borde de un hoyo o muesca está a menos de 1¼ pulgada de la cara de la estructura (NEC 300.4(A)).", topic: "wire", tags: ["nail plate", "kick plate", "1.25"] },
  { id: "ri-free", title: "6 pulgadas de cable libre, ¼ pulgada de forro", answer: "Deja al menos 6 pulgadas de conductor libre, con 3 pulgadas más allá de la cara de la caja (300.14). El forro del NM debe extenderse al menos ¼ pulgada dentro de la caja (314.17).", topic: "boxes", tags: ["6 inch", "300.14", "sheath", "314.17"] },
  { id: "ri-bath-home", title: "Nunca lleves un home run de 15A a una caja de baño", answer: "Lleva un home run de 15A a la primera caja fuera del baño. Un circuito de receptáculos de baño de 20A puede correr como home run directo al baño.", topic: "baths", tags: ["bathroom", "home run", "15a"] },
  { id: "ri-fridge", title: "La nevera va en un circuito de aparatos pequeños", answer: "En los trabajos de Sharma, la nevera está en uno de los dos circuitos de 20A de aparatos pequeños que sirven los receptáculos de la cocina, la despensa, el área de desayuno y el comedor. No lleva su propio circuito dedicado a menos que el plano lo diga (la Excepción N.º 2 del 210.52(B)(1) permite un circuito individual de nevera de 15A o más). Esos circuitos no deben alimentar receptáculos exteriores (210.52(B)(2)).", topic: "kitchen", tags: ["fridge", "refrigerator", "small-appliance"] },
  { id: "ri-sa", title: "Dos circuitos de cocina de 20A para aparatos pequeños", answer: "Una vivienda necesita al menos dos circuitos de 20A para aparatos pequeños con cobre 12 AWG (NEC 210.11(C)(1)). Sirven los receptáculos de la cocina, la despensa, el área de desayuno y el comedor — incluidos los receptáculos de encimera — más la nevera (210.52(B)). La nevera comparte uno de ellos a menos que el plano le dé un circuito individual. Estos circuitos no deben alimentar ningún otro receptáculo y no deben alimentar receptáculos exteriores (210.52(B)(2)).", topic: "kitchen", tags: ["kitchen", "20a", "counter"] },
  { id: "ri-island", title: "Las alimentaciones de isla nunca son NM", answer: "Una isla o península necesita al menos un receptáculo por los primeros 9 sq ft (o fracción) de encimera, y uno más por cada 18 sq ft adicionales o fracción. En una península, al menos un receptáculo debe estar dentro de 2 ft del extremo exterior (NEC 210.52(C)(2)). La alimentación bajo losa o subterránea debe ser UF o THWN-2 en conduit — nunca NM (300.9, 334.12(B)(4)).", topic: "kitchen", tags: ["island", "uf", "underground"] },
  { id: "ri-240box", title: "Solo la secadora y la estufa llevan caja de receptáculo de 240V", answer: "La secadora lleva una caja de receptáculo de 240V. La estufa a veces, y puede ser de montaje superficial. El calentador de agua, el condensador de AC y la manejadora de aire se cablean directo o corren a una desconexión — sin caja de receptáculo.", topic: "hvac", tags: ["240", "dryer", "range", "water heater", "disconnect"] },
  { id: "ri-smoke-loc", title: "Humo en cada recámara, fuera del área de dormir, en cada piso", answer: "Las alarmas de humo van en cada recámara, fuera de cada área de dormir y en cada piso (FBC R314.3), no dentro de 3 ft de una puerta de baño o de un registro de suministro. Usa una caja de clavar de 1 gang, no una caja redonda. Una alimentación de energía en un circuito de área AFCI de 15A sin interruptor; encadena las demás en 14/3.", topic: "smoke", tags: ["smoke", "bedroom", "14/3"] },
  { id: "ri-co", title: "CO dentro de 10 pies de las recámaras cuando se requiere", answer: "Se requiere una alarma de CO dentro de 10 ft de cada recámara si la casa tiene un aparato que quema combustible o un garaje adjunto (F.S. 553.885, FBC R315).", topic: "smoke", tags: ["co", "carbon monoxide", "garage", "gas"] },
  { id: "ri-label", title: "Etiqueta los home runs antes de que entren a la caja", answer: "Etiqueta cada home run en el panel con el número de circuito y el cuarto, coincidiendo con el horario del panel. Escríbelo en cinta sobre el forro. Un cable por conector. No renumeres breakers.", topic: "panel", tags: ["label", "home run", "connector"] },
  { id: "ri-workspace", title: "El espacio de trabajo del panel es 30 por 36 por 6½", answer: "Mantén 30 pulgadas de ancho (o el ancho del panel), 36 pulgadas de profundidad y 6½ pies de altura despejados frente al panel (110.26(A)). No pongas un panel en un baño, un clóset de ropa o sobre escalones.", topic: "panel", tags: ["110.26", "working space", "closet"] },
  { id: "ri-hvac-rec", title: "Receptáculo de servicio de HVAC dentro de 25 pies", answer: "Un receptáculo de servicio de 125V debe estar dentro de 25 ft del condensador o la manejadora de aire, en el mismo nivel, y no en el lado de carga de la desconexión del equipo (NEC 210.63). Requiere protección GFCI (210.8(E)). El equipo en el ático también necesita una luz en la unidad o cerca de ella, con interruptor en la entrada del ático (210.70(A)(3) y FBC-R M1305.1.3.1). Pon la luz habitual del ático justo al lado del scuttle, con interruptor en la entrada. Las corridas de 240V de HVAC van a una desconexión, no a una caja de receptáculo.", topic: "hvac", tags: ["210.63", "service receptacle", "attic"] },
  { id: "ri-lv", title: "Mantén el bajo voltaje a 2 pulgadas de la potencia", answer: "El cable de bajo voltaje se mantiene fuera de las cajas de potencia a menos que se use una barrera clasificada, y se mantiene al menos 2 pulgadas de los cables de potencia (725.136, 800.133). No tires cable de termostato a menos que esté en el alcance.", topic: "lowvoltage", tags: ["low voltage", "data", "thermostat"] },
  { id: "ri-dual", title: "Sharma usa breakers de doble función", answer: "En las casas nuevas, la protección AFCI y GFCI normalmente es un breaker de doble función en el panel, no un receptáculo GFCI, a menos que el plano o el foreman diga otra cosa. Nunca pongas un breaker GFCI en el condensador.", topic: "gfci", tags: ["dual-function", "gfci", "afci"] },
  { id: "ri-spacing", title: "El espaciado en paredes es 6 pies, en encimeras 24 pulgadas", answer: "Ningún punto a lo largo de una pared de 2 ft o más ancha debe estar a más de 6 ft de un receptáculo (210.52(A)). En una encimera de 12 in o más ancha, ningún punto debe estar a más de 24 in de un receptáculo (210.52(C)(1)).", topic: "boxes", tags: ["spacing", "6 ft", "24 in", "210.52"] },
  { id: "ri-attic-run", title: "Los home runs van en diagonal en el ático", answer: "Los home runs y las corridas de 240V van en diagonal por el ático, una sola línea limpia hasta la bajada. Las demás corridas del ático se mantienen paralelas o perpendiculares a las cerchas. Dentro de 6 ft de un scuttle que no tiene escaleras permanentes, corre el NM por los lados de las vigas o la estructura, o por hoyos perforados — nunca suelto sobre las partes superiores (NEC 320.23(A) y (B) vía 334.23). No uses tiras protectoras, no crees una zona sin cables y no muevas dispositivos. Nunca cortes una cercha.", topic: "attic", tags: ["diagonal", "attic", "scuttle"] },
  { id: "ri-block", title: "De corte, de bracket o de clavar — depende de la pared", answer: "La estructura de madera lleva cajas de clavar. Las paredes exteriores y los garajes en una casa de bloque llevan cajas de corte. La cara interior de una pared de bloque lleva una caja de bracket.", topic: "boxes", tags: ["cut-in", "bracket", "block", "nail-on"] },
  { id: "ri-fan", title: "Los ventiladores necesitan una caja para ventilador; el humo necesita una de 1 gang", answer: "Un ventilador de techo necesita una caja clasificada para ventilador. Una alarma de humo o CO lleva una caja de clavar de 1 gang, no una caja redonda.", topic: "boxes", tags: ["fan", "smoke box"] },
  { id: "ri-photos", title: "Las fotos van en la app de la cuadrilla antes de pedir la inspección", answer: "Fotografía el permiso, la acometida y la tierra, el panel etiquetado, las placas de clavos, las llegadas de 240V, el humo/CO y cualquier punto con problemas. Las fotos oficiales van por la app de la cuadrilla para que tengan marca de agua. Luego recorre Inspection Prep.", topic: "inspect", tags: ["photos", "inspection prep"] },
];

export function roughinPageById(id) {
  return ROUGHIN_PAGES.find((p) => p.id === id) || null;
}

export function answersForRoughin(id) {
  return ROUGHIN_ANSWERS.filter((a) => a.topic === id);
}
