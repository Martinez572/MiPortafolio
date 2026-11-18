import type { L } from "./i18n";

export const profile = {
  name: "Kevin Martinez",
  initials: "KM",
  role: { es: "Ingeniero de Software", en: "Software Engineer" } as L,
  phrase: {
    es: "Estudiante de Ingeniería de Software de quinto semestre.",
    en: "Fifth-semester Software Engineering student.",
  } as L,
  email: "kevinmartinezk14@gmail.com",
  phone: "+57 316 730 7520",
  github: "https://github.com/Martinez572",
  linkedin: "",
  location: { es: "Pasto, Nariño, Colombia", en: "Pasto, Nariño, Colombia" } as L,
  semester: { es: "Semestre 5", en: "5th semester" } as L,
  interests: { es: "Tenis, fútbol, Deportivo Pasto", en: "Tennis, football, Deportivo Pasto" } as L,
};

export const nav = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export type Project = {
  slug: string;
  title: L;
  desc: L;
  image: string;
  tags: string[];
  github: string;
  download?: string;
  downloadLabel?: L;
  demo?: string;
  about: L;
  problem: L;
  features: L[];
};

export const projects: Project[] = [
  {
    slug: "juego-godot",
    title: { es: "El Último Pastoreo", en: "The Last Shepherd" },
    desc: {
      es: "Videojuego 2D de aventura y supervivencia donde guías a un rebaño por cuatro biomas, con una IA que ajusta la dificultad.",
      en: "A 2D adventure and survival game where you guide a flock through four biomes, with an AI that adjusts the difficulty.",
    },
    image: "/proyectos/juego.png",
    tags: ["Godot", "GDScript"],
    github: "https://github.com/Martinez572/VideoJuego_ElUltimoPastoreo.git",
    download: "https://github.com/Martinez572/VideoJuego_ElUltimoPastoreo/releases/download/v1.0.0/El.Ultimo.Pastoreo.zip",
    downloadLabel: { es: "Descargar juego", en: "Download game" },
    about: {
      es: "El Último Pastoreo es un videojuego 2D de aventura, supervivencia y gestión. En un mundo post-apocalíptico pacífico, donde la naturaleza ha cubierto las ruinas de la civilización, el jugador es el último pastor sobre la tierra. Su misión es guiar y proteger a su rebaño a través de cuatro biomas (Bosque de Ruinas, Desierto de Chatarra, Valle Helado y Prado Verde) hasta llegar al refugio ecológico conocido como el Prado Verde. La mecánica principal es cuidar al rebaño mientras avanzas: caminar, correr y silbar para reunirlo, evitar peligros ambientales, cruzar pasos estrechos y encontrar zonas de pasto para que las ovejas coman y se recuperen. Cada oveja tiene salud, ánimo y alimento, y se puede perder si se hiere, pasa hambre o se aleja demasiado.",
      en: "The Last Shepherd is a 2D adventure, survival and management video game. In a peaceful post-apocalyptic world, where nature has covered the ruins of civilization, the player is the last shepherd on Earth. The mission is to guide and protect the flock through four biomes (Ruins Forest, Scrap Desert, Frozen Valley and Green Meadow) until reaching the ecological refuge known as the Green Meadow. The main mechanic is taking care of the flock as you move forward: walking, running and whistling to gather it, avoiding environmental dangers, crossing narrow passages and finding grazing areas so the sheep can eat and recover. Each sheep has health, mood and food, and can be lost if it gets hurt, goes hungry or strays too far.",
    },
    problem: {
      es: "Un videojuego de niveles fijos se vuelve repetitivo y tiene la misma dificultad para todos los jugadores: demasiado fácil para unos y frustrante para otros. Con este proyecto busqué resolverlo usando inteligencia artificial de dos maneras. Un Director de Juego ajusta la dificultad en tiempo real según cómo juega cada persona, y una IA generativa crea niveles nuevos cuando se terminan los niveles por defecto. Así la experiencia se mantiene desafiante pero justa, y el juego no se agota. También resolví un reto técnico: usar la API de una IA sin exponer la clave secreta dentro del juego, mediante un servidor intermedio, y garantizar que el juego siga funcionando con niveles de respaldo si la IA no responde.",
      en: "A game with fixed levels becomes repetitive and has the same difficulty for every player: too easy for some and frustrating for others. With this project I set out to solve it using artificial intelligence in two ways. A Game Director adjusts the difficulty in real time based on how each person plays, and a generative AI creates new levels once the default ones are finished. This keeps the experience challenging but fair, and the game never runs out. I also solved a technical challenge: using an AI's API without exposing the secret key inside the game, through an intermediate server, and making sure the game keeps working with backup levels if the AI doesn't respond.",
    },
    features: [
      {
        es: "Director de Juego (IA adaptativa): mide en tiempo real la salud del rebaño, el ritmo de avance y las pérdidas, y ajusta la dificultad de los tramos: obstáculos, pasos estrechos, peligros y escasez de pasto.",
        en: "Game Director (adaptive AI): measures the flock's health, pace and losses in real time, and adjusts the difficulty of each stretch: obstacles, narrow passages, dangers and grass scarcity.",
      },
      {
        es: "Niveles generados por IA (Claude): al completar los cuatro biomas, la IA diseña niveles nuevos con su propio nombre, poema, estructura y paisaje (colores, fondo, partículas y estilos), validados por el juego antes de usarse.",
        en: "AI-generated levels (Claude): after completing the four biomes, the AI designs new levels with their own name, poem, structure and scenery (colors, background, particles and styles), validated by the game before use.",
      },
      {
        es: "Rebaño con comportamiento orgánico: las ovejas siguen al pastor con una máquina de estados (perseguir, agruparse, pánico leve y pastar) y reaccionan al hambre, a los obstáculos y a los peligros.",
        en: "Flock with organic behavior: the sheep follow the shepherd using a state machine (chase, group up, mild panic and graze) and react to hunger, obstacles and dangers.",
      },
    ],
  },
  {
    slug: "app-smartwatch",
    title: { es: "Expositor", en: "Expositor" },
    desc: {
      es: "App para reloj inteligente (Wear OS) que te acompaña mientras presentas una exposición.",
      en: "Smartwatch app (Wear OS) that supports you while you give a presentation.",
    },
    image: "/proyectos/smartwatch.png",
    tags: ["Android Studio", "Smartwatch"],
    github: "https://github.com/Martinez572/SmartwatchApp.git",
    download: "https://github.com/Martinez572/SmartwatchApp/releases/download/v1.0.0/app-debug.apk",
    downloadLabel: { es: "Descargar APK", en: "Download APK" },
    demo: "https://demoexposicionreloj.vercel.app/",
    about: {
      es: "Expositor es una app para smartwatch con Wear OS que te acompaña mientras presentas una exposición, una conferencia o un discurso. Antes de empezar, desde el reloj configuras la duración, los avisos por vibración y, si quieres, tus notas organizadas en secciones con palabras clave. Durante la presentación, el reloj muestra el tiempo restante, la sección actual y la palabra clave en la que vas. Para avanzar o retroceder entre palabras basta con deslizar el dedo sobre la pantalla, sin sacar el celular. Al terminar, una IA puede analizar lo que dijiste y darte feedback.",
      en: "Expositor is a Wear OS smartwatch app that supports you while you give a presentation, a talk or a speech. Before you start, you set up the duration, the vibration alerts and, if you want, your notes organized in sections with keywords, all from the watch. During the presentation, the watch shows the remaining time, the current section and the keyword you're on. To move forward or back between keywords, you just swipe on the screen, without taking out your phone. When you finish, an AI can analyze what you said and give you feedback.",
    },
    problem: {
      es: "Quien expone suele perder el hilo, pasarse del tiempo o tener que mirar el celular o un papel, lo que rompe el contacto con el público. Expositor da un apoyo discreto en la muñeca: avisa cuánto tiempo queda con vibraciones, sin ruido ni distracciones, y recuerda lo siguiente que hay que decir con solo una palabra o frase corta. Es útil para estudiantes que exponen en clase, profesionales que presentan en reuniones y cualquiera que hable en público y quiera practicar y mejorar.",
      en: "People who present often lose their train of thought, run over time or have to look at their phone or a paper, which breaks contact with the audience. Expositor gives discreet support on your wrist: it tells you how much time is left with vibrations, with no noise or distractions, and reminds you of what to say next with just a word or short phrase. It's useful for students presenting in class, professionals presenting in meetings and anyone who speaks in public and wants to practice and improve.",
    },
    features: [
      {
        es: "Configura la exposición: eliges la duración (5, 10, 15 minutos u otra) y defines recordatorios de vibración según el tiempo restante, por ejemplo cuando faltan 5, 3 y 1 minutos. Puedes agregarlos, editarlos, eliminarlos o desactivarlos.",
        en: "Set up your presentation: choose the duration (5, 10, 15 minutes or another) and define vibration reminders based on the remaining time, for example when 5, 3 and 1 minutes are left. You can add, edit, delete or turn them off.",
      },
      {
        es: "Te guía durante la presentación: muestra un cronómetro en cuenta regresiva con un anillo de progreso, el nombre de la sección y la palabra clave actual. Cambias de palabra deslizando, y al terminar una sección pasa sola a la siguiente. Al llegar a 00:00 te avisa que la exposición finalizó.",
        en: "Guides you during the presentation: shows a countdown timer with a progress ring, the section name and the current keyword. You change keywords by swiping, and when a section ends it moves to the next one on its own. At 00:00 it tells you the presentation is over.",
      },
      {
        es: "Da feedback con IA: analiza lo que dijiste, tu ritmo, las muletillas y qué palabras clave cubriste u omitiste, y te da fortalezas, puntos a mejorar y un consejo. El feedback completo con micrófono funciona en la demo web que simula el reloj, y la app de Android Studio ya tiene la conexión con Claude lista.",
        en: "Gives AI feedback: analyzes what you said, your pace, your filler words and which keywords you covered or missed, and gives you strengths, areas to improve and a tip. The full microphone feedback works in the web demo that simulates the watch, and the Android Studio app already has the connection to Claude ready.",
      },
    ],
  },
  {
    slug: "app-movil",
    title: { es: "CanchaYA", en: "CanchaYA" },
    desc: {
      es: "App móvil que conecta a deportistas aficionados para completar equipos, encontrar rivales y coordinar partidos en tiempo real.",
      en: "Mobile app that connects amateur athletes to complete teams, find opponents and coordinate matches in real time.",
    },
    image: "/proyectos/movil.png",
    tags: ["NativeWind v4", "Expo Go"],
    github: "https://github.com/Martinez572/AppMovil_CanchaYA.git",
    download: "https://github.com/Martinez572/AppMovil_CanchaYA/releases/download/V1.0.0/application-73868e58-843e-464c-8c98-228b9d6f8bb4.apk",
    downloadLabel: { es: "Descargar APK", en: "Download APK" },
    about: {
      es: "Es una plataforma deportiva diseñada para reunir jugadores en encuentros locales (como fútbol, tenis y otras disciplinas) bajo una experiencia visual clara, moderna y fácil de usar para personas desde los 16 hasta más de 50 años. Permite descubrir partidos abiertos cerca de ti, reservar tu cupo con un toque y mantener toda la logística del encuentro centralizada en un solo lugar.",
      en: "It's a sports platform designed to bring players together for local matches (such as football, tennis and other sports) with a clear, modern and easy-to-use visual experience for people from 16 to over 50 years old. It lets you discover open matches near you, reserve your spot with one tap and keep all the logistics of the match in one place.",
    },
    problem: {
      es: "Resuelve la frustración de cancelar partidos a última hora por falta de jugadores, el desorden de organizar encuentros en grupos interminables de mensajería donde se pierden los horarios o la ubicación de la cancha, y el desbalance de nivel competitivo entre los participantes.",
      en: "It solves the frustration of canceling matches at the last minute for lack of players, the mess of organizing games in endless messaging groups where schedules or the field's location get lost, and the imbalance of skill level between participants.",
    },
    features: [
      {
        es: "Búsqueda y reserva de partidos con ubicación exacta: muestra convocatorias activas con los cupos disponibles, horario y mapa de la cancha para unirte al instante.",
        en: "Match search and booking with exact location: shows active matches with available spots, schedule and a map of the field so you can join instantly.",
      },
      {
        es: "Chat directo por equipo: habilita un espacio de comunicación exclusivo para cada partido donde los jugadores confirmados coordinan su llegada, indumentaria y detalles del juego.",
        en: "Direct team chat: provides a dedicated space for each match where confirmed players coordinate their arrival, gear and game details.",
      },
      {
        es: "Recordatorios y calificación post-partido: avisa con cuenta regresiva cuánto falta para iniciar el encuentro, permite activar alertas previas y ofrece un sistema de reseñas al finalizar para valorar la puntualidad, el ambiente y el nivel de juego.",
        en: "Reminders and post-match ratings: shows a countdown to the start of the match, lets you turn on early alerts and offers a review system at the end to rate punctuality, atmosphere and level of play.",
      },
    ],
  },
  {
    slug: "app-desktop",
    title: { es: "RebañoPro", en: "RebañoPro" },
    desc: {
      es: "Plataforma de escritorio para la gestión inteligente, trazabilidad clínica y control financiero de hatos ganaderos.",
      en: "Desktop platform for smart management, clinical traceability and financial control of cattle herds.",
    },
    image: "/proyectos/proyectoRebanoPro.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Martinez572/Aplicacion_Desktop.git",
    download: "https://github.com/Martinez572/Aplicacion_Desktop/releases/download/v1.0.0/rebanopro_0.1.0_x64-setup.exe",
    downloadLabel: { es: "Descargar .exe", en: "Download .exe" },
    about: {
      es: "RebañoPro es una aplicación de escritorio nativa diseñada con un enfoque absoluto en la experiencia de usuario (UX) y el diseño de interfaces moderno (UI). Está concebida para ser el centro de mando visual en la oficina de la finca o estación de trabajo del productor ganadero.",
      en: "RebañoPro is a native desktop application designed with a strong focus on user experience (UX) and modern interface design (UI). It's meant to be the visual command center in the farm office or workstation of the cattle producer.",
    },
    problem: {
      es: "Resuelve el gran problema del software agrícola tradicional: interfaces sobrecargadas, grises, anticuadas y difíciles de usar. RebañoPro transforma hojas de cálculo caóticas y sistemas complejos en una experiencia visual intuitiva, donde cualquier productor o administrador puede interpretar el estado financiero y sanitario de su hato en cuestión de segundos gracias a una arquitectura de información orientada a la claridad. Está diseñado para ganaderos modernos, administradores de empresas pecuarias y profesionales del sector que valoran una herramienta de escritorio potente, veloz y que además luzca sofisticada, limpia y profesional.",
      en: "It solves the big problem of traditional agricultural software: overloaded, gray, outdated and hard-to-use interfaces. RebañoPro turns chaotic spreadsheets and complex systems into an intuitive visual experience, where any producer or administrator can understand the financial and health status of their herd in seconds thanks to an information architecture built around clarity. It's designed for modern cattle farmers, livestock business managers and professionals in the sector who value a powerful, fast desktop tool that also looks sophisticated, clean and professional.",
    },
    features: [
      {
        es: "Centro de Decisiones e Inteligencia Artificial: un módulo conversacional de asistencia avanzada dividido en pestañas funcionales (Sanidad Veterinaria, Costos Financieros y Estrategia General). Cuenta con avatares limpios, globos de mensajes diferenciados por roles y estados de carga animados con transiciones fluidas.",
        en: "Decision Center and Artificial Intelligence: an advanced conversational assistant module split into functional tabs (Veterinary Health, Financial Costs and General Strategy). It features clean avatars, message bubbles differentiated by role and animated loading states with smooth transitions.",
      },
      {
        es: "Gestión Integral de Inventario y Lotes: paneles interactivos de control bovino que permiten visualizar animales mediante tarjetas de resumen rápido, indicadores de estado de salud y tablas de datos limpias con filas alternadas y acciones de un solo clic.",
        en: "Complete Inventory and Batch Management: interactive cattle control panels that let you view animals through quick summary cards, health status indicators and clean data tables with alternating rows and one-click actions.",
      },
      {
        es: "Módulo Financiero y de Costos: cuadros de mando ejecutivos que muestran la rentabilidad del hato, gastos operativos e inversión en suplementación mediante tarjetas métricas con porcentajes de variación y barras de progreso visuales.",
        en: "Financial and Cost Module: executive dashboards that show the herd's profitability, operating expenses and supplementation investment through metric cards with variation percentages and visual progress bars.",
      },
    ],
  },
];

