import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  compress: true,

  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;