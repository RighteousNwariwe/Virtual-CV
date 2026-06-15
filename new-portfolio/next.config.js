/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@splinetool/react-spline'],
  output: 'export',
  basePath: '/Virtual-Portfolio',
  assetPrefix: '/Virtual-Portfolio/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
