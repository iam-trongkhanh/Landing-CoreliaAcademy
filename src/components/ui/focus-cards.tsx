import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import type { FocusCard } from "../../types/carousel";

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto w-full px-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

function Card({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: FocusCard;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const isHovered = hovered === index;
  const isOtherHovered = hovered !== null && hovered !== index;

  return (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className="rounded-2xl relative overflow-hidden h-72 md:h-96 w-full cursor-pointer group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      animate={{
        filter: isOtherHovered ? "blur(4px)" : "blur(0px)",
        scale: isOtherHovered ? 0.95 : isHovered ? 1.02 : 1,
      }}
    >
      {/* Background Image */}
      <motion.img
        src={card.image}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        animate={{
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white"
          animate={{
            y: isHovered ? -12 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {card.title}
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-gray-200 mt-3 line-clamp-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {card.description}
        </motion.p>

        {card.href && (
          <motion.a
            href={card.href}
            className="inline-flex items-center gap-2 text-white text-sm font-semibold mt-4 group/link"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          >
            <span className="border-b border-white/50 group-hover/link:border-white transition-colors">
              Learn more
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </motion.svg>
          </motion.a>
        )}
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 border-2 border-white/0 rounded-2xl pointer-events-none"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export { Card as FocusCard };
