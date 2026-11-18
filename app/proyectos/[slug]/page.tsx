import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/#proyectos" className="btn bg-white !px-4 !py-2 text-sm">← Volver a proyectos</Link>
      <h1 className="mt-8 text-5xl font-extrabold md:text-6xl">{p.title}</h1>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => <li key={t} className="rounded-full border-2 border-[#14163B] bg-[#FFD84D] px-3 py-1 text-sm font-semibold">{t}</li>)}
      </ul>
      <div className="card relative mt-8 aspect-video overflow-hidden bg-[#EEF1FF]">
        <Image src={p.image} alt="" fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn bg-white">Ver código en GitHub</a>
        {p.download && <a href={p.download} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] text-white">{p.downloadLabel ?? "Descargar"}</a>}
        {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] text-white">Demo en vivo</a>}
      </div>
      <section className="mt-12 max-w-prose space-y-10 text-lg leading-relaxed">
        <div><h2 className="mb-2 text-3xl font-extrabold">De qué trata</h2><p>{p.about}</p></div>
        <div><h2 className="mb-2 text-3xl font-extrabold">Problema que soluciona</h2><p>{p.problem}</p></div>
        <div>
          <h2 className="mb-2 text-3xl font-extrabold">Qué hace</h2>
          <ul className="list-disc space-y-1 pl-6">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </div>
      </section>
    </main>
  );
}