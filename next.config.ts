import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/itcgeorgia.ge",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
