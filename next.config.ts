import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "www.theknottyones.com",
      },
    ],
  },
};

export default nextConfig;
