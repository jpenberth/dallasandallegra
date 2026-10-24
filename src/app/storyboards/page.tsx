import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { storyboards } from "@/lib/storyboards-content";

export const metadata: Metadata = {
  title: "Exclusive First Look: Dallas & Allegra",
  description: "An exclusive first look at Dallas & Allegra for our investors.",
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
    title: "Exclusive First Look: Dallas & Allegra",
    description: "An exclusive first look at Dallas & Allegra for our investors.",
    images: [
      {
        url: "/images/storyboards-poster.webp",
        width: 1672,
        height: 941,
        alt: "Dallas and Allegra key art: the couple stands silhouetted before a full moon over the Pittsburgh skyline, with the film's title treatment.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exclusive First Look: Dallas & Allegra",
    description: "An exclusive first look at Dallas & Allegra for our investors.",
    images: ["/images/storyboards-poster.webp"],
  },
};

export default function StoryboardsPage() {
  return (
    <main className="bg-ink">
      <div className="grain-overlay" />

      <section className="pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <a href="/" className="font-display inline-block text-lg tracking-wide text-cream">
            Dallas <span className="text-rust-bright">&amp;</span> Allegra
          </a>

          <Reveal className="mt-10 text-center">
            <p className="eyebrow text-ember">{storyboards.eyebrow}</p>
            <h1 className="font-display mt-3 text-5xl leading-[0.98] text-cream sm:text-6xl">
              {storyboards.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream-dim">
              {storyboards.subhead}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <VideoPlayer src={storyboards.video.src} poster={storyboards.video.poster} />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="text-center">
            <p className="eyebrow text-ember">The Cast</p>
            <h2 className="font-display mt-3 text-4xl leading-[0.98] text-cream sm:text-5xl">
              The Faces of Dallas &amp; Allegra
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {storyboards.cast.map((member, i) => (
              <Reveal key={member.role} delay={i * 0.08}>
                <div className="h-full rounded-sm border border-cream/10 bg-ink/50 p-7">
                  <p className="font-display text-2xl tracking-wide text-cream">
                    {member.role}
                  </p>
                  <p className="eyebrow mt-1.5 text-ember">{member.actor}</p>

                  {member.credits.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.credits.map((credit) => (
                        <span
                          key={credit}
                          className="rounded-full border border-cream/20 px-3.5 py-1 text-xs tracking-wide text-cream-dim"
                        >
                          {credit}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
