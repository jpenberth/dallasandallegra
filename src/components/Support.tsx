import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";
import { campaignUrl, social } from "@/lib/content";

export default function Support() {
  return (
    <section
      id="support"
      className="relative bg-navy-deep py-28 md:py-36"
    >
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Join Us</p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] text-cream sm:text-6xl">
            Help Us Get It Made
          </h2>

          <div className="mt-10 flex justify-center">
            <a
              href={campaignUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rust-bright px-8 py-4 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember"
            >
              Support the Film on Seed&amp;Spark
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          id="newsletter"
          className="mt-24 scroll-mt-28 border-t border-line pt-16"
        >
          <p className="eyebrow text-ember">Exclusive Access</p>
          <h3 className="font-serif mt-3 text-2xl italic text-cream sm:text-3xl">
            Behind the scenes, first.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream-dim">
            Sneak peeks, on-set footage, casting news, and festival dates &mdash;
            straight to your inbox, before anyone else sees them.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm source="support-section" />
          </div>
          <p className="mt-8 text-sm text-steel">
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-ember underline underline-offset-4 hover:text-rust-bright"
            >
              {social.instagramHandle}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
