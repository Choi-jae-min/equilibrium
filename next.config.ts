import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3gpm31mhrkdad.cloudfront.net',
                pathname: '/**',
            },
        ],
    },
    outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
