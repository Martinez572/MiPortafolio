"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
export type Lang = "es" | "en";
export type L = string | { es: string; en: string };
export const tx = (v: L, lang: Lang) => (typeof v === "string" ? v : v[lang]);

const es = {
  nav: { inicio: "Inicio", "sobre-mi": "Sobre mí", proyectos: "Proyectos", testimonios: "Testimonios", experiencia: "Experiencia", contacto: "Contacto" } as Record<string, string>,
  hello: "Hola, soy", cv: "Descargar CV", seeProjects: "Ver proyectos",
  about: "Sobre mí",
  aboutText: [
    "Soy Kevin, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me gusta hablar de tecnología y construir cosas que funcionen bien, pero hay mucho más de mí fuera del computador.",
    "Soy muy apasionado por los deportes y me encanta verlos. Desde hace un año practico tenis, un deporte que me parece muy complicado a nivel mental: cada punto es una decisión y todo se juega en la cabeza tanto como en la cancha. Por eso lo disfruto tanto.",
    "Mi deporte favorito es el fútbol, y mi equipo es el Deportivo Pasto. Soy hincha y siempre que puedo voy al estadio a apoyarlo. Vivir un partido ahí, con la gente alentando, es de lo que más disfruto.",
    "Si quieres hablar de un proyecto, de tenis o de fútbol, escríbeme.",
  ],
  location: "Ubicación", studies: "Estudio", interests: "Intereses",
  projects: "Proyectos", details: "Ver detalles", demo: "Demo en vivo", download: "Descargar",
  back: "← Volver a proyectos", code: "Ver código en GitHub", whatAbout: "De qué trata", problem: "Problema que soluciona", does: "Qué hace",
  testimonials: "Testimonios", experience: "Experiencia", academic: "🎓 Académica", work: "💼 Laboral",
  contact: "Contacto", name: "Nombre", email: "Correo", message: "Mensaje", send: "Enviar mensaje", sent: "¡Mensaje enviado! Te responderé pronto.",
  built: "Hecho con Next.js + Tailwind", top: "Volver arriba ↑", theme: "Cambiar tema", menu: "Abrir menú",
};
type UI = typeof es;
const en: UI = {
  nav: { inicio: "Home", "sobre-mi": "About", proyectos: "Projects", testimonios: "Testimonials", experiencia: "Experience", contacto: "Contact" },
  hello: "Hi, I'm", cv: "Download CV", seeProjects: "View projects",
  about: "About me",
  aboutText: [
    "I'm Kevin, a Software Engineering student at Universidad Cooperativa de Colombia. I enjoy talking about technology and building things that work well, but there's a lot more to me away from the computer.",
    "I'm passionate about sports and love watching them. I've been playing tennis for a year, a sport I find very demanding mentally: every point is a decision, and the game is played in your head as much as on the court. That's why I enjoy it so much.",
    "My favorite sport is football (soccer), and my team is Deportivo Pasto. I'm a die-hard fan and go to the stadium whenever I can. Being at a match, with the crowd cheering, is one of my favorite things.",
    "If you want to talk about a project, tennis or football, write to me.",
  ],
  location: "Location", studies: "Studies", interests: "Interests",
  projects: "Projects", details: "View details", demo: "Live demo", download: "Download",
  back: "← Back to projects", code: "View code on GitHub", whatAbout: "What it is", problem: "Problem it solves", does: "What it does",
  testimonials: "Testimonials", experience: "Experience", academic: "🎓 Academic", work: "💼 Work",
  contact: "Contact", name: "Name", email: "Email", message: "Message", send: "Send message", sent: "Message sent! I'll reply soon.",
  built: "Built with Next.js + Tailwind", top: "Back to top ↑", theme: "Toggle theme", menu: "Open menu",
};
export const ui = { es, en };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "es", setLang: () => {} });
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  useEffect(() => { try { const s = localStorage.getItem("lang"); if (s === "en" || s === "es") setLangState(s); } catch {} }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem("lang", l); } catch {} };
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
export const useLang = () => { const { lang, setLang } = useContext(Ctx); return { lang, setLang, t: ui[lang] }; };