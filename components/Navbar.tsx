"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      let cur = "inicio";
      nav.forEach((n) => { const el = document.getElementById(n.id); if (el && el.getBoundingClientRect().top < 160) cur = n.id; });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#14163B] bg-[#EEF1FF]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#14163B] bg-[#FFD84D] font-black" aria-label="Ir al inicio">{profile.initials}</a>
        <nav className="hidden gap-1 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${active === n.id ? "border-[#14163B] bg-[#FFD84D]" : "border-transparent hover:border-[#14163B]/30"}`}>{n.label}</a>
          ))}
        </nav>
        <button className="rounded-lg border-2 border-[#14163B] px-3 py-1.5 text-xl lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">{open ? "✕" : "☰"}</button>
      </div>
      <div className="absolute bottom-[-4px] left-0 h-[4px] bg-[#3B3BF0]" style={{ width: `${progress}%` }} />
      {open && (
        <nav className="fixed inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 bg-[#EEF1FF] px-8 lg:hidden" aria-label="Móvil">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={`text-4xl font-extrabold ${active === n.id ? "text-[#3B3BF0]" : ""}`} style={{ fontFamily: "var(--font-head)" }}>{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
