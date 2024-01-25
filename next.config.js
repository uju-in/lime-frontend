/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.coupangcdn.com',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        pathname: '/dn/**'
      },
    ],
  }
}

module.exports = nextConfig
