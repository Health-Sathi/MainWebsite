import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  trailingSlash: false,
  output: 'export',
  distDir: 'out',
  assetPrefix: undefined,
  basePath: '',
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize CSS loading
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize CSS extraction
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  },
};

export default nextConfig;




