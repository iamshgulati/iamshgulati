import baseConfig, { restrictEnvAccess } from "@shgulati/eslint-config/base";
import nextjsConfig from "@shgulati/eslint-config/nextjs";
import reactConfig from "@shgulati/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**", "out/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
