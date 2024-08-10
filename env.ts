/* eslint-disable no-restricted-properties */

export const env = {
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  NODE_ENV: process.env.NODE_ENV,
  APP_URL: process.env.APP_URL,
} as const;
