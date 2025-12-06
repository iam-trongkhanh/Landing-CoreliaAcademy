import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { DitherCanvas } from "../ui/DitherCanvas";
import { TextBoxReveal } from "../ui/text-box-reveal";

export function HeroMissionWrapper() {
  return (
    <div className="relative overflow-hidden">
      {/* Single Dither Background for both sections */}
      <div className="absolute inset-0">
        <DitherCanvas
          color="#2a2a2a"
          bgColor="#ffffff"
          pixelSize={3}
          patternScale={2}
          patternDensity={0.7}
          speed={0.3}
          edgeFade={0.4}
          enableRipples={false}
          enableLiquid={false}
        />
        {/* Blur overlay for softer effect */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/30" />
        {/* Gradient that fades dither to white at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section>
          <ContainerScroll
            titleComponent={
              <h1 className="text-4xl font-semibold text-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
                Blockchain Training for <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none drop-shadow-[0_4px_20px_rgba(255,255,255,0.9)]">
                  Web3 Builders
                </span>
              </h1>
            }
          >
            <img
              src="/gallery/gallery-1.webp"
              alt="Corelia Academy Students"
              className="w-full h-full object-cover"
            />
          </ContainerScroll>
        </section>

        {/* Mission Section - negative margin to overlay laptop when scrolled */}
        <section className="-mt-[25rem] md:-mt-[35rem] relative z-20">
          {/* Combined Text Reveal - both paragraphs in one */}
          <TextBoxReveal
            highlight="Corelia"
            highlightTextClass="!text-orange-500"
            highlightBgClass="!bg-orange-400"
          >
            Corelia Academy is a blockchain training institute for developers and Web3 builders. We provide hands-on courses, practical projects, and mentorship from industry experts to prepare you for the decentralized future. Our vision is to cultivate a high-quality generation of blockchain developers who can lead innovation in Web3 and shape the future of decentralized technology across Vietnam and beyond.
          </TextBoxReveal>
        </section>
      </div>
    </div>
  );
}
