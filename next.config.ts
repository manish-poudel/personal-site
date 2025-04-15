/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-site', // Replace 'personal-site' with your repository name
  assetPrefix: '/personal-site', // Ensures static assets are served correctly
  // basePath: '', // Replace 'personal-site' with your repository name
  // assetPrefix: '', // Ensures static assets are served correctly,
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

module.exports = nextConfig;
