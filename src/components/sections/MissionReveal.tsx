import React from "react";
import { motion } from "framer-motion";
import { TextBoxReveal } from "../ui/text-box-reveal";
import { DitherCanvas } from "../ui/DitherCanvas";

export function MissionReveal() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Dither continuing from Hero - covers top half, blurs to white */}
      <div className="absolute top-0 left-0 right-0 h-[50vh] pointer-events-none">
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
        {/* Progressive blur - increases as you go down */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-white/30" />
        {/* Gradient overlay - white fades in from bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* Background for lower section */}
      <div className="absolute top-[50vh] bottom-0 left-0 right-0 bg-[#f5f5f5]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Scroll hint - on top of dither */}
        <div className="flex flex-col items-center justify-center py-16 md:py-24">
          <p className="text-sm md:text-base font-medium text-neutral-600 tracking-wide mb-4">
            Scroll to reveal text word by word
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-neutral-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </motion.div>
        </div>

        {/* First paragraph - About Corelia Academy */}
        <TextBoxReveal
          highlight="Corelia"
          highlightTextClass="!text-orange-500"
          highlightBgClass="!bg-orange-400"
        >
          Corelia Academy is a blockchain training institute for developers and Web3 builders. We provide hands-on courses practical projects and mentorship from industry experts to prepare you for the decentralized future.
        </TextBoxReveal>

        {/* Second paragraph - Vision */}
        <TextBoxReveal
          highlight="blockchain"
          highlightTextClass="!text-orange-500"
          highlightBgClass="!bg-orange-400"
        >
          Our vision is to cultivate a high-quality generation of blockchain developers who can lead innovation in Web3 and shape the future of decentralized technology across Vietnam and beyond.
        </TextBoxReveal>
      </div>
    </section>
  );
}
