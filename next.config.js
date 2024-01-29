/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop-phinf.pstatic.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.coupangcdn.com',
        port: '',
      },
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
