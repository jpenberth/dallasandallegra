import Reveal from "./Reveal";
import { statement } from "@/lib/content";

export default function Statement() {
  return (
    <section className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {statement.lines.map((line, i) => (
          <Reveal key={line} delay={i * 0.15}>
            <p
              className={`font-serif italic leading-snug text-cream ${
                i === 0
                  ? "text-2xl text-cream-dim sm:text-3xl"
                  : "mt-6 text-3xl sm:text-4xl"
              }`}
            >
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
