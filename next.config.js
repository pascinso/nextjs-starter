module.exports = {
  distDir: "build",
  pageExtensions: ["page.jsx", "page.js"],
  outputStandalone: true,
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};
