import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/claro-design-system",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
