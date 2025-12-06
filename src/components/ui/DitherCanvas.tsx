import React, { useRef, useEffect, useCallback } from "react";

interface DitherCanvasProps {
  color?: string;
  bgColor?: string;
  pixelSize?: number;
  patternScale?: number;
  patternDensity?: number;
  speed?: number;
  edgeFade?: number;
  enableRipples?: boolean;
  enableLiquid?: boolean;
  className?: string;
}

// Bayer matrix 8x8 for ordered dithering
const bayerMatrix = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

// Improved Perlin-like noise
function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a);
}

function grad(hash: number, x: number, y: number): number {
  const h = hash & 3;
  const u = h < 2 ? x : y;
  const v = h < 2 ? y : x;
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

// Permutation table
const p: number[] = [];
const permutation = [151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
for (let i = 0; i < 256; i++) p[i] = p[i + 256] = permutation[i];

function noise2D(x: number, y: number): number {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;

  x -= Math.floor(x);
  y -= Math.floor(y);

  const u = fade(x);
  const v = fade(y);

  const A = p[X] + Y;
  const B = p[X + 1] + Y;

  return lerp(
    lerp(grad(p[A], x, y), grad(p[B], x - 1, y), u),
    lerp(grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1), u),
    v
  );
}

// Fractal Brownian Motion
function fbm(x: number, y: number, octaves: number = 4): number {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  let maxValue = 0;

  for (let i = 0; i < octaves; i++) {
    value += amplitude * noise2D(x * frequency, y * frequency);
    maxValue += amplitude;
    amplitude *= 0.5;
    frequency *= 2;
  }

  return value / maxValue;
}

export function DitherCanvas({
  color = "#ffffff",
  bgColor = "#000000",
  pixelSize = 4,
  patternScale = 2,
  patternDensity = 1,
  speed = 0.5,
  edgeFade = 0.25,
  enableRipples = false,
  enableLiquid = false,
  className = "",
}: DitherCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const timeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const time = timeRef.current;

    // Parse colors
    const dotR = parseInt(color.slice(1, 3), 16);
    const dotG = parseInt(color.slice(3, 5), 16);
    const dotB = parseInt(color.slice(5, 7), 16);
    const bgR = parseInt(bgColor.slice(1, 3), 16);
    const bgG = parseInt(bgColor.slice(3, 5), 16);
    const bgB = parseInt(bgColor.slice(5, 7), 16);

    // Create image data
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    // Process each pixel block
    for (let y = 0; y < height; y += pixelSize) {
      for (let x = 0; x < width; x += pixelSize) {
        // Normalize coordinates
        const nx = (x / width) * patternScale;
        const ny = (y / height) * patternScale;

        // Calculate base noise with time animation - creates flowing waves
        let noiseValue: number;

        if (enableLiquid) {
          // Liquid flowing effect - more dramatic movement
          noiseValue = fbm(nx + time * 0.15, ny + time * 0.08, 5);
          noiseValue += 0.4 * fbm(nx * 2 - time * 0.1, ny * 2 + time * 0.05, 4);
          noiseValue += 0.2 * fbm(nx * 4 + time * 0.2, ny * 4 - time * 0.1, 3);
        } else {
          // Subtle animated wave - default like demo
          noiseValue = fbm(nx + time * 0.08, ny + time * 0.04, 4);
          noiseValue += 0.3 * fbm(nx * 1.5 - time * 0.05, ny * 1.5 + time * 0.03, 3);
        }

        // Apply ripple effect from mouse
        if (enableRipples && mouseRef.current.active) {
          const dx = (x - mouseRef.current.x) / width;
          const dy = (y - mouseRef.current.y) / height;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 0.3) {
            const ripple = Math.sin(dist * 40 - time * 4) * (1 - dist / 0.3);
            noiseValue += ripple * 0.3;
          }
        }

        // Normalize noise to 0-1 range
        noiseValue = (noiseValue + 1) * 0.5;

        // Apply pattern density - lower = more background visible
        // This creates the wave-like regions of dots
        noiseValue = Math.pow(noiseValue, 2.5 - patternDensity * 1.5);

        // Edge fade - smoother transition at edges
        if (edgeFade > 0) {
          const edgeX = Math.min(x / width, 1 - x / width) * 2;
          const edgeY = Math.min(y / height, 1 - y / height) * 2;
          const edgeFactor = Math.pow(Math.min(edgeX, edgeY), edgeFade * 0.5);
          noiseValue *= edgeFactor;
        }

        // Get Bayer threshold for ordered dithering
        const bx = Math.floor(x / pixelSize) % 8;
        const by = Math.floor(y / pixelSize) % 8;
        const threshold = bayerMatrix[by][bx] / 64;

        // Dither decision
        const isDot = noiseValue > threshold;

        // Fill pixel block
        const r = isDot ? dotR : bgR;
        const g = isDot ? dotG : bgG;
        const b = isDot ? dotB : bgB;

        for (let py = 0; py < pixelSize && y + py < height; py++) {
          for (let px = 0; px < pixelSize && x + px < width; px++) {
            const idx = ((y + py) * width + (x + px)) * 4;
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = 255;
          }
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [color, bgColor, pixelSize, patternScale, patternDensity, edgeFade, enableRipples, enableLiquid]);

  const animate = useCallback(() => {
    timeRef.current += speed * 0.016;
    draw();
    animationRef.current = requestAnimationFrame(animate);
  }, [draw, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        // Use lower resolution for performance
        const scale = 0.5;
        canvas.width = rect.width * scale;
        canvas.height = rect.height * scale;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  useEffect(() => {
    if (!enableRipples) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scale = 0.5;
      mouseRef.current.x = (e.clientX - rect.left) * scale;
      mouseRef.current.y = (e.clientY - rect.top) * scale;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableRipples]);

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
