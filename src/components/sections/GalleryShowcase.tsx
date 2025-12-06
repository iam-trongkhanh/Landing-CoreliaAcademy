import React from "react";
import { BounceCards } from "../ui/bounce-cards";
import { LetterGlitch } from "../ui/letter-glitch";

const galleryImages = [
  "/gallery/gallery-3.webp",
  "/gallery/gallery-5.webp",
  "/gallery/gallery-7.webp",
  "/gallery/gallery-9.webp",
  "/gallery/gallery-11.webp",
];

export function GalleryShowcase() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-[#1a1a2e]">
      {/* Letter Glitch Background */}
      <LetterGlitch
        letters="CORELIA ACADEMY EDUCATION FUTURE SUCCESS"
        colors={["#651224", "#8b5cf6", "#ec4899", "#f59e0b"]}
        speed={0.8}
        density={0.4}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#ec4899] mb-4">
            Campus Life
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Experience <span className="text-[#f59e0b]">Vibrant</span>
            <br />
            Student Life
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8">
            Join a community of passionate learners, explore endless opportunities,
            and create unforgettable memories at Corelia Academy.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#651224] to-[#8b5cf6] text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore Campus
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* Bounce Cards */}
        <div className="flex-1 flex items-center justify-center">
          <BounceCards
            images={galleryImages}
            containerClassName="min-h-[350px] md:min-h-[450px]"
            cardClassName="shadow-2xl shadow-black/50"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#651224]/30 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-[#8b5cf6]/30 to-transparent rounded-full blur-xl" />
    </section>
  );
}
