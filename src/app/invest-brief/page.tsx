import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { campaignUrl } from "@/lib/content";
import { investBrief } from "@/lib/invest-brief-content";

export const metadata: Metadata = {
  title: "Executive Producer: Dallas & Allegra",
  description: "8 Executive Producer seats. This is the deal.",
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
  openGraph: {
    title: "Only 8 Executive Producer Credits Exist.",
    description: "8 Executive Producer seats. This is the deal.",
    images: [
      {
        url: "/invest-og.png",
        width: 1200,
        height: 630,
        alt: "Only 8 Executive Producer credits exist. Want one? Dallas & Allegra.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Only 8 Executive Producer Credits Exist.",
    description: "8 Executive Producer seats. This is the deal.",
    images: ["/invest-og.png"],
  },
};

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={campaignUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-rust-bright px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember ${className}`}
    >
      {investBrief.closing.cta}
    </a>
  );
}

export default function InvestBriefPage() {
  return (
    <main className="bg-ink">
      <div className="grain-overlay" />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[90svh] w-full items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/truck-warner-marquee.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center md:px-10">
          <a href="/" className="font-display inline-block text-lg tracking-wide text-cream">
            Dallas <span className="text-rust-bright">&amp;</span> Allegra
          </a>

          <Reveal className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-rust-bright px-5 py-2 text-xs font-semibold uppercase tracking-wider text-ink sm:text-sm">
              {investBrief.deadline}
            </div>
            <p className="eyebrow mt-5 text-ember">{investBrief.eyebrow}</p>
            <h1 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-[0.98] text-cream sm:text-6xl md:text-7xl">
              {investBrief.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-dim md:text-lg">
              {investBrief.subhead}
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ THE DEAL ============ */}
      <section className="bg-navy-deep py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <ul className="space-y-5">
            {investBrief.dealPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.06}>
                <li className="flex items-start gap-4">
                  <span className="font-display mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-rust-bright text-sm text-ink" aria-hidden>
                    &#10003;
                  </span>
                  <span className="text-lg leading-snug text-cream md:text-xl">{point}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ THE OPPORTUNITY ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{investBrief.opportunity.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.opportunity.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5">
            {investBrief.opportunity.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ ATTACHED ============ */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/dallas-mirror.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{investBrief.pitch.eyebrow}</p>
            <h2 className="font-display mt-3 text-5xl leading-[0.98] text-cream sm:text-6xl md:text-7xl">
              {investBrief.pitch.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {investBrief.pitch.credits.map((credit) => (
              <span
                key={credit}
                className="rounded-full border border-cream/20 px-4 py-1.5 text-xs tracking-wide text-cream-dim"
              >
                {credit}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-8 space-y-4">
            {investBrief.pitch.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ TIERS ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">The Offer</p>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl leading-[0.98] text-cream sm:text-5xl">
              Two Seats. Pick One.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {investBrief.tiers.map((tier, i) => (
              <Reveal key={tier.amount} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-sm border p-8 ${
                    tier.featured
                      ? "border-rust-bright bg-ink"
                      : "border-cream/10 bg-ink/60"
                  }`}
                >
                  <p className="font-display text-5xl text-cream">{tier.amount}</p>
                  <h3 className="font-display mt-3 text-xl tracking-wide text-cream">
                    {tier.name}
                  </h3>
                  <p className="eyebrow mt-2 text-ember">{tier.slots}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-sm leading-relaxed text-cream-dim"
                      >
                        <span className="mt-1 text-rust-bright" aria-hidden>
                          &#10003;
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <CTAButton className="w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GRAPHIC NOVEL ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{investBrief.graphicNovel.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.graphicNovel.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-dim md:text-lg">
              {investBrief.graphicNovel.paragraph}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl px-6 md:px-10">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm shadow-2xl shadow-ink">
            <Image
              src="/images/graphic-novel-collage.webp"
              alt="Dallas & Allegra limited-edition graphic novel: full cover, spine, and an open two-page spread in a noir red-and-black comic art style."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 90vw"
            />
          </div>
        </Reveal>
      </section>

      {/* ============ HOW YOU GET PAID ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{investBrief.repaid.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.repaid.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5">
            {investBrief.repaid.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={investBrief.repaid.source.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-xs text-steel underline decoration-steel/40 underline-offset-2 transition-colors hover:text-cream"
            >
              {investBrief.repaid.source.text}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 border-l-2 border-rust-bright/50 pl-5 text-sm italic leading-relaxed text-steel">
              {investBrief.repaid.caveat}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW THIS WORKS ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">{investBrief.howItWorks.eyebrow}</p>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.howItWorks.heading}
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {investBrief.howItWorks.points.map((point, i) => (
              <Reveal key={point.label} delay={i * 0.1}>
                <p className="font-display text-3xl text-rust-bright">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-lg tracking-wide text-cream">
                  {point.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW TO PLEDGE ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">{investBrief.howToPledge.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.howToPledge.heading}
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8">
            {investBrief.howToPledge.steps.map((step, i) => (
              <Reveal key={step.label} delay={i * 0.08}>
                <div className="flex items-start gap-5 rounded-sm border border-cream/10 bg-ink/40 p-6">
                  <span className="font-display flex h-11 w-11 flex-none items-center justify-center rounded-full bg-rust-bright text-xl text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg tracking-wide text-cream">
                      {step.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream-dim md:text-base">
                      {step.body}
                    </p>
                    {"href" in step && step.href && (
                      <a
                        href={step.href}
                        className="mt-3 inline-flex items-center justify-center rounded-full bg-rust-bright px-5 py-2.5 text-xs font-medium tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember"
                      >
                        {step.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-12 text-center">
            <CTAButton />
          </Reveal>
        </div>
      </section>

      {/* ============ BEYOND SEED&SPARK ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{investBrief.whyBeyond.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {investBrief.whyBeyond.heading}
            </h2>
            <p className="font-serif mx-auto mt-6 max-w-2xl text-lg italic leading-relaxed text-cream-dim">
              {investBrief.whyBeyond.paragraph}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">Questions</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              Before You Say Yes
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {investBrief.faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 4) * 0.05} className="py-6">
                <h3 className="font-display text-lg tracking-wide text-cream">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim md:text-base">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-navy-deep py-28 md:py-36">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/key-art-square.jpg"
            alt=""
            fill
            className="object-cover object-top"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/90 to-navy-deep" />

        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.98] text-cream sm:text-6xl">
              {investBrief.closing.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-dim">
              {investBrief.closing.sub}
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
