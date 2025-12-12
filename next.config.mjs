/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Ya no necesitamos remotePatterns porque usamos imágenes locales
    qualities: [75, 85],
  },
}

export default nextConfig
