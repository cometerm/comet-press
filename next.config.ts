import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["postgres"],
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  output: "standalone",
};

export default nextConfig;
