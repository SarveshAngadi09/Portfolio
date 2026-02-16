/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/Portfolio',   // your GitHub repo name
  assetPrefix: '/Portfolio/',
}

export default nextConfig
