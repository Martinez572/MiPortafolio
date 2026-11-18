"use client";
import { useState } from "react";
import { profile } from "@/lib/data";
import { useLang } from "@/lib/i18n";
const field = "w-full rounded-lg border-2 border-[#14163B] bg-white px-4 py-3";
export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="mb-10 text-5xl font-extrabold">{t.contact}</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-3 text-lg">
          <li><a className="font-bold underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><a className="font-bold underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="font-bold underline" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="font-bold underline" href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
        {sent ? (
          <p className="card bg-[#8FE3C8] p-6 text-xl font-bold" role="status">{t.sent}</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card space-y-4 p-6">
            <label className="block font-bold">{t.name}<input required name="nombre" className={field} /></label>
            <label className="block font-bold">{t.email}<input required type="email" name="correo" className={field} /></label>
            <label className="block font-bold">{t.message}<textarea required name="mensaje" rows={4} className={field} /></label>
            <button type="submit" className="btn bg-[#3B3BF0] text-white">{t.send}</button>
          </form>
        )}
      </div>
    </section>
  );
}