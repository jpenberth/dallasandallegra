import Image from "next/image";
import Reveal from "./Reveal";
import { stills } from "@/lib/content";

export default function Stills() {
  return (
    <section id="stills" className="scroll-mt-20 bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Stills</p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] text-cream sm:text-6xl">
            Bellvue Falls
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {stills.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 0.08}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
