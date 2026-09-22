import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // static HTML export for GitHub Pages / custom domain
  trailingSlash: true,     // produces /projects/novella/index.html instead of .html files — cleaner on static hosts
  images: {
    unoptimized: true,     // required when using output: "export" (no Next.js server to optimise on the fly)
  },
};

export default nextConfig;
