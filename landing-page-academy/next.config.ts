import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"], // Modern image formats for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Tắt optimization để đảm bảo images load được trên Netlify
    // Với @netlify/plugin-nextjs, có thể cần unoptimized để tránh lỗi
    unoptimized: true,
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true,
  // Enable static optimization
  experimental: {
    optimizePackageImports: ["@/components", "@/lib"],
  },
};

export default nextConfig;
