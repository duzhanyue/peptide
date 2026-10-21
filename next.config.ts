import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/products/ghk-cu', destination: '/products/cu', permanent: true },
      { source: '/products/bpc-157', destination: '/products/bc', permanent: true },
      { source: '/products/mots-c', destination: '/products/ms', permanent: true },
      { source: '/products/tesamorelin', destination: '/products/tsm', permanent: true },
    ];
  },
};

export default nextConfig;
