/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',           // static HTML export
  basePath: './',     // GitHub repo name
  assetPrefix: './',          // use relative paths for _next
  trailingSlash: true,        // ensures proper folder structure
}

module.exports = nextConfig
