import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "../../lib/utils";

interface LetterGlitchProps {
  letters?: string;
  colors?: string[];
  speed?: number;
  density?: number;
  className?: string;
  children?: React.ReactNode;
}

interface GlitchLetter {
  x: number;
  y: number;
  char: string;
  opacity: number;
  targetOpacity: number;
  speed: number;
  color: string;
  size: number;
  glitchIntensity: number;
  glitchPhase: number;
  velocityX: number;
  velocityY: number;
}

export function LetterGlitch({
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
  colors = ["#651224", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"],
  speed = 1,
  density = 0.6,
  className,
  children,
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lettersRef = useRef<GlitchLetter[]>([]);
  const timeRef = useRef(0);

  const createLetter = useCallback(
    (width: number, height: number): GlitchLetter => ({
      x: Math.random() * width,
      y: Math.random() * height,
      char: letters[Math.floor(Math.random() * letters.length)],
      opacity: 0,
      targetOpacity: Math.random() * 0.6 + 0.2,
      speed: (Math.random() * 0.5 + 0.5) * speed,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 24 + 14,
      glitchIntensity: Math.random(),
      glitchPhase: Math.random() * Math.PI * 2,
      velocityX: (Math.random() - 0.5) * 0.3,
      velocityY: (Math.random() - 0.5) * 0.3,
    }),
    [letters, colors, speed]
  );

  const initLetters = useCallback(
    (width: number, height: number) => {
      const count = Math.floor((width * height) / 8000) * density;
      lettersRef.current = Array.from({ length: count }, () =>
        createLetter(width, height)
      );
    },
    [createLetter, density]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { clientWidth: w, clientHeight: h } = container;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      initLetters(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const { clientWidth: w, clientHeight: h } = container;
      timeRef.current += 0.016;

      ctx.clearRect(0, 0, w, h);

      lettersRef.current.forEach((letter, i) => {
        // Smooth opacity transition
        const opacityDiff = letter.targetOpacity - letter.opacity;
        letter.opacity += opacityDiff * 0.02 * letter.speed;

        // Occasionally change target opacity
        if (Math.random() < 0.005) {
          letter.targetOpacity = Math.random() < 0.3 ? 0 : Math.random() * 0.6 + 0.2;
        }

        // Respawn if faded out
        if (letter.opacity < 0.01 && letter.targetOpacity === 0) {
          lettersRef.current[i] = createLetter(w, h);
          return;
        }

        // Subtle movement
        letter.x += letter.velocityX;
        letter.y += letter.velocityY;

        // Wrap around screen
        if (letter.x < -50) letter.x = w + 50;
        if (letter.x > w + 50) letter.x = -50;
        if (letter.y < -50) letter.y = h + 50;
        if (letter.y > h + 50) letter.y = -50;

        // Glitch effect
        const glitchActive =
          Math.sin(timeRef.current * 3 + letter.glitchPhase) > 0.7 &&
          letter.glitchIntensity > 0.5;

        const glitchOffsetX = glitchActive ? (Math.random() - 0.5) * 8 : 0;
        const glitchOffsetY = glitchActive ? (Math.random() - 0.5) * 4 : 0;

        // Random character change during glitch
        if (glitchActive && Math.random() < 0.1) {
          letter.char = letters[Math.floor(Math.random() * letters.length)];
        }

        ctx.save();
        ctx.font = `bold ${letter.size}px "JetBrains Mono", "Fira Code", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Main letter
        ctx.globalAlpha = letter.opacity * 0.8;
        ctx.fillStyle = letter.color;
        ctx.fillText(
          letter.char,
          letter.x + glitchOffsetX,
          letter.y + glitchOffsetY
        );

        // RGB split effect during glitch
        if (glitchActive) {
          ctx.globalAlpha = letter.opacity * 0.4;
          ctx.fillStyle = "#ff0040";
          ctx.fillText(letter.char, letter.x - 3 + glitchOffsetX, letter.y + glitchOffsetY);
          ctx.fillStyle = "#00ff90";
          ctx.fillText(letter.char, letter.x + 3 + glitchOffsetX, letter.y + glitchOffsetY);
        }

        // Subtle glow
        ctx.globalAlpha = letter.opacity * 0.3;
        ctx.shadowColor = letter.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = letter.color;
        ctx.fillText(letter.char, letter.x + glitchOffsetX, letter.y + glitchOffsetY);

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [createLetter, initLetters, letters]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      {children && (
        <div className="relative z-10 w-full h-full">{children}</div>
      )}
    </div>
  );
}
