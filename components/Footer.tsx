"use client";
import { nav, profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t-2 border-[#14163B] bg-[#14163B] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">© 2026 {profile.name}</p>
          <p className="text-sm opacity-70">{t.built}</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="hover:underline">{t.nav[n.id]}</a>)}
        </nav>
        <div className="flex items-center gap-4 font-bold">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href="#inicio" className="rounded-full bg-[#FFD84D] px-4 py-2 text-[#14163B]">{t.top}</a>
        </div>
      </div>
    </footer>
  );
}