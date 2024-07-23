/* eslint-disable no-restricted-properties */

export const env = {
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  WWW_APP_URL: process.env.WWW_APP_URL,
  WWW_USE_CUSTOM_FONTS: process.env.WWW_USE_CUSTOM_FONTS === "true",
} as const;
