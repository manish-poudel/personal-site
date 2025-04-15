/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-site', // Replace 'personal-site' with your repository name
  assetPrefix: '/personal-site', // Ensures static assets are served correctly
};

module.exports = nextConfig;
