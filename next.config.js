module.exports = {
  distDir: "build",
  eslint: { ignoreDuringBuilds: true },
  output: "standalone",
  pageExtensions: ["page.jsx", "page.js"],
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
