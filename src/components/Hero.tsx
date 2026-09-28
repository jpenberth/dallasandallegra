"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { film, campaignUrl } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[680px] w-full items-end overflow-hidden bg-ink"
    >
      <motion.div style={{ scale }} className="absolute inset-0 bg-ink">
        <Image
          src="/images/poster-vertical.webp"
          alt="Dallas and Allegra key art: the couple stands silhouetted before a full moon over the Pittsburgh skyline and steel mills at sunset, with the film's title treatment."
          fill
          priority
          className="object-contain object-top md:hidden"
          sizes="100vw"
        />
        <Image
          src="/images/hero-skyline-wide.webp"
          alt="Dallas and Allegra key art: the couple stands silhouetted before a full moon over the Pittsburgh skyline and steel mills at sunset, with the film's title treatment."
          fill
          priority
          className="hidden object-cover object-[center_16%] md:block"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 to-transparent md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-ink from-5% via-ink via-90% to-transparent md:h-[42%] md:via-ink/85 md:via-45%" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 md:px-10 md:pb-20"
      >
        <h1 className="font-display animate-fade-up text-3xl tracking-wide text-cream sm:text-4xl">
          Dallas <span className="text-rust-bright">&amp;</span> Allegra
        </h1>

        <p className="mt-4 max-w-xl animate-fade-up text-sm leading-relaxed text-cream-dim [animation-delay:80ms] md:text-base">
          {film.logline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:140ms]">
          <a
            href={campaignUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-rust-bright px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-transform hover:scale-[1.03] hover:bg-ember"
          >
            Support the Film
          </a>
          <a
            href="#newsletter"
            className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Follow the Journey
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="h-10 w-px animate-pulse bg-cream/40" />
      </motion.div>
    </section>
  );
}
