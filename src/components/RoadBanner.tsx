"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RoadBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section ref={ref} className="relative h-[46vh] w-full overflow-hidden bg-ink md:h-[60vh]">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/images/key-art-road.jpg"
          alt="An empty highway leads toward Bellvue Falls and Wyndham under a burning sunset sky, with the Dallas & Allegra title treatment."
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/40" />
    </section>
  );
}
