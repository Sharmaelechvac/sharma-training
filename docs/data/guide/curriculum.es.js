/* Cuestionarios de práctica para la Guía de Rough-In Residencial. Edición de GitHub: los cuestionarios se ejecutan en este dispositivo. */

export const PASS_PCT = 80;

export const MODULES = [
  {
    id: "safety",
    number: 1,
    title: "Seguridad",
    recap: "Bloqueo y etiquetado, EPP, escaleras de fibra de vidrio, probar antes de tocar, el calor de Florida y mantenerse fuera del panel. Si no estás seguro, detente y pregunta.",
    topicId: "safety",
    quiz: [
      { id: "s1", q: "¿Quién puede quitar un candado de bloqueo?", choices: ["Cualquier oficial (journeyman) de la cuadrilla", "Solo la persona que lo puso", "El dueño de la casa", "Cualquiera con el llavero"], answer: 1, explain: "La persona que puso el candado es la única que puede quitarlo." },
      { id: "s2", q: "¿Cuál es el último paso antes de tocar un circuito que crees que está apagado?", choices: ["Leer la etiqueta del breaker", "Preguntar a un compañero si él lo apagó", "Comprobar tu probador, probar el circuito y volver a comprobar el probador", "Mover el interruptor varias veces"], answer: 2, explain: "Un probador muerto se ve como un circuito muerto. Comprueba, prueba, comprueba." },
      { id: "s3", q: "¿Qué escalera debes usar cerca del trabajo eléctrico?", choices: ["Aluminio", "Solo madera, nunca fibra de vidrio", "Fibra de vidrio", "La que esté más cerca"], answer: 2, explain: "Usa una escalera de fibra de vidrio, no de aluminio, cerca del trabajo eléctrico." },
      { id: "s4", q: "Un medidor marca cero. ¿Qué puede significar?", choices: ["El circuito está definitivamente apagado", "El circuito está apagado, o el probador está muerto — comprueba el probador", "El circuito es de 240V", "Cero siempre significa una buena tierra"], answer: 1, explain: "Comprueba el probador en una fuente viva conocida antes de confiar en un cero." },
      { id: "s5", q: "Te sientes mareado y con náusea en un ático caliente. ¿Qué haces?", choices: ["Terminar la corrida y luego descansar", "Tomar bebidas energéticas y seguir", "Detenerte y avisar al foreman de inmediato", "Abrir el panel para que entre más aire"], answer: 2, explain: "La enfermedad por calor es una emergencia en formación. Detente y avisa al foreman." },
      { id: "s6", q: "¿Qué EPP debe quedarse puesto todo el día?", choices: ["Una careta de soldar", "Lentes de seguridad", "Guantes de hule solo a la hora del almuerzo", "Nada si la casa está vacía"], answer: 1, explain: "Los lentes de seguridad se quedan puestos todo el día." },
      { id: "s7", q: "El trabajo de un ayudante en un panel abierto es:", choices: ["Quitar el deadfront y conectar un breaker", "Mantenerse atrás a menos que el foreman te llame y sea seguro", "Apretar cualquier terminal flojo que notes", "Sostener una bebida para el foreman sobre la barra colectora"], answer: 1, explain: "Los ayudantes no trabajan en un panel energizado ni quitan un deadfront." },
      { id: "s8", q: "Por cada 4 pies de altura de la escalera, la base debe quedar aproximadamente:", choices: ["4 pies hacia afuera", "1 pie hacia afuera", "8 pies hacia afuera", "Pegada a la pared"], answer: 1, explain: "Esa es la regla de 4 a 1: 1 pie hacia afuera por cada 4 pies de altura." },
    ],
  },
  {
    id: "tools",
    number: 2,
    title: "Herramientas y medidores",
    recap: "Pinzas de electricista, pelacables y probadores. Un tick tracer es solo una primera revisión. Cable negro en COM. Nunca midas continuidad en un circuito con corriente.",
    topicId: "tools",
    quiz: [
      { id: "t1", q: "Un «tick tracer» sin contacto es:", choices: ["La última palabra de que un circuito está muerto", "Solo una primera revisión, no la última palabra", "Un reemplazo del bloqueo", "Se usa para medir amperios"], answer: 1, explain: "Confirma con un medidor y el método comprobar–probar–comprobar." },
      { id: "t2", q: "Cuando mides voltaje, el cable negro va en:", choices: ["La entrada A", "COM", "La entrada de 10A", "Cualquier entrada está bien"], answer: 1, explain: "Negro en COM, rojo en V." },
      { id: "t3", q: "Debes medir continuidad o resistencia:", choices: ["En un circuito con corriente, para ser minucioso", "Solo en un circuito confirmado apagado", "A través de la barra del panel", "Con ambos cables en V"], answer: 1, explain: "Nunca midas continuidad ni resistencia en un circuito con corriente." },
      { id: "t4", q: "La secuencia comprobar–probar–comprobar es:", choices: ["Probar el circuito y luego guardar el medidor", "Comprobar el probador en una fuente viva conocida, probar el circuito y volver a comprobar el probador", "Golpear el medidor dos veces en la bota", "Leer el breaker y luego tocar el cable"], answer: 1, explain: "Comprobar, probar, comprobar evita que un probador muerto te engañe." },
      { id: "t5", q: "Si no sabes cómo tomar una lectura, debes:", choices: ["Adivinar y anotar un número", "Preguntar al foreman", "Usar el tick tracer y darlo por bueno", "Apagar todos los breakers"], answer: 1, explain: "Pregunta. No adivines." },
      { id: "t6", q: "Las pinzas de electricista (lineman's) son principalmente para:", choices: ["Medir voltaje", "Torcer, cortar y jalar", "Pelar solo 10 AWG", "Doblar EMT exclusivamente"], answer: 1, explain: "Las de electricista son la herramienta de todos los días para torcer, cortar y jalar." },
    ],
  },
  {
    id: "wire",
    number: 3,
    title: "Cable y alambre",
    recap: "14 AWG con 15A, 12 AWG con 20A. Lee el forro. El blanco es neutro, el desnudo o verde es tierra. Nunca pongas 14 AWG en un breaker de 20A.",
    topicId: "wire",
    quiz: [
      { id: "w1", q: "12/2 w/ground significa:", choices: ["Doce cables, dos tierras", "Dos conductores aislados de 12 AWG más una tierra", "14 AWG en un breaker de 20A", "Un cable de 12 pies con 2 receptáculos"], answer: 1, explain: "Tamaño 12, dos cables aislados (normalmente negro y blanco), más una tierra desnuda." },
      { id: "w2", q: "El 14 AWG se protege a:", choices: ["20 amperios", "15 amperios", "30 amperios", "Cualquier breaker que quepa"], answer: 1, explain: "El 14 AWG va con un breaker de 15A (NEC 240.4(D))." },
      { id: "w3", q: "¿Puedes poner 14 AWG en un breaker de 20A?", choices: ["Sí, si la corrida es corta", "Sí, solo en cocinas", "No", "Sí, si duplicas el cable"], answer: 2, explain: "Nunca. El 14 AWG no se puede proteger a 20A." },
      { id: "w4", q: "Un conductor aislado blanco normalmente es el:", choices: ["Vivo", "Neutro", "Tierra del equipo", "Traveler siempre, únicamente"], answer: 1, explain: "Blanco o gris es el neutro a menos que el foreman te haga re-identificarlo." },
      { id: "w5", q: "Un conductor desnudo o verde es la:", choices: ["Neutro", "Vivo", "Tierra del equipo — nunca lo uses como neutro", "Repuesto"], answer: 2, explain: "La tierra no es un neutro." },
      { id: "w6", q: "Los circuitos de cocina para aparatos pequeños normalmente son:", choices: ["15A con 14 AWG", "20A con 12 AWG", "30A con 10 AWG", "Cualquier 14/2 sobrante"], answer: 1, explain: "Esos son circuitos de 20A, así que llevan 12 AWG." },
      { id: "w7", q: "El 14/3 o 12/3 se usa a menudo para:", choices: ["Solo una tierra desnuda", "Interruptores de 3 vías (negro, rojo, blanco, más tierra)", "Entrada de acometida", "Cable de bocinas"], answer: 1, explain: "El conductor aislado extra (normalmente rojo) es la razón por la que el cable de 3 hilos se usa en los de 3 vías." },
      { id: "w8", q: "En los circuitos de área de Sharma (luces, ventiladores, receptáculos generales), la combinación habitual es:", choices: ["12 AWG en 15A", "14 AWG en 15A", "14 AWG en 20A", "10 AWG en 15A"], answer: 1, explain: "Los circuitos de área son de 15A, así que usan 14 AWG." },
    ],
  },
  {
    id: "boxes",
    number: 4,
    title: "Cajas y dispositivos",
    recap: "Las cajas se quedan accesibles. Los ventiladores necesitan una caja clasificada para ventilador. Latón es vivo, plata es neutro, verde es tierra. No fuerces una caja llena.",
    topicId: "roughin",
    quiz: [
      { id: "b1", q: "¿Puedes enterrar una unión en una pared o un techo?", choices: ["Sí, si la encintas bien", "Sí, solo en el aislamiento", "No — las cajas y los empalmes deben quedarse accesibles", "Sí, encima de una tina"], answer: 2, explain: "NEC 314.29: las uniones se quedan accesibles." },
      { id: "b2", q: "Un ventilador de techo debe montarse en:", choices: ["Cualquier caja de techo de plástico", "Una caja clasificada para soportar ventiladores de techo", "Un clavo en la viga", "Un anillo de yeso solo"], answer: 1, explain: "Una caja normal de techo no basta." },
      { id: "b3", q: "En un receptáculo, el tornillo de latón es para el:", choices: ["Neutro", "Tierra", "Vivo", "Solo traveler"], answer: 2, explain: "Latón = vivo, plata = neutro, verde = tierra." },
      { id: "b4", q: "El tornillo de plata es para el:", choices: ["Vivo", "Neutro", "Tierra", "Abrazadera del cable"], answer: 1, explain: "La plata es el neutro." },
      { id: "b5", q: "Si una caja está llena a reventar, debes:", choices: ["Forzar el dispositivo de todos modos", "Usar una caja más grande o preguntar al foreman", "Dejar la tierra fuera para hacer espacio", "Esconder un empalme detrás del drywall"], answer: 1, explain: "La capacidad de la caja importa (NEC 314.16). No lo fuerces." },
      { id: "b6", q: "En los trabajos de Sharma, la protección GFCI para los receptáculos viene de:", choices: ["Un receptáculo GFCI en el primer receptáculo", "Un breaker de doble función en el panel", "Un enchufe GFCI en el cordón de la herramienta", "Solo el meter-main"], answer: 1, explain: "El estándar de Sharma son los breakers de doble función AFCI/GFCI en el panel — no los receptáculos GFCI — a menos que el plano o el foreman diga otra cosa." },
    ],
  },
  {
    id: "roughin",
    number: 5,
    title: "Conceptos básicos del rough-in",
    recap: "Los receptáculos de pared van a 18 pulgadas hasta la parte inferior de la caja cuando los planos no dicen. Los interruptores van a 48 pulgadas al centro. Las encimeras son según el plano o el foreman. Cobre 14/15 y 12/20. Nunca lleves un home run de 15A a una caja de baño. Engrapa dentro de 12 pulgadas (8 si la caja de plástico no tiene abrazadera) y cada 4½ pies.",
    topicId: "roughin",
    quiz: [
      { id: "r1", q: "Cuando los planos no lo especifican, los receptáculos de pared van:", choices: ["12 pulgadas al centro", "18 pulgadas hasta la parte inferior de la caja", "24 pulgadas al centro", "Lo que se vea bien"], answer: 1, explain: "18 pulgadas hasta la parte inferior de la caja, a menos que los planos digan otra cosa." },
      { id: "r2", q: "En los trabajos de Sharma, los interruptores van:", choices: ["48 pulgadas al centro", "42 pulgadas al centro", "52 pulgadas al centro", "Cualquier altura que se vea bien"], answer: 0, explain: "El estándar de Sharma es 48 pulgadas al centro de la caja. Si el plano muestra otra altura, gana el plano." },
      { id: "r3", q: "La altura de los receptáculos de encimera es:", choices: ["8 pulgadas sobre la encimera, siempre", "18 pulgadas hasta la parte inferior de la caja", "Según el plano o el foreman — sin número", "La misma que un receptáculo de pared"], answer: 2, explain: "Las encimeras no tienen una altura por defecto en esta guía." },
      { id: "r4", q: "El cable NM en una caja típica debe asegurarse dentro de:", choices: ["3 pies", "12 pulgadas (8 pulgadas si la caja de plástico no tiene abrazadera)", "6 pies", "Solo a mitad del tramo"], answer: 1, explain: "NEC 334.30: 12 pulgadas normalmente, 8 pulgadas cuando la caja no metálica no tiene abrazadera. También apoyo cada 4½ pies." },
      { id: "r5", q: "Se requiere una placa de clavos de acero cuando un hoyo o muesca está a menos de:", choices: ["3 pulgadas de la cara de la estructura", "1¼ pulgada de la cara de la estructura", "6 pulgadas de la placa de asiento", "Cada vez que perforas un montante"], answer: 1, explain: "NEC 300.4: protege cuando está a menos de 1¼ pulgada." },
      { id: "r6", q: "Si una cercha estorba, debes:", choices: ["Cortar una muesca y seguir", "Perforar un hoyo grande por el pico", "Detenerte y avisar al foreman — nunca cortes una cercha por tu cuenta", "Doblar el cable alrededor y engrapar a la red de la cercha como quepa"], answer: 2, explain: "Nunca cortes ni alteres una cercha sin aprobación." },
      { id: "r7", q: "Las grapas deben estar:", choices: ["Lo más apretadas posible, para morder el cobre", "Firmes, sin cortar el forro", "Opcionales si el cable es corto", "Compartidas libremente, dos cables bajo cualquier grapa"], answer: 1, explain: "Una grapa apretada puede dañar el aislamiento. Usa una grapa clasificada para cables apilados si los apilas." },
      { id: "r8", q: "El rough-in sucede:", choices: ["Después de que seca la pintura", "Después de la estructura y antes del aislamiento y el drywall", "Solo en la inspección final", "Después de que se muda el dueño"], answer: 1, explain: "Las cajas y el cable se ponen mientras las paredes están abiertas." },
      { id: "r9", q: "Un home run de 15A debe:", choices: ["Llegar siempre a la caja del tocador del baño", "Llegar a la primera caja fuera del baño, nunca a una caja de baño", "Empalmarse al circuito de baño de 20A", "Saltarse por completo el pasillo del baño"], answer: 1, explain: "Nunca lleves un home run de 15A a una caja de baño." },
      { id: "r10", q: "En los trabajos de Sharma, la nevera de la cocina:", choices: ["Siempre lleva su propio circuito dedicado", "Va en uno de los circuitos de 20A de aparatos pequeños a menos que el plano diga otra cosa", "Se cablea con 14 AWG en 15A", "Comparte el circuito del receptáculo exterior"], answer: 1, explain: "La nevera comparte un circuito de aparatos pequeños. Esos circuitos no deben alimentar receptáculos exteriores." },
      { id: "r11", q: "La combinación de cables de circuitos derivados es:", choices: ["10 AWG en 20A y 12 AWG en 15A para ambos cables", "Cobre 14 AWG en 15A / 12 AWG en 20A; CCA 12 AWG en 15A / 10 AWG en 20A", "Cualquier tamaño si la corrida es corta", "12 AWG en cada breaker"], answer: 1, explain: "Cobre: 14 AWG con 15A, 12 AWG con 20A. El CCA se dimensiona un AWG más grande: 12 AWG con 15A, 10 AWG con 20A. El líder decide qué cable lleva el trabajo; nunca uses las conexiones traseras de presión." },
      { id: "r12", q: "Una caja para alarma de humo debe ser:", choices: ["Una caja redonda de ventilador", "Una caja de 4 pulgadas clasificada para ventilador", "Una caja de clavar de 1 gang — no una caja redonda", "Omitida hasta el trim"], answer: 2, explain: "El humo y el CO llevan una caja de clavar de 1 gang, no una caja redonda." },
    ],
  },
  {
    id: "trim",
    number: 6,
    title: "Conceptos básicos del trim-out",
    recap: "Engancha los cables en el sentido de las agujas del reloj. Latón vivo, plata neutro, verde tierra. Deja un lazo de servicio. Prueba la polaridad. Las fotos oficiales van en la app de la cuadrilla.",
    topicId: "trim",
    quiz: [
      { id: "tr1", q: "Un gancho alrededor de un terminal de tornillo debe ir:", choices: ["En sentido contrario a las agujas del reloj, para que se suelte", "En el sentido de las agujas del reloj, para que al apretar se cierre el gancho", "Recto bajo el tornillo, sin gancho", "Solo alrededor del tornillo de tierra"], answer: 1, explain: "Apretar un gancho en el sentido de las agujas del reloj jala el cable hacia adentro, no hacia afuera." },
      { id: "tr2", q: "Los tornillos de latón, plata y verde son para:", choices: ["Neutro, vivo, tierra", "Vivo, neutro, tierra", "Tierra, vivo, neutro", "Solo travelers"], answer: 1, explain: "Latón es vivo, plata es neutro, verde es tierra." },
      { id: "tr3", q: "Un lazo de servicio es:", choices: ["Un lazo de cable sobrante en el ático", "Cable extra en la caja para que el dispositivo pueda salir después", "Una etiqueta de bloqueo", "Un botón de prueba GFCI"], answer: 1, explain: "Deja suficiente holgura en la caja para servicio futuro." },
      { id: "tr4", q: "Las conexiones de presión («stab») en un dispositivo son:", choices: ["Siempre preferidas", "Están bien solo en circuitos de 20A", "Solo están bien si el dispositivo está clasificado para ellas — prefiere tornillos o abrazaderas clasificadas", "Requeridas por el Código"], answer: 2, explain: "No uses las de presión a menos que el dispositivo esté clasificado para eso." },
      { id: "tr5", q: "Después de que los dispositivos están puestos, debes:", choices: ["Irte sin probar", "Probar la polaridad y la tierra según indique el foreman", "Pintar las placas", "Poner cada breaker en disparo"], answer: 1, explain: "Prueba el trabajo. Deja la casa limpia." },
      { id: "tr6", q: "El trim-out se hace:", choices: ["Antes del drywall", "Después del drywall y la pintura", "Solo en el panel", "En la oficina de permisos"], answer: 1, explain: "Los dispositivos y las placas se ponen después de que las paredes están terminadas." },
    ],
  },
  {
    id: "gfci",
    number: 7,
    title: "Conceptos de GFCI / AFCI",
    recap: "El GFCI es protección contra choques. El AFCI es protección contra incendios por arcos. El estándar habitual de Sharma son los breakers de doble función. Nunca puentes un disparo.",
    topicId: "gfci",
    quiz: [
      { id: "g1", q: "Un GFCI está hecho para proteger:", choices: ["El transformador de la compañía eléctrica", "A las personas contra choques eléctricos", "Solo el equipo de 240V", "Las cerchas"], answer: 1, explain: "El GFCI vigila la corriente que no regresa por el neutro." },
      { id: "g2", q: "Un AFCI está hecho para proteger contra:", choices: ["Baja presión de agua", "Incendios por arcos peligrosos", "Una batería muerta en una alarma de humo", "Placas demasiado apretadas"], answer: 1, explain: "El AFCI busca arcos que pueden iniciar un incendio." },
      { id: "g3", q: "Si un GFCI o un AFCI se dispara, debes:", choices: ["Puentearlo para que la cuadrilla pueda terminar", "Reiniciarlo repetidamente hasta que se mantenga", "Avisar al foreman y no puentearlo", "Tapear el botón de prueba"], answer: 2, explain: "Un disparo es una advertencia. Nunca lo puentes." },
      { id: "g4", q: "Un breaker de doble función proporciona:", choices: ["Solo AFCI", "Solo GFCI", "AFCI y GFCI a la vez", "Solo protección contra sobretensiones para toda la casa"], answer: 2, explain: "Ambas protecciones en un solo breaker." },
      { id: "g5", q: "En las casas nuevas de Sharma, el estándar habitual es:", choices: ["Receptáculos GFCI en cada receptáculo", "Breakers de doble función, a menos que el plano o el foreman diga otra cosa", "Sin GFCI en las cocinas", "Solo receptáculos AFCI"], answer: 1, explain: "La práctica de la compañía son los breakers de doble función, no una casa llena de receptáculos GFCI, a menos que te digan otra cosa." },
      { id: "g6", q: "La protección GFCI normalmente se requiere en:", choices: ["Solo el ático", "Cocinas, baños, garajes, exteriores y lavandería, entre otras áreas mojadas o húmedas", "Solo los clósets", "Solo el circuito del timbre"], answer: 1, explain: "Sigue el NEC 210.8, el plano y al foreman." },
      { id: "g7", q: "El artículo del Código más citado para GFCI en viviendas es:", choices: ["NEC 110.26", "NEC 210.8", "Solo NEC 680", "NEC 500"], answer: 1, explain: "El 210.8 cubre la protección GFCI de los receptáculos. El 210.12 cubre el AFCI." },
    ],
  },
  {
    id: "panel",
    number: 8,
    title: "Conocimiento del panel",
    recap: "Los ayudantes no quitan un deadfront ni trabajan en un panel energizado. Nunca toques la barra. No dejes un panel abierto y te vayas.",
    topicId: "panel",
    quiz: [
      { id: "p1", q: "Un ayudante debe:", choices: ["Quitar el deadfront para mirar", "Conectar breakers solo si el principal está encendido", "No quitar el deadfront ni trabajar en un panel energizado", "Pararse sobre la caja del panel para alcanzar mejor"], answer: 2, explain: "Mantente fuera del panel a menos que el foreman tenga una tarea segura para ti." },
      { id: "p2", q: "Las barras colectoras, los terminales y los conductores de acometida son:", choices: ["Seguros de tocar si estás descalzo", "Prohibidos — nunca los toques", "Está bien apoyar herramientas en ellos", "Pintados, así que están aislados"], answer: 1, explain: "Esas partes pueden tener corriente y pueden matar." },
      { id: "p3", q: "Si un panel está abierto, debes:", choices: ["Dejarlo abierto e irte a almorzar", "Poner tu bebida sobre la caja", "No dejarlo abierto y marcharte", "Guardar cable sobrante dentro de él"], answer: 2, explain: "No dejes un panel abierto. No pongas bebidas ni herramientas sobre él." },
      { id: "p4", q: "Si no estás seguro de que una tarea del panel es para ti:", choices: ["Probar un terminal y ver", "Detenerte y preguntar al foreman", "Ver un video a mitad del trabajo y luego intentar", "Hacer que otro ayudante observe"], answer: 1, explain: "Detente y pregunta." },
      { id: "p5", q: "¿Cuál de estas es una tarea razonable para un ayudante?", choices: ["Fotografiar un panel cerrado si te lo piden, o traer herramientas", "Quitar el deadfront", "Apretar los terminales principales", "Tocar la barra con un tick tracer sostenido con ambas manos"], answer: 0, explain: "Fotos de un panel cerrado, cargar materiales y mantenerse atrás son apropiados. El trabajo en un panel vivo no lo es." },
    ],
  },
  {
    id: "jobsite",
    number: 9,
    title: "Sitio de trabajo y fotos",
    recap: "Sé respetuoso, limpia y avisa al foreman si algo se daña. Cada fase lleva fotos. Las fotos oficiales van por la app de la cuadrilla para que tengan marca de agua.",
    topicId: "jobsite",
    quiz: [
      { id: "j1", q: "Las fotos oficiales del trabajo deben tomarse:", choices: ["En una app de chat personal sin marca de agua", "En la app de la cuadrilla, para que lleven la marca de agua de la compañía", "Solo al final de todo el trabajo", "Nunca, por privacidad"], answer: 1, explain: "La app de la cuadrilla pone marca de agua a las fotos con la compañía, las licencias, la fecha y la hora, y la dirección." },
      { id: "j2", q: "¿Con qué frecuencia debe la cuadrilla fotografiar el trabajo?", choices: ["Nunca, a menos que haya una queja", "Solo si el constructor lo pide", "Cada fase — rough-in, inspecciones, trim y final", "Una vez al año"], answer: 2, explain: "Cada fase lleva fotos." },
      { id: "j3", q: "La marca de agua en las fotos de la app de la cuadrilla incluye:", choices: ["Precios y el número de Seguro Social del ayudante", "Nombre de la compañía, números de licencia, fecha y hora (del Este) y la dirección", "El número de teléfono del dueño de la casa", "Una foto de archivo de una casa"], answer: 1, explain: "Compañía, licencias, hora y dirección — sin precios." },
      { id: "j4", q: "Si dañas una encimera, un piso o el trabajo de otra persona:", choices: ["Esconderlo y esperar que nadie lo note", "Avisar al foreman de inmediato", "Culpar al pintor", "Publicarlo en un chat de grupo y seguir"], answer: 1, explain: "Avisa al foreman enseguida." },
      { id: "j5", q: "Los recortes de cable y los tornillos deben:", choices: ["Dejarse para el siguiente oficio", "Limpiarse — los recortes de cobre van donde indique el foreman", "Barrerse dentro de una cavidad de la pared", "Apilarse sobre el panel"], answer: 1, explain: "Deja la casa limpia. Guarda el cobre como indique el foreman." },
      { id: "j6", q: "Las fotos personales sin marca de agua del trabajo son:", choices: ["El registro oficial", "Está bien enviarlas al constructor como registro del trabajo", "No son el registro oficial del trabajo — usa la app de la cuadrilla", "Requeridas por el inspector"], answer: 2, explain: "El registro oficial son las fotos con marca de agua de la app de la cuadrilla." },
    ],
  },
  {
    id: "roughin-rooms",
    number: 10,
    title: "Rough-in residencial",
    recap: "Rough-in cuarto por cuarto: reglas de cocina de aparatos pequeños, cajas de 240V, humo y CO, recorrido por el ático, etiquetas del panel y receptáculos de servicio de HVAC.",
    topicId: "roughin-rooms",
    quiz: [
      { id: "rr1", q: "¿Cuántos circuitos de cocina de 20A para aparatos pequeños necesita una casa como mínimo?", choices: ["Uno", "Dos", "Cuatro circuitos de área", "Ninguno si la nevera es de gas"], answer: 1, explain: "Al menos dos circuitos de 20A para aparatos pequeños (NEC 210.11(C)(1)), con cobre 12 AWG." },
      { id: "rr2", q: "¿Puede un circuito de cocina de aparatos pequeños alimentar un receptáculo exterior?", choices: ["Sí, es conveniente", "Sí, si es GFCI", "No (NEC 210.52(B)(2))", "Solo en la puerta trasera"], answer: 2, explain: "Los circuitos de aparatos pequeños no deben alimentar receptáculos exteriores." },
      { id: "rr3", q: "¿Qué cargas de 240V llevan caja de receptáculo en los trabajos de Sharma?", choices: ["Calentador de agua, condensador y manejadora de aire", "La secadora, y la estufa cuando el plano usa un receptáculo (a veces de montaje superficial)", "Cada aparato de 240V", "Solo la manejadora de aire"], answer: 1, explain: "El calentador de agua, el AC y la manejadora de aire se cablean directo o se conectan en una desconexión." },
      { id: "rr4", q: "Se requiere una alarma de CO, dentro de 10 ft de las recámaras, cuando:", choices: ["Cada casa, sin excepciones", "La casa tiene un aparato que quema combustible o un garaje adjunto", "Solo si el comprador paga extra", "Solo en condominios de gran altura"], answer: 1, explain: "F.S. 553.885 y FBC R315: aparatos que queman combustible o un garaje adjunto." },
      { id: "rr5", q: "¿Cómo interconecta Sharma normalmente las alarmas de humo?", choices: ["Cada alarma en su propio circuito de 20A", "Una alimentación de energía a un solo detector en un circuito de área AFCI de 15A sin interruptor; las demás se encadenan en 14/3", "Solo batería, sin interconexión", "Solo inalámbrico, sin caja"], answer: 1, explain: "Una alimentación, interconexión en 14/3, circuito de área AFCI sin interruptor." },
      { id: "rr6", q: "En el ático, los home runs y las corridas de 240V deben:", choices: ["Serpentear de cercha en cercha para usar el cable sobrante", "Ir en diagonal, una sola línea limpia desde el panel hasta la bajada", "Correr siempre en la cuerda inferior en un rollo apretado", "Engraparse al drywall después de que esté puesto"], answer: 1, explain: "Los home runs y el 240V van en diagonal. Las demás corridas del ático siguen las cerchas." },
      { id: "rr7", q: "Un receptáculo de servicio de HVAC debe estar:", choices: ["En la calle", "Dentro de 25 ft de la unidad, en el mismo nivel (NEC 210.63)", "Dentro de la desconexión del condensador", "Omitido si la unidad tiene un látigo"], answer: 1, explain: "Receptáculo de 125V dentro de 25 ft, en el mismo nivel. Las unidades del ático también necesitan una luz con interruptor en la entrada." },
      { id: "rr8", q: "Los home runs deben etiquetarse:", choices: ["Después de que se vaya el inspector", "Solo en una libreta", "En el panel, con el número de circuito y el cuarto, antes de que el cable entre a la caja", "Solo con el primer nombre del ayudante"], answer: 2, explain: "Etiqueta para que coincida con el horario del panel, en el forro, antes de que el cable entre a la caja. Un cable por conector." },
      { id: "rr9", q: "Un panel no puede instalarse:", choices: ["En una pared del garaje", "En un baño, un clóset de ropa o sobre escalones", "En un cuarto de lavandería", "En el primer piso"], answer: 1, explain: "NEC 240.24(D), (E) y (F)." },
      { id: "rr10", q: "El cable de bajo voltaje debe:", choices: ["Meterse en la caja de potencia más cercana para ahorrar tiempo", "Mantenerse fuera de las cajas de potencia y al menos 2 in de los cables de potencia, a menos que se use una barrera clasificada", "Reemplazar el NM para la iluminación", "Nunca llevar una placa de clavos"], answer: 1, explain: "Mantén 2 pulgadas de separación (725.136, 800.133). Las placas de clavos también aplican." },
      { id: "rr11", q: "Una alimentación de cocina a una isla o bajo losa debe ser:", choices: ["NM-B normal, si la corrida es corta", "UF, o THWN-2 en conduit — nunca NM", "14/2 en un breaker de 20A", "Cualquier 12/3 sobrante"], answer: 1, explain: "Nunca NM en conduit subterráneo o bajo losa (300.9, 334.12(B)(4))." },
      { id: "rr12", q: "El breaker del condensador / AC debe ser:", choices: ["Un breaker GFCI, siempre", "Un estándar de 2 polos dimensionado al MOCP de la placa de datos — nunca GFCI", "Un 15A de un polo", "Cualquier 20A sobrante"], answer: 1, explain: "Los condensadores llevan un estándar de 2 polos hasta el MOCP, sin GFCI. El tamaño sale de la placa de datos, no de una adivinanza." },
      { id: "rr13", q: "Dentro de 6 ft de un scuttle que no tiene escaleras permanentes, ¿cómo debes correr el NM?", choices: ["Suelto sobre las partes superiores de las vigas, con tiras protectoras", "Por los lados de las vigas o la estructura, o por hoyos perforados — nunca suelto sobre las partes superiores", "Dejar una zona sin cables de 6 ft y mover los dispositivos", "Solo sobre las vigas si están marcadas"], answer: 1, explain: "NEC 320.23(A) y (B) vía 334.23: corre por los lados o por hoyos perforados. No uses tiras protectoras como método, no crees una zona sin cables y no muevas dispositivos." },
      { id: "rr14", q: "Una isla con 20 sq ft de encimera necesita al menos cuántos receptáculos bajo el NEC 2020 210.52(C)(2)?", choices: ["Uno, porque es más grande que 24 in por 12 in", "Dos — uno por los primeros 9 sq ft, y uno más por los 11 sq ft restantes (una fracción de 18 sq ft)", "Tres, uno por cada 6 sq ft", "Ninguno si las paredes ya tienen receptáculos"], answer: 1, explain: "Al menos un receptáculo por los primeros 9 sq ft o fracción, y uno más por cada 18 sq ft adicionales o fracción. 20 sq ft son 9 más 11, y 11 es una fracción de 18, así que son dos receptáculos." },
    ],
  },
];

/* --- Funciones de ayuda (usadas por app.js) --- */

export function publicModules() {
  return MODULES.map((m) => ({
    id: m.id,
    number: m.number,
    title: m.title,
    recap: m.recap,
    quiz: m.quiz.map((q) => ({ id: q.id, q: q.q, choices: q.choices.slice() })),
  }));
}

export function gradeQuiz(moduleId, answers) {
  const m = MODULES.find((x) => x.id === moduleId);
  if (!m) throw new Error("Módulo desconocido.");
  const list = Array.isArray(answers) ? answers : [];
  let correct = 0;
  const detail = m.quiz.map((q, i) => {
    const chosen = list[i];
    const ok = Number(chosen) === q.answer;
    if (ok) correct++;
    return { id: q.id, chosen: chosen === undefined ? null : Number(chosen), answer: q.answer, correct: ok, explain: q.explain };
  });
  const total = m.quiz.length;
  const pct = Math.round((correct / total) * 100);
  return { moduleId, total, correct, pct, passed: pct >= PASS_PCT, detail };
}

export function moduleById(id) {
  return MODULES.find((m) => m.id === id) || null;
}
