"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { tx, useLang } from "@/lib/i18n";
export default function Projects() {
  const { lang, t } = useLang();
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">{t.projects}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.slug} className="card flex flex-col overflow-hidden">
            <Link href={`/proyectos/${p.slug}`} className="relative block aspect-video border-b-2 border-[#14163B] bg-[#EEF1FF]">
              <Image src={p.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-2xl font-extrabold"><Link href={`/proyectos/${p.slug}`} className="hover:underline">{tx(p.title, lang)}</Link></h3>
              <p className="mt-2 flex-1">{tx(p.desc, lang)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((x) => <li key={x} className="rounded-full bg-[#EEF1FF] px-2.5 py-0.5 text-xs font-bold">{x}</li>)}</ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/proyectos/${p.slug}`} className="btn bg-[#FFD84D] !px-4 !py-2 text-sm">{t.details}</Link>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn bg-white !px-4 !py-2 text-sm">GitHub</a>
                {p.download && <a href={p.download} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] !px-4 !py-2 text-sm text-white">{p.downloadLabel ? tx(p.downloadLabel, lang) : t.download}</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] !px-4 !py-2 text-sm text-white">{t.demo}</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}