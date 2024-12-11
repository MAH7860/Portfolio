/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export', // Enable static export
    images: {
      unoptimized: true, // Disable Image Optimization for static export
    },
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  