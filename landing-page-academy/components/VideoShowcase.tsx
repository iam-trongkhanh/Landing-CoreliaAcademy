"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimateFadeIn } from "@/components/AnimateFadeIn";

export function VideoShowcase() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative isolate min-h-[400px] sm:min-h-[600px] md:min-h-[800px] lg:h-[1000px] xl:h-[1200px] w-full bg-black overflow-x-hidden">
      <div className="pointer-events-none absolute left-1/2 top-8 sm:top-12 md:top-16 w-[180%] -translate-x-1/2 overflow-hidden">
        <div className="video-title-marquee flex items-center gap-8 sm:gap-12 md:gap-16 text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/10">
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
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <AnimateFadeIn>
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-white px-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-white/80">
              Campus overview
            </p>
            <button
              onClick={() => setOpen(true)}
              className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white text-black text-lg sm:text-xl md:text-2xl shadow-[0px_15px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95"
              aria-label="Play campus video"
            >
              ▶
            </button>
          </div>
        </AnimateFadeIn>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-lg sm:rounded-xl md:rounded-3xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/0nn_fOjcYM0?autoplay=1"
              title="Campus overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-black hover:bg-white transition-colors"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
