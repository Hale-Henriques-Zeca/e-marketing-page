import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // 👇 resolve conflito com Turbopack
  turbopack: {},

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },

  experimental: {
    serverActions: {},
  },
};

export default nextConfig;