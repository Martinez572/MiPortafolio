"use client";
import { testimonials } from "@/lib/data";
import { tx, useLang } from "@/lib/i18n";
export default function Testimonials() {
  const { lang, t } = useLang();
  return (
    <section id="testimonios" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">{t.testimonials}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((x, i) => (
          <figure key={i} className={`card p-6 ${i === 1 ? "md:translate-y-6" : ""}`}>
            <p className="text-[#FFB400]" aria-label="5">★★★★★</p>
            <blockquote className="mt-3">“{tx(x.text, lang)}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#14163B] bg-[#FF8FB1] font-black">{x.name.slice(0, 1)}</span>
              <span><strong className="block">{x.name}</strong><span className="text-sm">{tx(x.role, lang)}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}