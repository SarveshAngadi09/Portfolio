/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? './' : '',
  trailingSlash: true,
}

module.exports = nextConfig
