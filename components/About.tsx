"use client";
import { profile } from "@/lib/data";
import { tx, useLang } from "@/lib/i18n";
import AboutCarousel from "./AboutCarousel";
const tech = ["Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"];
export default function About() {
  const { lang, t } = useLang();
  const quick = [
    { k: t.location, v: profile.location },
    { k: t.studies, v: profile.semester },
    { k: t.interests, v: profile.interests },
  ];
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">{t.about}</h2>
      <div className="grid items-start gap-8 md:grid-cols-[1fr_1.5fr]">
        <AboutCarousel />
        <div className="max-w-prose space-y-4 text-lg leading-relaxed">{t.aboutText.map((p) => <p key={p}>{p}</p>)}</div>
      </div>
      <dl className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
        {quick.map(({ k, v }) => (
          <div key={k} className="card p-3 shadow-[3px_3px_0_#14163B]"><dt className="font-bold text-[#3B3BF0]">{k}</dt><dd>{tx(v, lang)}</dd></div>
        ))}
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tech.map((x) => <li key={x} className="rounded-full border-2 border-[#14163B] bg-[#FFD84D] px-3 py-1 text-sm font-semibold">{x}</li>)}
      </ul>
    </section>
  );
}