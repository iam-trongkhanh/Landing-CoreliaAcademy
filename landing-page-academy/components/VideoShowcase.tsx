"use client";

import Image from "next/image";
import { useState } from "react";

export function VideoShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative isolate h-[1200px] w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute left-1/2 top-16 w-[180%] -translate-x-1/2 overflow-hidden">
        <div className="video-title-marquee flex items-center gap-16 text-[8rem] font-semibold uppercase tracking-[0.4em] text-white/10">
          <span>Campus Overview</span>
          <span>Campus Overview</span>
          <span>Campus Overview</span>
          <span>Campus Overview</span>
        </div>
      </div>
      <Image
        src="/video/campus.jpg"
        alt="Campus overview"
        fill
        priority
        className="object-cover object-center opacity-70"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/80">
          Campus overview
        </p>
        <button
          onClick={() => setOpen(true)}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-[0px_15px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
          aria-label="Play campus video"
        >
          ▶
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/0nn_fOjcYM0?autoplay=1"
              title="Campus overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
