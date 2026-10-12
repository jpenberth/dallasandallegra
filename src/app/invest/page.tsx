import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { campaignUrl } from "@/lib/content";
import { invest } from "@/lib/invest-content";

export const metadata: Metadata = {
  title: "Executive Producer — Dallas & Allegra",
  description:
    "A limited number of Executive Producer positions on Dallas & Allegra.",
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
    description:
      "A limited number of Executive Producer positions on Dallas & Allegra.",
    images: [
      {
        url: "/invest-og.png",
        width: 1200,
        height: 630,
        alt: "Only 8 Executive Producer credits exist. Want one? — Dallas & Allegra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Only 8 Executive Producer Credits Exist.",
    description:
      "A limited number of Executive Producer positions on Dallas & Allegra.",
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
      {invest.closing.cta}
    </a>
  );
}

export default function InvestPage() {
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
              {invest.deadline}
            </div>
            <p className="eyebrow mt-5 text-ember">{invest.eyebrow}</p>
            <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-[0.98] text-cream sm:text-5xl md:text-6xl">
              {invest.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream-dim md:text-lg">
              {invest.subhead}
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ THE OPPORTUNITY ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{invest.opportunity.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.opportunity.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5">
            {invest.opportunity.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ ATTACHMENT ============ */}
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
            <p className="eyebrow text-ember">{invest.attachment.eyebrow}</p>
            <h2 className="font-display mt-3 text-5xl leading-[0.98] text-cream sm:text-6xl md:text-7xl">
              {invest.attachment.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {["Insidious", "Jurassic World", "Iron Man 3", "Avengers: Endgame", "Avengers: Doomsday (rumored)"].map(
              (credit) => (
                <span
                  key={credit}
                  className="eyebrow rounded-full border border-rust-bright/40 bg-rust/10 px-4 py-2 text-cream"
                >
                  {credit}
                </span>
              )
            )}
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-5">
            {invest.attachment.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ TIERS ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">Executive Producer Positions</p>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl leading-[0.98] text-cream sm:text-5xl">
              Two ways in. Both get your name on the film.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {invest.tiers.map((tier, i) => (
              <Reveal key={tier.amount} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-sm border p-8 md:p-10 ${
                    tier.featured
                      ? "border-rust-bright/60 bg-rust/10"
                      : "border-line bg-navy-deep/40"
                  }`}
                >
                  {tier.featured && (
                    <p className="eyebrow mb-4 text-rust-bright">Most Impact</p>
                  )}
                  <p className="font-display text-5xl text-cream">{tier.amount}</p>
                  <h3 className="font-display mt-3 text-xl tracking-wide text-cream">
                    {tier.name}
                  </h3>
                  <p className="eyebrow mt-2 text-ember">{tier.slots}</p>
                  <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                    {tier.description}
                  </p>

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
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{invest.graphicNovel.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.graphicNovel.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-dim md:text-lg">
              {invest.graphicNovel.paragraph}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-xs">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm shadow-2xl shadow-ink">
              <Image
                src="/images/graphic-novel-cover.webp"
                alt="Dallas & Allegra limited-edition graphic novel cover: Dallas and Allegra embrace beneath a full moon over the Pittsburgh skyline, rendered in a noir red-and-black comic art style."
                fill
                className="object-cover"
                sizes="(min-width: 768px) 320px, 80vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DISTRIBUTION UPSIDE ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{invest.distribution.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.distribution.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5">
            {invest.distribution.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-cream-dim md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={invest.distribution.source.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-xs text-steel underline decoration-steel/40 underline-offset-2 transition-colors hover:text-cream"
            >
              {invest.distribution.source.text}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 border-l-2 border-rust-bright/50 pl-5 text-sm italic leading-relaxed text-steel">
              {invest.distribution.caveat}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW THIS WORKS ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">{invest.howItWorks.eyebrow}</p>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.howItWorks.heading}
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {invest.howItWorks.points.map((point, i) => (
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

      {/* ============ BEYOND SEED&SPARK ============ */}
      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">{invest.whyBeyond.eyebrow}</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.whyBeyond.heading}
            </h2>
            <p className="font-serif mx-auto mt-6 max-w-2xl text-lg italic leading-relaxed text-cream-dim">
              {invest.whyBeyond.paragraph}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ember">Questions</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              Before You Say Yes
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {invest.faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 4) * 0.05} className="py-7">
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
            <h2 className="font-display text-4xl leading-[0.98] text-cream sm:text-5xl">
              {invest.closing.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-dim">
              {invest.closing.sub}
            </p>
            <div className="mt-10">
              <CTAButton />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-ink px-6 py-10 text-center md:px-10">
        <p className="text-xs text-steel-dark">
          &copy; {new Date().getFullYear()} Dallas &amp; Allegra &middot; Written
          &amp; Directed by J. Penberth Rabold
        </p>
      </footer>
    </main>
  );
}
