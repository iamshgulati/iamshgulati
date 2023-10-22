/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "postcss-nested": {},
    autoprefixer: {},
    // "postcss-fail-on-warn": {},
  },
};

module.exports = config;
