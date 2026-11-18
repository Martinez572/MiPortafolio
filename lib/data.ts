export const profile = {
  name: "Kevin Martinez", initials: "KM", role: "Ingeniero de Software",
  phrase: "Actualmente estudiante de ingenieria de software en 5 semestre",
  email: "kevinmartinezk14@gmail.com", phone: "+57 316 730 7520",
  github: "https://github.com/Martinez572", linkedin: "",
  location: "Pasto, Nariño, Colombia", semester: "Semestre 5", interests: "Tenis, fútbol, Deportivo Pasto",
};
export const nav = [
  { id: "inicio", label: "Inicio" }, { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" }, { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];
export type Project = {
  slug: string;            // va en la dirección: /proyectos/juego-godot
  title: string;
  desc: string;            // frase corta para la tarjeta
  image: string;           // imagen en public/proyectos/
  tags: string[];
  github: string;          // link del repositorio
  download?: string;       // link para descargar el APK o .exe
  downloadLabel?: string;  // texto del botón de descarga
  demo?: string;           // opcional, si alguno tiene versión web
  about: string;           // de qué trata
  problem: string;         // problema que soluciona
  features: string[];      // qué hace
};

export const projects: Project[] = [
  {
    slug: "juego-godot",
    title: "El Ultimo Pastoreo",
    desc: "Juego hecho con Godot. Cuenta en una línea de qué trata.",
    image: "/proyectos/juego.png",
    tags: ["Godot", "GDScript"],
    github: "https://github.com/Martinez572/VideoJuego_ElUltimoPastoreo.git",
    download: "https://github.com/Martinez572/VideoJuego_ElUltimoPastoreo/releases/download/v1.0.0/El.Ultimo.Pastoreo.zip",
    downloadLabel: "Descargar .exe",
    about: "El Último Pastoreo es un videojuego 2D de aventura, supervivencia y gestión. En un mundo post-apocalíptico pacífico, donde la naturaleza ha cubierto las ruinas de la civilización, el jugador es el último pastor sobre la tierra. Su misión es guiar y proteger a su rebaño a través de cuatro biomas (Bosque de Ruinas, Desierto de Chatarra, Valle Helado y Prado Verde) hasta llegar al refugio ecológico conocido como el Prado Verde. La mecánica principal es cuidar al rebaño mientras avanzas: caminar, correr y silbar para reunirlo, evitar peligros ambientales, cruzar pasos estrechos y encontrar zonas de pasto para que las ovejas coman y se recuperen. Cada oveja tiene salud, ánimo y alimento, y se puede perder si se hiere, pasa hambre o se aleja demasiado.",
    problem: "Un videojuego de niveles fijos se vuelve repetitivo y tiene la misma dificultad para todos los jugadores: demasiado fácil para unos y frustrante para otros. Con este proyecto busqué resolverlo usando inteligencia artificial de dos maneras. Un Director de Juego ajusta la dificultad en tiempo real según cómo juega cada persona, y una IA generativa crea niveles nuevos cuando se terminan los niveles por defecto. Así la experiencia se mantiene desafiante pero justa, y el juego no se agota. También resolví un reto técnico: usar la API de una IA sin exponer la clave secreta dentro del juego, mediante un servidor intermedio, y garantizar que el juego siga funcionando con niveles de respaldo si la IA no responde.",
    features: ["Director de Juego (IA adaptativa): mide en tiempo real la salud del rebaño, el ritmo de avance y las pérdidas, y ajusta la dificultad de los tramos: obstáculos, pasos estrechos, peligros y escasez de pasto.", "Niveles generados por IA (Claude): al completar los cuatro biomas, la IA diseña niveles nuevos con su propio nombre, poema, estructura y paisaje (colores, fondo, partículas y estilos), validados por el juego antes de usarse.", "Rebaño con comportamiento orgánico: las ovejas siguen al pastor con una máquina de estados (perseguir, agruparse, pánico leve y pastar) y reaccionan al hambre, a los obstáculos y a los peligros."],
  },
  {
    slug: "app-smartwatch",
    title: "Expositor",
    desc: "Aplicación para reloj inteligente hecha con Android Studio.",
    image: "/proyectos/smartwatch.png",
    tags: ["Android Studio", "Smartwatch"],
    github: "https://github.com/Martinez572/SmartwatchApp.git",
    download: "https://github.com/Martinez572/SmartwatchApp/releases/download/v1.0.0/app-debug.apk",
    downloadLabel: "Descargar APK",
    demo: "https://demoexposicionreloj.vercel.app/",
    about: "Expositor es una app para smartwatch con Wear OS que te acompaña mientras presentas una exposición, una conferencia o un discurso. Antes de empezar, desde el reloj configuras la duración, los avisos por vibración y, si quieres, tus notas organizadas en secciones con palabras clave. Durante la presentación, el reloj muestra el tiempo restante, la sección actual y la palabra clave en la que vas. Para avanzar o retroceder entre palabras basta con deslizar el dedo sobre la pantalla, sin sacar el celular. Al terminar, una IA puede analizar lo que dijiste y darte feedback.",
    problem: "Quien expone suele perder el hilo, pasarse del tiempo o tener que mirar el celular o un papel, lo que rompe el contacto con el público. Expositor da un apoyo discreto en la muñeca: avisa cuánto tiempo queda con vibraciones, sin ruido ni distracciones, y recuerda lo siguiente que hay que decir con solo una palabra o frase corta. Es útil para estudiantes que exponen en clase, profesionales que presentan en reuniones y cualquiera que hable en público y quiera practicar y mejorar.",
    features: ["Configura la exposición: eliges la duración (5, 10, 15 minutos u otra) y defines recordatorios de vibración según el tiempo restante, por ejemplo cuando faltan 5, 3 y 1 minutos. Puedes agregarlos, editarlos, eliminarlos o desactivarlos.", "Te guía durante la presentación: muestra un cronómetro en cuenta regresiva con un anillo de progreso, el nombre de la sección y la palabra clave actual. Cambias de palabra deslizando, y al terminar una sección pasa sola a la siguiente. Al llegar a 00:00 te avisa que la exposición finalizó.", "Da feedback con IA: analiza lo que dijiste, tu ritmo, las muletillas y qué palabras clave cubriste u omitiste, y te da fortalezas, puntos a mejorar y un consejo. El feedback completo con micrófono funciona en la demo web que simula el reloj, y la app de Android Studio ya tiene la conexión con Claude lista."],
  },
  {
    slug: "app-movil",
    title: "CanchaYA",
    desc: "CanchaYa es una aplicación móvil intuitiva y accesible que conecta a deportistas aficionados de todas las edades para completar equipos, encontrar rivales y coordinar partidos en tiempo real de forma rápida y segura.",
    image: "/proyectos/movil.png",
    tags: ["NativeWind v4", "ExpoGo"],
    github: "https://github.com/Martinez572/AppMovil_CanchaYA.git",
    download: "https://github.com/Martinez572/AppMovil_CanchaYA/releases/download/V1.0.0/application-73868e58-843e-464c-8c98-228b9d6f8bb4.apk",
    downloadLabel: "Descargar APK",
    about: "Es una plataforma deportiva diseñada para reunir jugadores en encuentros locales (como fútbol, tenis y otras disciplinas) bajo una experiencia visual clara, moderna y fácil de usar para personas desde los 16 hasta más de 50 años. Permite descubrir partidos abiertos cerca de ti, reservar tu cupo con un toque y mantener toda la logística del encuentro centralizada en un solo lugar.",
    problem: "Resuelve la frustración de cancelar partidos a última hora por falta de jugadores, el desorden de organizar encuentros en grupos interminables de mensajería donde se pierden los horarios o la ubicación de la cancha, y el desbalance de nivel competitivo entre los participantes.",
    features: ["Búsqueda y reserva de partidos con ubicación exacta: Muestra convocatorias activas con los cupos disponibles, horario y mapa de la cancha para unirte al instante.", "Chat directo por equipo: Habilita un espacio de comunicación exclusivo para cada partido donde los jugadores confirmados coordinan su llegada, indumentaria y detalles del juego.", "Recordatorios y calificación post-partido: Avisa con cuenta regresiva cuánto falta para iniciar el encuentro, permite activar alertas previas y ofrece un sistema de reseñas al finalizar para valorar la puntualidad, el ambiente y el nivel de juego."],
  },
  {
    slug: "app-desktop",
    title: "RebañoPro",
    desc: "Plataforma SaaS de escritorio y conectividad wearable para la gestión inteligente, trazabilidad clínica y control financiero de hatos ganaderos.",
    image: "/proyectos/proyectoRebanoPro.png",
    tags: ["React 18+ con TypeScript:", "Tailwind CSS"],
    github: "https://github.com/Martinez572/Aplicacion_Desktop.git",
    download: "https://github.com/Martinez572/Aplicacion_Desktop/releases/download/v1.0.0/rebanopro_0.1.0_x64-setup.exe",
    downloadLabel: "Descargar",
    about: "RebañoPro es una aplicación de escritorio nativa diseñada con un enfoque absoluto en la experiencia de usuario (UX) y el diseño de interfaces moderno (UI). Está concebida para ser el centro de mando visual en la oficina de la finca o estación de trabajo del productor ganadero.",
    problem: "Necesidad visual y operativa que cubre: Resuelve el gran problema del software agrícola tradicional: interfaces sobrecargadas, grises, anticuadas y difíciles de usar. RebañoPro transforma hojas de cálculo caóticas y sistemas complejos en una experiencia visual intuitiva, donde cualquier productor o administrador puede interpretar el estado financiero y sanitario de su hato en cuestión de segundos gracias a una arquitectura de información orientada a la claridad. Para quién es útil: Diseñado para ganaderos modernos, administradores de empresas pecuarias y profesionales del sector que valoran una herramienta de escritorio potente, veloz y que además luzca sofisticada, limpia y profesional.",
    features: ["Centro de Decisiones e Inteligencia Artificial: Un módulo conversacional de asistencia avanzada dividido en pestañas funcionales (Sanidad Veterinaria, Costos Financieros y Estrategia General). Cuenta con avatares limpios, globos de mensajes diferenciados por roles y estados de carga animados con transiciones fluidas.", "Gestión Integral de Inventario y Lotes: Paneles interactivos de control bovino que permiten visualizar especímenes mediante tarjetas de resumen rápido, indicadores de estado de salud y tablas de datos limpias con filas alternadas y acciones de un solo clic.","Módulo Financiero y de Costos: Cuadros de mando ejecutivos que muestran la rentabilidad del hato, gastos operativos e inversión en suplementación mediante tarjetas métricas con porcentajes de variación y barras de progreso visuales."],
  },
];
export const testimonials = [
  { name: "Juan Martinez", role: "Amigo", text: "Trabajar con Kevin fue muy fácil. Cumple con lo que promete, explica bien sus ideas y siempre está dispuesto a ayudar cuando algo no sale." },
  { name: "Cristian Estrada", role: "Primo", text: "Kevin se destaca por su interés en aprender y por la dedicación que le pone a sus proyectos, tanto en lo técnico como en los detalles." },
  { name: "Johan Guaquez", role: "Amigo", text: "Hola, mi nombre es Johan Alexis Guaquez y trabajo liderando la creación de programas y aplicaciones en una empresa. Además, soy compañero de universidad de Kevin Martínez. Puedo decir que es una persona sumamente responsable, un gran líder con excelentes ideas y alguien que domina muy bien todo lo relacionado con la creación de software" },
];
export const academic = [
  { when: "2026", where: "UCC", what: "Seminario: Seminario Ingenieria de Software", note: "Me ayudó a conectar lo que veo en clase con los retos reales de la industria" },
  { when: "2025", where: "UCC", what: "Seminario: Seminario Ingenieria de Software", note: "Me sirvió para mejorar la forma en que planeo y organizo mis proyectos" },
  { when: "2024", where: "UCC", what: "Seminario: Seminario Ingenieria de Software", note: "Aprendi nuevas herramientas y me motivó a seguir aprendiendo." },
  { when: "2024 – 2026", where: "Universidad Cooperativa de Colombia", what: "Ingeniería de Software", note: "Formación en desarrollo de software" },
];

export const work = [
  { when: "2026", where: "Proyecto académico", what: "FootballTacticIA", note: "Desarrollé una página web para el análisis táctico del fútbol." },
  { when: "2026", where: "Proyecto personal", what: "El Ultimo Pastoreo", note: "Diseñé y programé un videojuego con Godot y GDScript, disponible para descargar." },
  { when: "2026", where: "Proyecto académico", what: "Expositor", note: "Creé una aplicación para reloj inteligente con Android Studio." },
  { when: "2026", where: "Proyecto académico", what: "CanchaYA", note: "Desarrollé una aplicación móvil Android deportiva diseñada para reunir jugadores en encuentros locales." },
  { when: "2026", where: "Proyecto académico", what: "Rebaño Pro", note: "Desarrollé una aplicación Desktop para la gestión inteligente, trazabilidad clínica y control financiero de hatos ganaderos." },
];
export const skills = [
  { name: "Next.js / React", level: 80 }, { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 90 }, { name: "Git y GitHub", level: 75 }, { name: "Figma", level: 65 },
];
