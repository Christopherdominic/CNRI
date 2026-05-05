import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Prevent Sanity studio packages from being bundled server-side
  serverExternalPackages: ['sanity', '@sanity/vision', 'styled-components'],
};

export default nextConfig;