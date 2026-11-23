import { ROUGHIN_PAGES, ROUGHIN_ANSWERS } from "./roughin.es.js";

/* Guía de campo del Rough-In Residencial — Sharma Electric & HVAC.
   Referencia en lenguaje simple para ayudantes en construcción nueva residencial en Florida.
   Contenido en revisión por el electricista maestro de Sharma. */

export const BANNER =
  "Contenido en revisión por el electricista maestro de Sharma; sigue a tu foreman y los planos.";

export const REVIEWED =
  "Revisado por el electricista maestro de Sharma. Sigue a tu foreman y los planos.";

export const LIC = "Sharma Electric & HVAC · Lic. EC13013924 · CAC1823596";

export const TOPICS = [
  {
    id: "wire",
    title: "Tamaños de cable",
    blurb: "14 con 15A, 12 con 20A, colores, y cómo leer el forro.",
    tags: ["wire", "cable", "nm-b", "nmb", "romex", "awg", "gauge", "14", "12", "10", "15a", "20a", "30a", "colors", "black", "white", "red", "neutral", "ground", "14/2", "12/2", "14/3", "12/3"],
    sections: [
      { type: "lead", text: "Lo que dice el forro del cable te dice el tamaño y cuántos cables lleva dentro. El tamaño del breaker tiene que coincidir con el tamaño del cable." },
      { type: "diagram", id: "wire-pair" },
      {
        type: "table",
        caption: "Tamaños de NM-B (Romex) que verás más seguido",
        headers: ["Cable", "Breaker", "Uso típico en nuestras casas"],
        rows: [
          ["14 AWG", "15A", "Luces, ventiladores y receptáculos generales de pared (circuitos de área)"],
          ["12 AWG", "20A", "Receptáculos de cocina para aparatos pequeños, lavandería, baños, garaje, y lavavajillas / triturador / campana"],
          ["10 AWG", "30A", "Algunos calentadores de agua, condensadores o secadoras — sigue el plano"],
          ["8 o 6 AWG", "Según el plano", "Estufas y cargas más grandes — sigue el plano y al foreman"],
        ],
      },
      {
        type: "table",
        caption: "Cómo leer el forro",
        headers: ["Lo impreso", "Significa"],
        rows: [
          ["12/2 w/ground", "Dos cables aislados (negro, blanco) más una tierra desnuda, 12 AWG"],
          ["12/3 w/ground", "Tres cables aislados (negro, rojo, blanco) más una tierra, 12 AWG"],
          ["14/2 o 14/3", "La misma idea, pero 14 AWG — úsalo solo en circuitos de 15A"],
        ],
      },
      { type: "diagram", id: "colors" },
      {
        type: "table",
        caption: "Colores del cable",
        headers: ["Color", "Normalmente"],
        rows: [
          ["Negro, rojo o azul", "Vivo (el conductor sin conexión a tierra, hot)"],
          ["Blanco o gris", "Neutro — no lo uses como vivo a menos que el foreman te haga re-identificarlo"],
          ["Desnudo o verde", "Tierra del equipo — nunca lo uses como neutro"],
        ],
      },
      {
        type: "do",
        items: [
          "Que el breaker coincida con el cable: 14 AWG con 15A, 12 AWG con 20A.",
          "Lee el forro antes de tirar o conectar un cable.",
          "Pregunta al foreman si un tamaño no está en el plano o se ve mal.",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca pongas 14 AWG en un breaker de 20A.",
          "Nunca uses la tierra desnuda o verde como neutro.",
          "Nunca adivines el tamaño de un alimentador o de un aparato — revisa el plano.",
        ],
      },
      { type: "note", text: "El emparejamiento 15A / 14 AWG y 20A / 12 AWG viene de la regla de conductores pequeños del NEC 240.4(D). En los trabajos de Sharma, los circuitos de área de 15A llevan juntos las luces, los ventiladores y los receptáculos generales de un área. El 20A se usa donde el Código lo exige." },
    ],
  },
  {
    id: "heights",
    title: "Alturas de cajas",
    blurb: "Los receptáculos de pared van a 18 pulgadas hasta la parte inferior de la caja cuando los planos no dicen. Los interruptores van a 48 pulgadas al centro. Las encimeras siguen el plano.",
    tags: ["height", "heights", "box", "receptacle", "outlet", "switch", "counter", "18", "inches", "center", "kitchen", "device height"],
    sections: [
      { type: "lead", text: "Los receptáculos se miden hasta la PARTE INFERIOR de la caja. Los interruptores se miden hasta el CENTRO. Si los planos muestran una altura, usa los planos. Si no, usa las reglas de abajo y confirma con tu foreman." },
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
        type: "do",
        items: [
          "Usa 18 pulgadas hasta la parte inferior de la caja para los receptáculos normales de pared cuando los planos no dicen nada.",
          "Pon los interruptores a 48 pulgadas al centro, a menos que el plano muestre otra altura.",
          "Mantén una corrida de receptáculos nivelada y uniforme.",
          "Pregunta al foreman si estás midiendo desde el subpiso o desde el piso terminado.",
        ],
      },
      {
        type: "never",
        items: [
          "No inventes un número para la altura de los receptáculos de encimera. Esa es solo según el plano o el foreman.",
          "No mezcles alturas en la misma pared a menos que el plano lo pida.",
        ],
      },
    ],
  },
  {
    id: "gfci",
    title: "Dónde va GFCI / AFCI",
    blurb: "El GFCI protege contra choques eléctricos. El AFCI protege contra incendios por arcos peligrosos. Aprende dónde va cada uno.",
    tags: ["gfci", "afci", "gfi", "gfp", "arc", "fault", "dual-function", "breaker", "kitchen", "bath", "garage", "outdoor", "laundry", "reset", "trip"],
    sections: [
      { type: "lead", text: "Dos protecciones diferentes, a menudo en un solo breaker. Si un breaker se dispara, avisa a tu foreman. No lo puentes." },
      { type: "diagram", id: "gfci-afci" },
      {
        type: "table",
        caption: "Qué hace cada uno",
        headers: ["Dispositivo", "Protege contra", "En palabras simples"],
        rows: [
          ["GFCI", "Fallas a tierra (choque eléctrico)", "La corriente sale por el vivo y no regresa por el neutro — por ejemplo, a través de una persona o del agua."],
          ["AFCI", "Arcos peligrosos (incendio)", "Un cable dañado o aplastado, o una conexión floja, empieza a hacer arco dentro de una pared o un cordón."],
          ["Breaker de doble función", "Ambos", "Un solo breaker en el panel que hace GFCI y AFCI a la vez."],
        ],
      },
      {
        type: "table",
        caption: "Dónde lo verás normalmente",
        headers: ["Protección", "Lugares típicos (sigue el plano y el código vigente)"],
        rows: [
          ["GFCI", "Cocinas, baños, garajes, exteriores, lavandería y otras áreas mojadas o húmedas (NEC 210.8)."],
          ["AFCI", "Muchos de los circuitos de la vivienda en una casa (NEC 210.12)."],
        ],
      },
      {
        type: "do",
        items: [
          "En las casas nuevas de Sharma el estándar son los breakers de doble función AFCI/GFCI, no los receptáculos GFCI, a menos que el plano o el foreman diga otra cosa.",
          "Si un breaker o un GFCI se dispara, detente y avisa al foreman.",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca puentes, tapes ni «arregles» un GFCI o AFCI que se dispara.",
          "Nunca reinicies un breaker una y otra vez para seguir trabajando. Algo está mal.",
          "No cambies por tu cuenta a un receptáculo GFCI. En los trabajos de Sharma, la protección GFCI viene del breaker en el panel — si la protección se ve mal, avisa al foreman.",
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Herramientas",
    blurb: "Herramientas de mano de todos los días, probadores, y cómo usar un medidor sin adivinar.",
    tags: ["tools", "meter", "multimeter", "tester", "pliers", "strippers", "lineman", "voltage", "continuity", "leads", "com"],
    sections: [
      { type: "lead", text: "Usa la herramienta correcta, mantenla en buen estado, y nunca confíes en un probador que no acabas de comprobar." },
      { type: "diagram", id: "meter" },
      {
        type: "table",
        caption: "Herramientas de mano que llevarás",
        headers: ["Herramienta", "Se usa para"],
        rows: [
          ["Pinzas de electricista (lineman's)", "Torcer, cortar y jalar"],
          ["Pinzas de corte diagonal (dikes)", "Cortes limpios en los conductores"],
          ["Pinzas de punta (needle-nose)", "Cajas apretadas y formar ganchos"],
          ["Pelacables", "Quitar el aislamiento sin morder el cobre"],
          ["Destornilladores y desarmadores de tuercas", "Dispositivos, placas y terminales — usa herramientas aisladas cerca de partes vivas"],
          ["Cinta métrica y nivel", "Alturas de cajas y filas de dispositivos rectas"],
          ["Guía pasacables (fish tape)", "Pasar cable por paredes o conduit, según te indiquen"],
        ],
      },
      {
        type: "table",
        caption: "Probadores",
        headers: ["Probador", "Qué es"],
        rows: [
          ["Probador de voltaje sin contacto (tick tracer)", "Solo una primera revisión — no es la última palabra"],
          ["Multímetro", "Mide voltaje, y a menudo continuidad o resistencia"],
          ["Probador de receptáculos", "Revisa la polaridad y la tierra en un receptáculo conectado"],
        ],
      },
      {
        type: "do",
        items: [
          "Comprueba tu probador en una fuente viva conocida, prueba el circuito, y vuelve a comprobar el probador.",
          "Cable negro en COM, cable rojo en V cuando midas voltaje.",
          "Empieza en un rango alto si el medidor no es de rango automático.",
        ],
      },
      {
        type: "never",
        items: [
          "No midas continuidad ni resistencia en un circuito con corriente.",
          "No trates un probador muerto como si fuera un circuito muerto.",
          "Si no sabes cómo tomar una lectura, pregunta. No adivines.",
        ],
      },
    ],
  },
  {
    id: "safety",
    title: "Seguridad",
    blurb: "Bloqueo y etiquetado, EPP, escaleras, probar antes de tocar, el calor, y mantenerte fuera del panel.",
    tags: ["safety", "loto", "lockout", "tagout", "ppe", "glasses", "ladder", "fiberglass", "heat", "attic", "test", "touch", "panel", "deadfront", "shock"],
    sections: [
      { type: "lead", text: "Nada en el trabajo vale un choque eléctrico, una caída o una enfermedad por calor. Si no estás seguro, detente y pregunta al foreman." },
      { type: "diagram", id: "prove" },
      {
        type: "table",
        caption: "Las reglas que te mantienen seguro",
        headers: ["Tema", "Recuerda"],
        rows: [
          ["Bloqueo / etiquetado (LOTO)", "Bloquéalo, etiquétalo y luego pruébalo. Solo la persona que puso el candado puede quitarlo."],
          ["EPP (PPE)", "Lentes de seguridad todo el día. Botas de trabajo, no tenis. Guantes para jalar o para bordes filosos. Casco cuando otros trabajan arriba de ti."],
          ["Escaleras", "Usa fibra de vidrio cerca del trabajo eléctrico, no aluminio. Ángulo de 4 a 1. Tres puntos de contacto. No te pares en la tapa superior."],
          ["Probar antes de tocar", "Comprueba el probador, prueba el circuito, comprueba el probador otra vez. Nunca confíes en una etiqueta ni en que «alguien dijo que está apagado»."],
          ["Calor", "Los áticos de Florida se ponen peligrosos. Toma agua, descansa a la sombra y avisa al foreman a la primera señal de mareo, náusea o confusión."],
          ["El panel", "Los ayudantes no quitan un deadfront ni trabajan en un panel energizado. Mantente atrás cuando esté abierto."],
        ],
      },
      { type: "diagram", id: "panel" },
      {
        type: "do",
        items: [
          "Trata cada circuito como si tuviera corriente hasta que lo hayas probado.",
          "En construcción nueva, nunca asumas que el panel está muerto.",
          "Sostén una lámpara, trae herramientas o fotografía un panel cerrado si te lo piden.",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca toques las barras colectoras, los terminales (lugs) ni los conductores de acometida.",
          "Nunca dejes un panel abierto y te vayas.",
          "Nunca trabajes en un panel con las manos mojadas o parado en agua.",
          "Nunca subas una escalera dañada ni te estires de más — mueve la escalera.",
        ],
      },
    ],
  },
  {
    id: "roughin",
    title: "Rough-in",
    blurb: "Engrapado, perforación, placas de clavos, cajas, y qué fotografiar antes del drywall.",
    tags: ["rough", "rough-in", "roughin", "staple", "securing", "support", "drill", "stud", "nail plate", "kick plate", "truss", "box fill", "fan box", "12 inches", "4.5", "8 inches"],
    sections: [
      { type: "lead", text: "El rough-in es después de la estructura y antes del aislamiento y el drywall. Aquí es cuando se ponen las cajas, se tira y se engrapa el cable, y el inspector revisa. Las fotos de ahora evitan una demolición después." },
      { type: "diagram", id: "staple" },
      {
        type: "table",
        caption: "Engrapado y sujeción del cable NM (NEC 334.30)",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["La mayoría de las cajas", "Asegura el cable dentro de las 12 pulgadas de la caja"],
          ["A lo largo de la corrida", "Apoyo al menos cada 4½ pies"],
          ["Caja de plástico sin abrazadera para cable", "Asegura dentro de las 8 pulgadas de la caja"],
          ["Qué tan apretado", "Firme — no tan apretado que la grapa corte el forro"],
        ],
      },
      { type: "diagram", id: "nailplate" },
      {
        type: "table",
        caption: "Perforación y protección",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["Dónde perforar", "Al centro del montante cuando puedas"],
          ["Placas de clavos (kick plates)", "Se requieren cuando el borde de un hoyo o muesca está a menos de 1¼ pulgada de la cara de la estructura (NEC 300.4)"],
          ["Cerchas", "Nunca cortes ni hagas muescas en una cercha. Detente y avisa al foreman."],
        ],
      },
      {
        type: "table",
        caption: "Cajas",
        headers: ["Regla", "Qué hacer"],
        rows: [
          ["Que queden accesibles", "Nunca entierres una unión en una pared o techo (NEC 314.29)"],
          ["Ventiladores de techo", "Un ventilador necesita una caja clasificada para ventilador — una caja normal de techo no basta"],
          ["Capacidad de la caja", "Cada cable, dispositivo y abrazadera ocupa espacio (NEC 314.16). Si se ve llena, usa una caja más grande o pregunta."],
        ],
      },
      {
        type: "do",
        items: [
          "Toma fotos claras de las cajas, las corridas y las áreas con problemas antes del drywall. Usa la app de la cuadrilla para que tengan marca de agua.",
          "Usa la grapa del tamaño correcto para el cable. No apiles cables bajo una sola grapa a menos que esa grapa esté clasificada para eso.",
        ],
      },
      {
        type: "never",
        items: [
          "Nunca entierres un empalme ni una caja.",
          "Nunca cortes una cercha ni un elemento estructural por tu cuenta.",
          "Nunca fuerces un dispositivo en una caja llena.",
        ],
      },
    ],
  },
  {
    id: "trim",
    title: "Trim (acabado)",
    blurb: "Dispositivos, colores de tornillos, lazos de servicio, pruebas y listas de fotos.",
    tags: ["trim", "trim-out", "device", "receptacle", "switch", "plate", "brass", "silver", "pigtail", "service loop", "photo", "watermark", "crew app"],
    sections: [
      { type: "lead", text: "El trim-out es después del drywall y la pintura. Se ponen los dispositivos, van las placas y todo se prueba. La casa debe verse limpia cuando te vayas." },
      { type: "diagram", id: "device" },
      {
        type: "table",
        caption: "Colores de tornillos en un receptáculo o interruptor",
        headers: ["Tornillo", "Recibe"],
        rows: [
          ["Latón", "Vivo"],
          ["Plata", "Neutro"],
          ["Verde", "Tierra"],
        ],
      },
      {
        type: "table",
        caption: "Cómo armar un dispositivo",
        headers: ["Paso", "Cómo"],
        rows: [
          ["Ganchos", "Envuelve el cable en el sentido de las agujas del reloj alrededor del tornillo para que al apretar se cierre el gancho"],
          ["Tierras", "Haz pigtails con las tierras"],
          ["En la caja", "Deja un lazo de servicio para que el dispositivo pueda salir después sin quedar tenso"],
          ["Placas", "Dispositivo a ras y derecho para que la placa asiente plana y no se mueva"],
          ["Prueba", "Revisa la polaridad y la tierra en cada receptáculo, según indique el foreman"],
        ],
      },
      { type: "diagram", id: "photos" },
      {
        type: "table",
        caption: "Lista de fotos — cada fase lleva fotos",
        headers: ["Cuándo", "Qué fotografiar"],
        rows: [
          ["Rough-in", "Cajas, corridas de cable, placas de clavos, el área del panel y cualquier cosa inusual"],
          ["Inspecciones", "Lo que verá el inspector, más cualquier corrección"],
          ["Trim y final", "Dispositivos terminados, placas y el trabajo completo"],
        ],
      },
      {
        type: "do",
        items: [
          "Usa la app de la cuadrilla para las fotos oficiales del trabajo. Les pone marca de agua con el nombre de la compañía, los números de licencia, la fecha y la hora (del Este) y la dirección.",
          "Toma fotos claras y bien iluminadas. Toma más, no menos.",
          "Avisa al foreman de inmediato si muerdes un cable, rompes una placa o dañas una superficie.",
        ],
      },
      {
        type: "never",
        items: [
          "No uses las conexiones de presión traseras («stab») a menos que el dispositivo esté clasificado para ese uso. Prefiere los tornillos o las abrazaderas clasificadas.",
          "No envíes fotos no oficiales y sin marca de agua como registro del trabajo.",
          "No dejes recortes, tornillos ni pedazos de cable en el piso.",
        ],
      },
    ],
  },
  {
    id: "glossary",
    title: "Glosario",
    blurb: "Significados simples de las palabras que escucharás en el trabajo.",
    tags: ["glossary", "terms", "definitions", "words", "dictionary"],
    sections: [
      { type: "lead", text: "Toca una palabra en la búsqueda principal, o revisa la lista de abajo. Si un término se usa diferente en tu trabajo, sigue a tu foreman." },
    ],
  },
];

