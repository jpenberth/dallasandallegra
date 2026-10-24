"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
        <iframe
          src={src}
          className="h-full w-full"
          allow="autoplay"
          allowFullScreen
          title="Dallas & Allegra storyboards"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
      <Image
        src={poster}
        alt=""
        fill
        className="object-cover"
        priority
        aria-hidden
      />
      <button
        type="button"
        onClick={() => setStarted(true)}
        aria-label="Play the storyboards video"
        className="group absolute inset-0 flex items-center justify-center bg-ink/15 transition-colors hover:bg-ink/5"
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-rust-bright/95 shadow-2xl transition-transform group-hover:scale-105">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#0a0e14" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