export const testimonials: { name: string; role: L; text: L }[] = [
  {
    name: "Juan Martinez",
    role: { es: "Amigo", en: "Friend" },
    text: {
      es: "Trabajar con Kevin fue muy fácil. Cumple con lo que promete, explica bien sus ideas y siempre está dispuesto a ayudar cuando algo no sale.",
      en: "Working with Kevin was very easy. He delivers what he promises, explains his ideas well and is always willing to help when something doesn't work.",
    },
  },
  {
    name: "Cristian Estrada",
    role: { es: "Primo", en: "Cousin" },
    text: {
      es: "Kevin se destaca por su interés en aprender y por la dedicación que le pone a sus proyectos, tanto en lo técnico como en los detalles.",
      en: "Kevin stands out for his eagerness to learn and the dedication he puts into his projects, both in the technical side and in the details.",
    },
  },
  {
    name: "Johan Guaquez",
    role: { es: "Amigo y compañero de universidad", en: "Friend and university classmate" },
    text: {
      es: "Hola, mi nombre es Johan Alexis Guaquez y trabajo liderando la creación de programas y aplicaciones en una empresa. Además, soy compañero de universidad de Kevin Martínez. Puedo decir que es una persona sumamente responsable, un gran líder con excelentes ideas y alguien que domina muy bien todo lo relacionado con la creación de software.",
      en: "Hi, my name is Johan Alexis Guaquez and I lead the creation of programs and applications at a company. I'm also a university classmate of Kevin Martínez. I can say he is an extremely responsible person, a great leader with excellent ideas and someone who masters everything related to software development.",
    },
  },
];