export const ANSWERS = [
  { id: "14-15", title: "El 14 AWG va en un breaker de 15A", answer: "El cable calibre 14 se protege a 15 amperios. Úsalo en circuitos de área de 15A (luces, ventiladores, receptáculos generales). Nunca pongas 14 AWG en un breaker de 20A.", topic: "wire", tags: ["14", "15a", "15 amp", "awg", "breaker", "wire size"] },
  { id: "12-20", title: "El 12 AWG va en un breaker de 20A", answer: "El cable calibre 12 se protege a 20 amperios. Usos típicos: circuitos de cocina para aparatos pequeños, lavandería, receptáculos de baño, garaje, y lavavajillas / triturador / campana.", topic: "wire", tags: ["12", "20a", "20 amp", "kitchen", "laundry"] },
  { id: "no-14-on-20", title: "Nunca pongas 14 AWG en un breaker de 20A", answer: "El breaker tiene que coincidir con el cable. El 14 AWG solo se puede proteger a 15 amperios (NEC 240.4(D)). Si el circuito es de 20A, tiene que ser 12 AWG o más grande.", topic: "wire", tags: ["14", "20a", "mismatch", "too small", "overfuse"] },
  { id: "read-jacket", title: "Cómo leer 12/2 w/ground", answer: "El 12 es el tamaño del cable (AWG). El 2 significa dos conductores aislados (normalmente negro y blanco). «W/ground» significa que también lleva una tierra desnuda del equipo. El 12/3 agrega un cable rojo, que se usa a menudo para interruptores de 3 vías (3-way).", topic: "wire", tags: ["12/2", "14/2", "12/3", "14/3", "romex", "jacket", "nm-b"] },
  { id: "colors", title: "Colores del cable: vivo, neutro, tierra", answer: "Negro, rojo o azul normalmente es el vivo. Blanco o gris es el neutro. Desnudo o verde es la tierra del equipo. Nunca uses la tierra como neutro.", topic: "wire", tags: ["color", "black", "white", "green", "bare", "hot", "neutral", "ground"] },
  { id: "rec-height", title: "La altura de los receptáculos de pared es 18 pulgadas hasta la parte inferior de la caja cuando los planos no lo especifican", answer: "Cuando los planos no especifican una altura, los receptáculos de pared van a 18 pulgadas hasta la parte inferior de la caja. Confirma si estás midiendo desde el subpiso o desde el piso terminado.", topic: "heights", tags: ["18", "outlet height", "receptacle height", "box height", "bottom"] },
  { id: "switch-height", title: "Los interruptores van a 48 pulgadas al centro", answer: "Estándar de Sharma: los interruptores quedan a 48 pulgadas al centro de la caja. Si el plano muestra otra altura, gana el plano.", topic: "heights", tags: ["switch height", "switch box", "48"] },
  { id: "counter-height", title: "Los receptáculos de encimera son según el plano o el foreman", answer: "Los receptáculos de cocina y de otras encimeras no tienen una altura por defecto en esta guía. Usa el plano o pregunta al foreman.", topic: "heights", tags: ["counter", "kitchen outlet", "backsplash"] },
  { id: "gfci-is", title: "El GFCI protege a las personas contra choques eléctricos", answer: "Un GFCI vigila si la corriente sale por el vivo y no regresa por el neutro. Se dispara para proteger a una persona. Áreas típicas: cocinas, baños, garajes, exteriores y lavandería. Ve el NEC 210.8 y sigue el plano.", topic: "gfci", tags: ["gfci", "gfi", "shock", "ground fault"] },
  { id: "afci-is", title: "El AFCI protege contra incendios por arcos", answer: "Un AFCI busca arcos peligrosos de cables dañados o conexiones flojas que pueden iniciar un incendio. Muchos circuitos de la casa lo necesitan. Ve el NEC 210.12.", topic: "gfci", tags: ["afci", "arc", "fire"] },
  { id: "dual-function", title: "Sharma usa breakers de doble función", answer: "En las casas nuevas de Sharma el estándar son los breakers de doble función AFCI/GFCI en el panel, no los receptáculos GFCI, a menos que el plano o el foreman diga otra cosa.", topic: "gfci", tags: ["dual", "breaker", "company", "receptacle"] },
  { id: "no-bypass", title: "Nunca puentes un GFCI o un AFCI", answer: "Un disparo es una advertencia. Avisa al foreman. No lo reinicies una y otra vez, no lo tapes ni lo puentes para poder seguir trabajando.", topic: "gfci", tags: ["bypass", "trip", "reset"] },
  { id: "test-touch", title: "Prueba antes de tocar", answer: "Comprueba tu probador en una fuente viva conocida, prueba el circuito y vuelve a comprobar el probador. Un probador muerto se ve igual que un circuito muerto. No confíes solo en la etiqueta de un breaker.", topic: "safety", tags: ["test", "touch", "prove", "meter", "live"] },
  { id: "loto", title: "Solo tú puedes quitar tu candado", answer: "La persona que pone un candado de bloqueo es la única que puede quitarlo. Bloquéalo, etiquétalo y luego pruébalo antes de trabajar.", topic: "safety", tags: ["lockout", "tagout", "loto", "lock"] },
  { id: "ladder", title: "Usa una escalera de fibra de vidrio cerca del trabajo eléctrico", answer: "No uses aluminio cerca del trabajo eléctrico. Pon una escalera de extensión en un ángulo de 4 a 1 (1 pie hacia afuera por cada 4 pies de altura). Mantén tres puntos de contacto. No te pares en la tapa superior.", topic: "safety", tags: ["ladder", "fiberglass", "aluminum", "4-to-1"] },
  { id: "heat", title: "Enfermedad por calor: detente y avisa al foreman", answer: "Los áticos de Florida se calientan peligrosamente. Toma agua antes de tener sed. Mareo, náusea, dolor de cabeza o confusión significa detenerte de inmediato y avisar a tu foreman. No te aguantes.", topic: "safety", tags: ["heat", "attic", "water", "hot", "heat stroke"] },
  { id: "panel", title: "Los ayudantes se mantienen fuera del panel", answer: "No quites un deadfront ni trabajes en un panel energizado. Nunca toques las barras colectoras, los terminales ni los conductores de acometida. Mantente atrás cuando el panel esté abierto, a menos que el foreman te llame y sea seguro.", topic: "safety", tags: ["panel", "deadfront", "bus", "breaker box", "service"] },
  { id: "staple-12", title: "Engrapa el NM dentro de 12 pulgadas de la mayoría de las cajas", answer: "Asegura el cable NM dentro de 12 pulgadas de la mayoría de las cajas y al menos cada 4½ pies a lo largo de la corrida (NEC 334.30). Si una caja de plástico no tiene abrazadera para cable, asegura dentro de 8 pulgadas. No engrapes tan apretado que cortes el forro.", topic: "roughin", tags: ["staple", "12", "4.5", "8 inch", "support", "secure"] },
  { id: "nail-plate", title: "Placa de clavos si está a menos de 1¼ pulgada", answer: "Si el borde de un hoyo perforado o una muesca está a menos de 1¼ pulgada de la cara del montante o la placa, agrega una placa de clavos de acero (kick plate). Eso es el NEC 300.4.", topic: "roughin", tags: ["nail plate", "kick plate", "1.25", "1 1/4", "drill", "300.4"] },
  { id: "no-truss", title: "Nunca cortes una cercha", answer: "No cortes, hagas muescas ni perfores una cercha u otro elemento estructural por tu cuenta. Detente y avisa al foreman. El constructor tiene que aprobar cualquier modificación.", topic: "roughin", tags: ["truss", "cut", "structural", "attic"] },
  { id: "no-bury", title: "Nunca entierres una unión", answer: "Cada empalme tiene que quedar en una caja accesible con tapa. No escondas una unión en una pared, un techo o el aislamiento del ático (NEC 314.29).", topic: "roughin", tags: ["junction", "splice", "bury", "accessible", "box"] },
  { id: "fan-box", title: "Un ventilador de techo necesita una caja clasificada para ventilador", answer: "Una caja normal de techo no basta para un ventilador. Usa una caja clasificada para soportar ventiladores de techo.", topic: "roughin", tags: ["fan", "ceiling box", "listed"] },
  { id: "screws", title: "Latón es vivo, plata es neutro, verde es tierra", answer: "En un receptáculo o interruptor, el tornillo de latón recibe el vivo, el de plata recibe el neutro y el verde recibe la tierra. Engancha el cable en el sentido de las agujas del reloj alrededor del tornillo.", topic: "trim", tags: ["brass", "silver", "green", "screw", "hot", "neutral", "polarity"] },
  { id: "service-loop", title: "Deja un lazo de servicio en la caja", answer: "Deja un lazo extra y ordenado de cable en la caja para que el dispositivo pueda salir después para servicio sin quedar tenso ni arrancar un empalme.", topic: "trim", tags: ["service loop", "extra wire", "make up"] },
  { id: "photos", title: "Cada fase lleva fotos en la app de la cuadrilla", answer: "Toma fotos en el rough-in, las inspecciones, el trim y el final. Las fotos oficiales del trabajo van por la app de la cuadrilla, que les pone marca de agua con el nombre de la compañía, los números de licencia, la fecha y la hora (del Este) y la dirección.", topic: "trim", tags: ["photo", "pictures", "watermark", "crew app", "camera"] },
  { id: "tick-tracer", title: "Un tick tracer es solo una primera revisión", answer: "Un probador de voltaje sin contacto puede sugerir que algo tiene corriente, pero no es la última palabra. Confirma con un medidor y el método comprobar–probar–comprobar.", topic: "tools", tags: ["tick", "non-contact", "ncvt", "tester"] },
  { id: "com-lead", title: "El cable negro del medidor va en COM", answer: "Para voltaje, el cable negro va en COM y el cable rojo va en la entrada V. No midas continuidad en un circuito con corriente.", topic: "tools", tags: ["com", "leads", "meter", "multimeter"] },
  { id: "glasses", title: "Los lentes de seguridad se quedan puestos todo el día", answer: "Usa lentes de seguridad todo el día, no solo cuando estás cortando o perforando. Agrega un casco cuando otros oficios trabajen arriba de ti.", topic: "safety", tags: ["ppe", "glasses", "eye", "hard hat"] },
];

