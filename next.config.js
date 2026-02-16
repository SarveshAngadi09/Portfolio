/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',           // static HTML export
  basePath: '/Portfolio',     // GitHub repo name
  assetPrefix: '/Portfolio/',          // use relative paths for _next
  trailingSlash: true,        // ensures proper folder structure
}

module.exports = nextConfig
