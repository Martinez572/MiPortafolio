export const profile = {
  name: "Kevin Martinez", initials: "KM", role: "Ingeniero de Software",
  phrase: "Actualmente estudiante de ingenieria de software en 5 semestre",
  email: "kevinmartinezk14@gmail.com", phone: "+57 316 730 7520",
  github: "https://github.com/Martinez572", linkedin: "",
  location: "Pasto, Nariño, Colombia", semester: "Semestre 5", interests: "",
};
export const nav = [
  { id: "inicio", label: "Inicio" }, { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" }, { id: "testimonios", label: "Testimonios" },
  { id: "experiencia", label: "Experiencia" }, { id: "habilidades", label: "Habilidades" },
  { id: "contacto", label: "Contacto" },
];
export type Project = { title: string; desc: string; tags: string[]; github: string; demo: string; color: string };
export const projects: Project[] = [
  { title: "App Movil", desc: "", tags: ["Next.js", "TypeScript", "Tailwind"], github: "https://github.com/Martinez572/AppMovil_CanchaYA", demo: "", color: "#FFD84D" },
  { title: "App Desktop", desc: "", tags: ["React", "API REST"], github: "https://github.com/Martinez572/Aplicacion_Desktop", demo: "", color: "#FF8FB1" },
  { title: "App Smartwatch", desc: "", tags: ["Figma", "Tailwind"], github: "https://github.com/Martinez572/SmartwatchApp.git", demo: "", color: "#8FE3C8" },
];
export const testimonials = [
  { name: "Nombre", role: "", text: "" },
  { name: "Nombre", role: "", text: "" },
  { name: "Nombre", role: "", text: "" },
];
export const academic = [
  { when: "2023 – Actualidad", where: "Tu universidad", what: "Ingeniería de Sistemas", note: "Énfasis en desarrollo web y diseño de interfaces." },
  { when: "2022", where: "Plataforma de cursos", what: "Curso de React", note: "Certificado con proyecto final." },
];
export const work = [
  { when: "2025 – 2026", where: "Empresa o cliente", what: "Practicante frontend", note: "Construí componentes reutilizables y mejoré la velocidad de carga." },
  { when: "2024", where: "Freelance", what: "Desarrollador web", note: "Hice una página para un negocio local." },
];

export const skills = [
  { name: "Next.js / React", level: 80 }, { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 90 }, { name: "Git y GitHub", level: 75 }, { name: "Figma", level: 65 },
];
