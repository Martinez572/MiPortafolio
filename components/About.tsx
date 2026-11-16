import { profile } from "@/lib/data";
const tech = ["Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"];
export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">Sobre mí</h2>
      <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
        <div className="card grid min-h-56 place-items-center bg-[#8FE3C8] text-7xl" role="img" aria-label="Ilustración"></div>
        <div>
          <p className="max-w-prose text-lg leading-relaxed">Soy Kevin, estudiante de ingenieria de software en la universidad Cooperativa, soy alguien a quien le encantan mucho los deportes actualmente solo practico Tenis pero me encanta el Futbol y muchos deportes mas.</p>
          <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
            {[["Ubicación", profile.location], ["Estudio", profile.semester], ["Intereses", profile.interests]].map(([k, v]) => (
              <div key={k} className="card p-3 shadow-[3px_3px_0_#14163B]"><dt className="font-bold text-[#3B3BF0]">{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-2">{tech.map((t) => <li key={t} className="rounded-full border-2 border-[#14163B] bg-[#FFD84D] px-3 py-1 text-sm font-semibold">{t}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
