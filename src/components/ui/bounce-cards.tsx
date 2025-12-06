import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface BounceCardsProps {
  images: string[];
  containerClassName?: string;
  cardClassName?: string;
}

export function BounceCards({
  images,
  containerClassName,
  cardClassName,
}: BounceCardsProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
    setHoveredIndex(null);
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center min-h-[400px] md:min-h-[500px] py-12 px-4",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-[280px] md:w-[350px] h-[350px] md:h-[450px]"
        style={{
          rotateX: isHovering ? rotateX : 0,
          rotateY: isHovering ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((image, index) => {
          const totalCards = images.length;
          const middleIndex = (totalCards - 1) / 2;
          const offset = index - middleIndex;

          // Calculate transforms
          const baseRotation = offset * 12;
          const baseX = offset * 8;
          const baseY = Math.abs(offset) * 5;
          const baseZ = -Math.abs(offset) * 20;

          // Spread values when hovering container
          const spreadX = isHovering ? offset * 60 : baseX;
          const spreadRotation = isHovering ? offset * 8 : baseRotation;

          // Individual card hover
          const isCardHovered = hoveredIndex === index;
          const liftZ = isCardHovered ? 80 : 0;
          const liftScale = isCardHovered ? 1.1 : 1;

          return (
            <motion.div
              key={index}
              className={cn(
                "absolute inset-0 rounded-2xl overflow-hidden cursor-pointer",
                "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]",
                cardClassName
              )}
              style={{
                zIndex: isCardHovered ? 100 : totalCards - Math.abs(offset),
              }}
              initial={{
                rotate: baseRotation,
                x: baseX,
                y: baseY,
                z: baseZ,
              }}
              animate={{
                rotate: spreadRotation,
                x: spreadX,
                y: isCardHovered ? -30 : baseY,
                z: baseZ + liftZ,
                scale: liftScale,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 pointer-events-none" />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{
                  opacity: isCardHovered ? 1 : 0,
                  x: isCardHovered ? "100%" : "-100%",
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-white/0 pointer-events-none"
                animate={{
                  borderColor: isCardHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0)",
                  boxShadow: isCardHovered
                    ? "0 0 30px rgba(255,255,255,0.3), inset 0 0 30px rgba(255,255,255,0.1)"
                    : "none",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default BounceCards;
