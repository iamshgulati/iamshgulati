export default {
  "*.{ts,tsx}": [
    // () => "tsc --skipLibCheck --noEmit",
    "eslint --cache --fix --cache-location 'node_modules/.cache/.eslintcache'",
  ],
  "*.{js,cjs,mjs,ts,tsx,md,mdx,json,css}": [
    "prettier --write --cache --ignore-path='../../.gitignore'",
  ],
};
