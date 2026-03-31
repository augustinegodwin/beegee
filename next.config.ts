import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if necessary
        hostname: 'res.cloudinary.com', // replace with your domain
      },
    ],
  },
};

export default nextConfig;
