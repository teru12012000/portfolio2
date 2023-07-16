/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  }
}

module.exports = withVanillaExtract(nextConfig)
