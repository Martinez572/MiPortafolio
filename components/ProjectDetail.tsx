"use client";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { tx, useLang } from "@/lib/i18n";
import Toggles from "./Toggles";
export default function ProjectDetail({ p }: { p: Project }) {
  const { lang, t } = useLang();
  const dl = p.downloadLabel ? tx(p.downloadLabel, lang) : t.download;
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center justify-between">
        <Link href="/#proyectos" className="btn bg-white !px-4 !py-2 text-sm">{t.back}</Link>
        <Toggles />
      </div>
      <h1 className="mt-8 text-5xl font-extrabold md:text-6xl">{tx(p.title, lang)}</h1>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((x) => <li key={x} className="rounded-full border-2 border-[#14163B] bg-[#FFD84D] px-3 py-1 text-sm font-semibold">{x}</li>)}</ul>
      <div className="card relative mt-8 aspect-video overflow-hidden bg-[#EEF1FF]">
        <Image src={p.image} alt="" fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn bg-white">{t.code}</a>
        {p.download && <a href={p.download} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] text-white">{dl}</a>}
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] text-white">{t.demo}</a>}
      </div>
      <section className="mt-12 max-w-prose space-y-10 text-lg leading-relaxed">
        <div><h2 className="mb-2 text-3xl font-extrabold">{t.whatAbout}</h2><p>{tx(p.about, lang)}</p></div>
        <div><h2 className="mb-2 text-3xl font-extrabold">{t.problem}</h2><p>{tx(p.problem, lang)}</p></div>
        <div><h2 className="mb-2 text-3xl font-extrabold">{t.does}</h2><ul className="list-disc space-y-1 pl-6">{p.features.map((f, i) => <li key={i}>{tx(f, lang)}</li>)}</ul></div>
      </section>
    </main>
  );
}