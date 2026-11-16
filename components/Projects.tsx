import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card flex flex-col overflow-hidden">
            <div className="grid h-40 place-items-center border-b-2 border-[#14163B] text-5xl font-black" style={{ background: p.color }}>{p.title.slice(0, 1)}</div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 flex-1">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-full bg-[#EEF1FF] px-2.5 py-0.5 text-xs font-bold">{t}</li>)}</ul>
              <div className="mt-5 flex gap-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn bg-white !px-4 !py-2 text-sm">GitHub</a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn bg-[#3B3BF0] !px-4 !py-2 text-sm text-white">Demo en vivo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
