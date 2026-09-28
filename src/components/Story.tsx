import Image from "next/image";
import Reveal from "./Reveal";
import { story } from "@/lib/content";

export default function Story() {
  return (
    <section id="story" className="scroll-mt-20 bg-navy-deep py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-ember">{story.eyebrow}</p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] text-cream sm:text-6xl md:text-7xl">
            {story.heading[0]}
            <br />
            <span className="text-rust-bright">{story.heading[1]}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/wildcats-bleachers.jpg"
            alt="Empty football bleachers marked 'Home of the Wildcats' overlook a fog-covered steel mill town at dusk."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-serif mt-12 max-w-3xl text-xl italic leading-snug text-cream sm:text-2xl">
            {story.lede}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {story.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-cream-dim md:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-cream-dim md:text-base">
            {story.closing.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <em key={i} className="font-serif italic text-cream">
                  {part.italic}
                </em>
              )
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
