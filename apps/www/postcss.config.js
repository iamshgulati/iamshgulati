// prettier-ignore
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    "postcss-nesting": {},
    "postcss-combine-duplicated-selectors": {},
    "postcss-discard-empty": {},
    "autoprefixer": {},
  },
};

module.exports = config;
