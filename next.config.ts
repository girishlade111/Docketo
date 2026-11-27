import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
