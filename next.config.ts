import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: isProd
    ? {
        unoptimized: true,
        loader: "custom",
        loaderFile: "./lib/loaders/image-loader.ts",
      }
    : {
        unoptimized: true,
      },
  // Allow setting basePath/assetPrefix via env (useful for GitHub Pages project sites)
  // For GitHub Pages, set BASE_PATH to "/<repo-name>"
  basePath:
    process.env.BASE_PATH && process.env.BASE_PATH !== "/"
      ? (process.env.BASE_PATH as `/${string}`)
      : undefined,
  assetPrefix:
    process.env.BASE_PATH && process.env.BASE_PATH !== "/"
      ? `${process.env.BASE_PATH}/`
      : undefined,
};

export default nextConfig;
