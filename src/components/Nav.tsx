"use client";

import { useEffect, useState } from "react";
import { campaignUrl } from "@/lib/content";

const links = [
  { href: "#story", label: "Story" },
  { href: "#stills", label: "Stills" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          Dallas <span className="text-rust-bright">&amp;</span> Allegra
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-cream-dim transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href={campaignUrl}
            target="_blank"
            rel="noreferrer"
            className="eyebrow rounded-full border border-cream/25 px-5 py-2.5 text-cream transition-colors hover:border-rust-bright hover:bg-rust/20"
          >
            Support
          </a>
        </div>

        <a
          href={campaignUrl}
          target="_blank"
          rel="noreferrer"
          className="eyebrow rounded-full border border-cream/25 px-4 py-2 text-cream md:hidden"
        >
          Support
        </a>
      </nav>
    </header>
  );
}
