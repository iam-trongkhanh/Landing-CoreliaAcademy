import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextBoxRevealProps {
  children: string;
  highlight?: string;
  highlightTextClass?: string;
  highlightBgClass?: string;
  className?: string;
}

/**
 * A scroll-triggered text reveal component with smooth word-by-word animations.
 * Text is hidden initially behind liquid glass pills, revealed as user scrolls.
 */
export function TextBoxReveal({
  children,
  highlight,
  highlightTextClass = "!text-orange-500",
  highlightBgClass = "!bg-orange-400/80 !border-orange-300",
  className = "",
}: TextBoxRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation starts when top hits middle, ends when bottom hits middle
    offset: ["start 0.5", "end 0.5"],
  });

  // Container visibility: hidden initially, fades in quickly
  const containerOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  const words = useMemo(() => {
    return children.split(/\s+/).filter(Boolean);
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
    >
      {/* Scroll space for animation */}
      <div className="h-[60vh]" />

      {/* STICKY TEXT CONTAINER - overlays laptop when scrolled */}
      <motion.div
        className="sticky top-[25vh] -mt-[60vh]"
        style={{ opacity: containerOpacity }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          {/* Frosted glass background for better readability */}
          <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-bold italic leading-[1.3] tracking-tight text-left flex flex-wrap gap-x-[0.3em] gap-y-[0.15em]">
              {words.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  index={i}
                  total={words.length}
                  progress={scrollYProgress}
                  isHighlight={
                    highlight
                      ? word.toLowerCase().replace(/[.,!?]/g, "") ===
                        highlight.toLowerCase()
                      : false
                  }
                  highlightTextClass={highlightTextClass}
                  highlightBgClass={highlightBgClass}
                />
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isHighlight: boolean;
  highlightTextClass: string;
  highlightBgClass: string;
}

function Word({
  word,
  index,
  total,
  progress,
  isHighlight,
  highlightTextClass,
  highlightBgClass,
}: WordProps) {
  // Animation timing - only 5-6 words visible at a time
  // Words appear progressively: hidden -> pill visible -> text revealed
  const revealStart = 0.02;
  const revealEnd = 0.98;
  const revealRange = revealEnd - revealStart;

  // Each word takes a portion of scroll to reveal
  const wordDuration = 0.08; // 8% of scroll per word - faster reveal
  const wordStart = revealStart + (index / total) * revealRange;
  const wordEnd = Math.min(wordStart + wordDuration, 1);

  // Pill appears slightly before word starts revealing (5-6 words ahead)
  const pillVisibleStart = Math.max(0, wordStart - 0.12); // Pill appears ~6 words before

  // Text: hidden -> visible
  const textOpacity = useTransform(progress, [wordStart, wordEnd], [0.1, 1]);

  // Pill: hidden -> visible -> hidden
  // Pill only visible in a window around the word's reveal time
  const pillOpacity = useTransform(
    progress,
    [pillVisibleStart, pillVisibleStart + 0.01, wordStart, wordEnd],
    [0, 1, 1, 0]
  );

  // Gradient: dark (#1a1a1a) at start -> light (#a3a3a3) at end
  const startGray = 26; // #1a1a1a
  const endGray = 163; // #a3a3a3
  const ratio = index / total;
  const grayValue = Math.round(startGray + ratio * (endGray - startGray));
  const pillColor = isHighlight ? undefined : `rgb(${grayValue}, ${grayValue}, ${grayValue})`;

  return (
    <span className="relative inline-block">
      {/* TEXT LAYER */}
      <motion.span
        style={{ opacity: textOpacity }}
        className={cn(
          "relative z-10",
          isHighlight ? highlightTextClass : "text-neutral-900"
        )}
      >
        {word}
      </motion.span>

      {/* PILL LAYER - with blur effect */}
      <motion.span
        style={{
          opacity: pillOpacity,
          backgroundColor: pillColor,
        }}
        className={cn(
          "absolute inset-y-[-2px] inset-x-[-6px] rounded-full z-20 backdrop-blur-[2px]",
          isHighlight ? highlightBgClass : ""
        )}
      />
    </span>
  );
}
