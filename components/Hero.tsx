import { profile } from "@/lib/data";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="mb-3 text-lg font-semibold text-[#3B3BF0]">Hola, soy</p>
        <h1 className="text-6xl font-extrabold leading-[0.95] md:text-8xl">{profile.name}</h1>
        <p className="mt-5 text-2xl font-bold">{profile.role}</p>
        <p className="mt-3 max-w-md text-lg">{profile.phrase}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/cv.pdf" download className="btn bg-[#3B3BF0] text-white">Descargar CV</a>
          <a href="#proyectos" className="btn bg-white">Ver proyectos</a>
        </div>
      </div>
      <div className="card relative mx-auto aspect-[4/5] w-full max-w-sm -rotate-2 overflow-hidden bg-[#FF8FB1]">
        <Image src="/foto.png" alt="" fill priority sizes="384px" className="object-cover object-top" />
      </div>
      </section>
  );
}
