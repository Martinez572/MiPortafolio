"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
export default function Toggles() {
  const { lang, setLang, t } = useLang();
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const d = !dark; setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {}
  };
  const b = "grid h-10 place-items-center rounded-full border-2 border-[#14163B] bg-white text-sm font-bold";
  return (
    <div className="flex gap-2">
      <button onClick={() => setLang(lang === "es" ? "en" : "es")} className={`${b} px-3`} aria-label="Español / English">{lang === "es" ? "EN" : "ES"}</button>
      <button onClick={toggle} className={`${b} w-10`} aria-label={t.theme}>{dark ? "☀️" : "🌙"}</button>
    </div>
  );
}