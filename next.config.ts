import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: "/wealthix-advisors",
  basePath: "/wealthix-advisors",
};

export default nextConfig;
