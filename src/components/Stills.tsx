"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { stills } from "@/lib/content";

function ExpandIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="text-cream"
    >
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Stills() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + stills.length) % stills.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % stills.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <section id="stills" className="scroll-mt-20 bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-ember">Stills</p>
          <h2 className="font-display mt-3 text-5xl leading-[0.95] text-cream sm:text-6xl">
            Bellvue Falls
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {stills.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 0.08}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="absolute inset-0 h-full w-full"
                aria-label={`View full image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ExpandIcon />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 text-cream-dim transition-colors hover:text-cream"
            >
              <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M1 1l14 14M15 1L1 15" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 p-3 text-cream-dim transition-colors hover:text-cream md:left-6"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M9 1L3 7l6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 p-3 text-cream-dim transition-colors hover:text-cream md:right-6"
            >
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M5 1l6 6-6 6" />
              </svg>
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-6 h-[80vh] w-full max-w-5xl md:mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={stills[index].src}
                alt={stills[index].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