export const academic = [
  {
    when: "2026",
    where: "UCC",
    what: { es: "Seminario de Ingeniería de Software", en: "Software Engineering Seminar" } as L,
    note: {
      es: "Me ayudó a conectar lo que veo en clase con los retos reales de la industria.",
      en: "It helped me connect what I see in class with real industry challenges.",
    } as L,
  },
  {
    when: "2025",
    where: "UCC",
    what: { es: "Seminario de Ingeniería de Software", en: "Software Engineering Seminar" } as L,
    note: {
      es: "Me sirvió para mejorar la forma en que planeo y organizo mis proyectos.",
      en: "It helped me improve how I plan and organize my projects.",
    } as L,
  },
  {
    when: "2024",
    where: "UCC",
    what: { es: "Seminario de Ingeniería de Software", en: "Software Engineering Seminar" } as L,
    note: {
      es: "Aprendí nuevas herramientas y me motivó a seguir aprendiendo.",
      en: "I learned new tools and it motivated me to keep learning.",
    } as L,
  },
  {
    when: { es: "2024 – Actualidad", en: "2024 – Present" } as L,
    where: { es: "Universidad Cooperativa de Colombia", en: "Universidad Cooperativa de Colombia" } as L,
    what: { es: "Ingeniería de Software", en: "Software Engineering" } as L,
    note: { es: "Formación en desarrollo de software.", en: "Training in software development." } as L,
  },
];

