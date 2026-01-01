import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  }
  // },
  // experimental: {
  //   serverActions: true
  // }
};

export default nextConfig;
