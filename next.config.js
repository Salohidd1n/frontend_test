/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  env: {
    BASE_URL: 'https://dummyjson.com/'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: ''
      }
    ]
  }
}
