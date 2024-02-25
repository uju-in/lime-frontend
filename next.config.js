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
      {
        protocol: 'https',
        hostname: '*.danawa.com',
        port: '',
      },
    ],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.com',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/dn/**'
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**'
      },
    ],
  }
}

module.exports = nextConfig