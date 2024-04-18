/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    AUTH_URL: process.env.AUTH_URL,
    AUTH_EMPRESA_ID: process.env.AUTH_EMPRESA_ID,
    AUTH_APP_ID: process.env.AUTH_APP_ID,
  }
}

module.exports = nextConfig
