import { motion } from "framer-motion";

interface DotGridBackgroundProps {
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export function DotGridBackground({
  dotColor = "#651224",
  dotSize = 1.5,
  spacing = 24,
  opacity = 0.15,
  className = "",
  animate = false,
}: DotGridBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Dot Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="dot-grid"
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={spacing / 2}
              cy={spacing / 2}
              r={dotSize}
              fill={dotColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      {/* Optional animated gradient overlay for depth */}
      {animate && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, rgba(101, 18, 36, 0.03) 0%, transparent 50%),
                         radial-gradient(ellipse at 70% 80%, rgba(101, 18, 36, 0.02) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

// Simpler CSS-only version for better performance
export function DotGridCSS({
  dotColor = "rgba(101, 18, 36, 0.12)",
  spacing = 20,
  className = "",
}: {
  dotColor?: string;
  spacing?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} 1.5px, transparent 1.5px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}
