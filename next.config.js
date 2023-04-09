/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'unsplash.com', 'localhost', '127.0.0.1', 'tailwindui.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
    ]
  },
}

module.exports = nextConfig
