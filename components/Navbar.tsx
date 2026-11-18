"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import Logo from "./Logo";
import Toggles from "./Toggles";
export default function Navbar() {
  const { t } = useLang();
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
        <a href="#inicio" className="flex items-center gap-2 text-xl font-extrabold" aria-label={profile.name}><Logo />{profile.name}</a>
        <nav className="hidden gap-1 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${active === n.id ? "border-[#14163B] bg-[#FFD84D]" : "border-transparent hover:border-[#14163B]/30"}`}>{t.nav[n.id]}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Toggles />
          <button className="grid h-10 w-10 place-items-center rounded-lg border-2 border-[#14163B] text-xl lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={t.menu}>{open ? "✕" : "☰"}</button>
        </div>
      </div>
      <div className="absolute bottom-[-4px] left-0 h-[4px] bg-[#3B3BF0]" style={{ width: `${progress}%` }} />
      {open && (
        <nav className="fixed inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 bg-[#EEF1FF] px-8 lg:hidden" aria-label="Móvil">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={`text-4xl font-extrabold ${active === n.id ? "text-[#3B3BF0]" : ""}`} style={{ fontFamily: "var(--font-head)" }}>{t.nav[n.id]}</a>
          ))}
        </nav>
      )}
    </header>
  );
}