export const work = [
  {
    when: "2026",
    where: { es: "Proyecto académico", en: "Academic project" } as L,
    what: "FootballTacticIA",
    note: {
      es: "Desarrollé una página web para el análisis táctico del fútbol.",
      en: "I developed a website for tactical analysis in football.",
    } as L,
  },
  {
    when: "2026",
    where: { es: "Proyecto personal", en: "Personal project" } as L,
    what: { es: "El Último Pastoreo", en: "The Last Shepherd" } as L,
    note: {
      es: "Diseñé y programé un videojuego con Godot y GDScript, disponible para descargar.",
      en: "I designed and programmed a video game with Godot and GDScript, available for download.",
    } as L,
  },
  {
    when: "2026",
    where: { es: "Proyecto académico", en: "Academic project" } as L,
    what: "Expositor",
    note: {
      es: "Creé una aplicación para reloj inteligente con Android Studio.",
      en: "I created a smartwatch app with Android Studio.",
    } as L,
  },
  {
    when: "2026",
    where: { es: "Proyecto académico", en: "Academic project" } as L,
    what: "CanchaYA",
    note: {
      es: "Desarrollé una aplicación móvil deportiva para reunir jugadores en encuentros locales.",
      en: "I developed a sports mobile app to bring players together for local matches.",
    } as L,
  },
  {
    when: "2026",
    where: { es: "Proyecto académico", en: "Academic project" } as L,
    what: "RebañoPro",
    note: {
      es: "Desarrollé una aplicación de escritorio para la gestión inteligente, trazabilidad clínica y control financiero de hatos ganaderos.",
      en: "I developed a desktop application for smart management, clinical traceability and financial control of cattle herds.",
    } as L,
  },
];