"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/sobre-mi/1.png",},
  { src: "/sobre-mi/2.png",},
  { src: "/sobre-mi/3.png",},
  { src: "/sobre-mi/4.png",},
  { src: "/sobre-mi/5.png",},
  { src: "/sobre-mi/6.png",},
  { src: "/sobre-mi/7.png",},
];

export default function AboutCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="card relative aspect-[4/5] overflow-hidden bg-[#8FE3C8]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carrusel"
      aria-label="Fotos personales"
    >
      {slides.map((s, idx) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          fill
          sizes="(min-width: 768px) 40vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ver foto ${idx + 1}`}
            className={`h-3 w-3 rounded-full border-2 border-[#14163B] ${idx === i ? "bg-[#FFD84D]" : "bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}