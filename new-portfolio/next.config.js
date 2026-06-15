/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@splinetool/react-spline'],
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
