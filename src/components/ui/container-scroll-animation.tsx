import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export function ContainerScroll({
  titleComponent,
  children,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex flex-col overflow-hidden"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Title - ABOVE the card */}
        <div className="max-w-5xl mx-auto text-center mb-4 md:mb-0">
          {titleComponent}
        </div>

        {/* 3D Card */}
        <motion.div
          style={{
            rotateX: rotate,
            scale,
          }}
          className="max-w-5xl -mt-8 md:-mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-2 md:p-4 relative cursor-pointer group"
        >
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#651224]/20 to-purple-500/20 rounded-[40px] blur-3xl -z-10 scale-95 transition-all duration-300 group-hover:from-[#651224]/40 group-hover:to-purple-500/40 group-hover:scale-100" />

          {/* Card container */}
          <div className="relative h-full w-full border-4 border-[#3a3a3a] bg-[#1a1a1a] rounded-[30px] shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_0_80px_rgba(101,18,36,0.4)]">
            {/* Screen bezel */}
            <div className="absolute inset-2 md:inset-4 rounded-[22px] overflow-hidden bg-gray-900">
              {/* Screen reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-10 transition-opacity duration-300 group-hover:from-white/10" />

              {/* Content */}
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                {children}
              </div>
            </div>

            {/* Notch/Camera */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-[#2a2a2a] rounded-full hidden md:block transition-all duration-300 group-hover:bg-[#651224] group-hover:shadow-[0_0_10px_rgba(101,18,36,0.5)]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
