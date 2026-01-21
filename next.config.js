/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment, set basePath if deploying to username.github.io/repo-name
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;

