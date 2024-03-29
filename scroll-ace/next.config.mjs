// next.config.mjs

import { use } from 'react';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'i.ibb.co', 'images.unsplash.com'],
  },
  webpack(config, {isServer, webpack}) {

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
};

export default nextConfig;