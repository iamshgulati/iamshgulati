import baseConfig from "@shgulati/postcss-config";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    ...baseConfig.plugins,
  },
};

module.exports = config;
