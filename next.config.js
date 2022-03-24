module.exports = {
  distDir: "build",
  eslint: { ignoreDuringBuilds: true },
  outputStandalone: true,
  pageExtensions: ["page.jsx", "page.js"],
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};
