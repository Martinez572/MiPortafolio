import { profile } from "@/lib/data";
import AboutCarousel from "./AboutCarousel";

const tech = ["Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"];

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">Sobre mí</h2>
      <div className="grid items-start gap-8 md:grid-cols-[1fr_1.5fr]">
        <AboutCarousel />
        <div className="max-w-prose space-y-4 text-lg leading-relaxed">
        <p>
          Soy Kevin, estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Me gusta hablar de tecnología y construir cosas que funcionen bien, pero hay mucho más de mí fuera del computador.
        </p>
        <p>
          Soy muy apasionado por los deportes y me encanta verlos. Desde hace un año practico tenis, un deporte que me parece muy complicado a nivel mental: cada punto es una decisión y todo se juega en la cabeza tanto como en la cancha. Por eso lo disfruto tanto.
        </p>
        <p>
          Mi deporte favorito es el fútbol, y mi equipo es el Deportivo Pasto. Soy hincha y siempre que puedo voy al estadio a apoyarlo. Vivir un partido ahí, con la gente alentando, es de lo que más disfruto.
        </p>
        <p>
          Si quieres hablar de un proyecto, de tenis o de fútbol, escríbeme.
        </p>
        </div>
      </div>
      <dl className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
        {[["Ubicación", profile.location], ["Estudio", profile.semester], ["Intereses", profile.interests]].map(([k, v]) => (
          <div key={k} className="card p-3 shadow-[3px_3px_0_#14163B]"><dt className="font-bold text-[#3B3BF0]">{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => <li key={t} className="rounded-full border-2 border-[#14163B] bg-[#FFD84D] px-3 py-1 text-sm font-semibold">{t}</li>)}
      </ul>
    </section>
  );
}