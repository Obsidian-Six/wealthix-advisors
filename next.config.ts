import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Static export for GitHub Pages
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
  // trailingSlash: true,
  // assetPrefix: "/wealthix-advisors",
  // basePath: "/wealthix-advisors",
};

export default nextConfig;
