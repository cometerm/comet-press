import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["postgres"],
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  output: "standalone",
};

export default nextConfig;
