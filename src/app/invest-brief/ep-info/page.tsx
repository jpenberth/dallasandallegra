import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import EPIntakeForm from "@/components/EPIntakeForm";
import { investBrief } from "@/lib/invest-brief-content";

export const metadata: Metadata = {
  title: "Executive Producer Setup: Dallas & Allegra",
  description: "Finish your Executive Producer setup for Dallas & Allegra.",
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function EPInfoPage() {
  return (
    <main className="bg-ink">
      <div className="grain-overlay" />

      <section className="flex min-h-screen w-full items-center py-28">
        <div className="mx-auto w-full max-w-xl px-6 md:px-10">
          <a
            href="/invest-brief"
            className="font-display inline-block text-lg tracking-wide text-cream"
          >
            Dallas <span className="text-rust-bright">&amp;</span> Allegra
          </a>

          <Reveal className="mt-10 text-center">
            <p className="eyebrow text-ember">{investBrief.epIntake.eyebrow}</p>
            <h1 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.epIntake.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream-dim">
              {investBrief.epIntake.lede}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <EPIntakeForm successMessage={investBrief.epIntake.success} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
