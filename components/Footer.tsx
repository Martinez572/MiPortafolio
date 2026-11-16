import { nav, profile } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t-2 border-[#14163B] bg-[#14163B] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">© {new Date().getFullYear()} {profile.name}</p>
          <p className="text-sm opacity-70">Hecho con Next.js + Tailwind</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Pie de página">
          {nav.map((n) => <a key={n.id} href={`#${n.id}`} className="hover:underline">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-4 font-bold">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href="#inicio" className="rounded-full bg-[#FFD84D] px-4 py-2 text-[#14163B]">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
