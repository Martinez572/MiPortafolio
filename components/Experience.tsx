import { academic, work } from "@/lib/data";
type Item = { when: string; where: string; what: string; note: string };
const Col = ({ title, items }: { title: string; items: Item[] }) => (
  <div>
    <h3 className="mb-6 text-3xl font-extrabold">{title}</h3>
    <ol className="space-y-6 border-l-4 border-[#3B3BF0] pl-6">
      {items.map((e) => (
          <li key={`${e.what}-${e.when}`} className="relative">          <span className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full border-2 border-[#14163B] bg-[#FFD84D]" />
          <p className="text-sm font-bold text-[#3B3BF0]">{e.when}</p>
          <p className="text-xl font-bold">{e.what}</p>
          <p className="font-semibold">{e.where}</p>
          <p className="mt-1">{e.note}</p>
        </li>
      ))}
    </ol>
  </div>
);
export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">Experiencia</h2>
      <div className="grid gap-12 md:grid-cols-2">
        <Col title="🎓 Académica" items={academic} />
        <Col title="💼 Laboral" items={work} />
      </div>
    </section>
  );
}
