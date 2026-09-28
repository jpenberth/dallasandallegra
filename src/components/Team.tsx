import Reveal from "./Reveal";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-navy-deep py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Cast &amp; Crew</p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] text-cream sm:text-6xl">
            The Team
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 2) * 0.1}>
              <h3 className="font-display text-2xl tracking-wide text-cream">
                {member.name}
              </h3>
              <p className="eyebrow mt-1 text-rust-bright">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                {member.bio}
              </p>
              {member.links && (
                <div className="mt-3 flex flex-wrap gap-4">
                  {member.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="eyebrow text-ember hover:text-rust-bright"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
