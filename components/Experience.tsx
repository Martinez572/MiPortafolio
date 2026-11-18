"use client";
import { academic, work } from "@/lib/data";
import { L, tx, useLang } from "@/lib/i18n";
type Item = { when: L; where: L; what: L; note: L };
export default function Experience() {
  const { lang, t } = useLang();
  const col = (title: string, items: Item[]) => (
    <div>
      <h3 className="mb-6 text-3xl font-extrabold">{title}</h3>
      <ol className="space-y-6 border-l-4 border-[#3B3BF0] pl-6">
        {items.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full border-2 border-[#14163B] bg-[#FFD84D]" />
            <p className="text-sm font-bold text-[#3B3BF0]">{tx(e.when, lang)}</p>
            <p className="text-xl font-bold">{tx(e.what, lang)}</p>
            <p className="font-semibold">{tx(e.where, lang)}</p>
            <p className="mt-1">{tx(e.note, lang)}</p>
          </li>
        ))}
      </ol>
    </div>
  );
  return (
    <section id="experiencia" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">{t.experience}</h2>
      <div className="grid gap-12 md:grid-cols-2">{col(t.academic, academic)}{col(t.work, work)}</div>
    </section>
  );
}