export const GLOSSARY = [
  { term: "AFCI", def: "Interruptor de circuito por falla de arco. Un dispositivo que se dispara cuando detecta arcos peligrosos que pueden iniciar un incendio." },
  { term: "Circuito de área", def: "En los trabajos de Sharma, un circuito de 15A que lleva juntos las luces, los ventiladores y los receptáculos generales de un área." },
  { term: "AWG", def: "American Wire Gauge. El tamaño del cable. Un número más pequeño es un cable más grueso (el 12 es más grueso que el 14)." },
  { term: "Capacidad de la caja (box fill)", def: "El espacio que ocupan los cables, los dispositivos y las abrazaderas en una caja. Una caja llena a reventar es una falla y un peligro (NEC 314.16)." },
  { term: "Barra colectora (bus bar)", def: "Las barras metálicas vivas dentro de un panel que alimentan los breakers. Los ayudantes no las tocan." },
  { term: "Deadfront", def: "La tapa de un panel que esconde las partes vivas. Los ayudantes no la quitan." },
  { term: "Dispositivo", def: "Un interruptor, receptáculo, dimmer o artículo similar que se monta en una caja." },
  { term: "Breaker de doble función", def: "Un breaker de panel que da protección AFCI y GFCI a la vez. El estándar habitual de Sharma en casas nuevas." },
  { term: "Tierra del equipo", def: "El cable desnudo o verde que une el metal y los dispositivos de regreso al panel para la corriente de falla. No es un neutro." },
  { term: "GFCI", def: "Interruptor de circuito por falla a tierra. Un dispositivo que se dispara para proteger a las personas contra choques eléctricos." },
  { term: "Home run", def: "El cable que corre desde el panel (o un punto de alimentación) hasta la primera caja de un circuito." },
  { term: "Vivo (hot)", def: "El conductor sin conexión a tierra. Normalmente negro, rojo o azul. Es el cable que tiene corriente cuando el circuito está encendido." },
  { term: "Placa de clavos (kick plate / nail plate)", def: "Una placa de acero que protege el cable donde un hoyo o una muesca está demasiado cerca de la cara de la estructura." },
  { term: "LOTO", def: "Bloqueo / etiquetado (lockout / tagout). Bloquea y etiqueta un circuito como apagado, luego pruébalo, antes de trabajar. Solo tú quitas tu candado." },
  { term: "Anillo de yeso (mud ring)", def: "Un anillo sobre una caja cuadrada que deja el dispositivo al ras de la superficie terminada de la pared." },
  { term: "Neutro", def: "El conductor conectado a tierra. Normalmente blanco o gris. Lleva la corriente de regreso a la fuente en operación normal." },
  { term: "Caja de obra nueva (new-work box)", def: "Una caja de clavar que se usa cuando las paredes aún están abiertas, antes del drywall." },
  { term: "NM-B (Romex)", def: "Cable con forro no metálico que se usa en trabajo residencial seco. El forro está marcado con el tamaño y la cantidad de cables." },
  { term: "Caja de corte (old-work box)", def: "Una caja que se instala después de cerrar la pared, con orejas o abrazaderas que agarran el drywall." },
  { term: "Pigtail", def: "Un cable puente corto que conecta varios cables a un solo tornillo; se usa a menudo en las tierras o en una caja llena." },
  { term: "Polaridad", def: "Vivo en el latón, neutro en la plata, tierra en el verde. La polaridad invertida es una falla." },
  { term: "Receptáculo", def: "Un enchufe de pared (outlet). El dispositivo donde conectas aparatos." },
  { term: "Rough-in", def: "La etapa después de la estructura y antes del drywall, cuando se instalan y se inspeccionan las cajas y el cable." },
  { term: "Lazo de servicio", def: "Cable extra que se deja en una caja para que un dispositivo pueda salir después para servicio." },
  { term: "Circuito de aparatos pequeños", def: "Un circuito de 20A que sirve los receptáculos de la cocina, la despensa, el área de desayuno y el comedor, incluidos los receptáculos de encimera. En los trabajos de Sharma, la nevera va en uno de estos. Estos circuitos no deben alimentar ningún otro receptáculo y no deben alimentar receptáculos exteriores (NEC 210.52(B)). Una vivienda necesita al menos dos de ellos (210.11(C)(1))." },
  { term: "Stab-back", def: "Conexiones de presión en la parte trasera de un dispositivo. No las uses a menos que el dispositivo esté clasificado para eso. Prefiere tornillos o abrazaderas clasificadas." },
  { term: "Tick tracer", def: "Un probador de voltaje sin contacto. Útil como primera revisión, no como la última palabra." },
  { term: "Traveler", def: "Los cables que corren entre interruptores de 3 vías o 4 vías, a menudo en 14/3 o 12/3." },
  { term: "Trim-out", def: "La etapa después del drywall y la pintura, cuando se hacen los dispositivos, las placas y las pruebas finales." },
  { term: "Ufer", def: "Un electrodo de tierra encerrado en concreto en la zapata. Úsalo solo cuando los planos o la zapata realmente tengan uno." },
  { term: "Scuttle", def: "La abertura de acceso al ático. Dentro de 6 ft de un scuttle que no tiene escaleras permanentes, corre el NM por los lados de las vigas o la estructura, o por hoyos perforados — nunca suelto sobre las partes superiores (NEC 320.23(A) y (B) vía 334.23). No uses tiras protectoras (guard strips), no crees una zona sin cables y no muevas dispositivos." },
  { term: "Meter-main", def: "La combinación exterior de medidor y desconexión de acometida, normalmente una caja Siemens de 200A en una casa nueva de Sharma." },
  { term: "Interruptor de 3 vías (3-way switch)", def: "Un interruptor que controla una luz desde dos lugares. Normalmente se cablea con 14/3 o 12/3." },
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
