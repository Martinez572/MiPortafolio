import { skills } from "@/lib/data";
export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">Habilidades</h2>
      <div className="card grid gap-6 p-8 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="mb-1 flex justify-between font-bold"><span>{s.name}</span><span>{s.level}%</span></div>
            <div className="h-4 overflow-hidden rounded-full border-2 border-[#14163B] bg-[#EEF1FF]" role="progressbar" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={s.name}>
              <div className="h-full bg-[#3B3BF0]" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
