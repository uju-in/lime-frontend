/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.coupangcdn.com',
      },
    ],
  }
}

module.exports = nextConfig
