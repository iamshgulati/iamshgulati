/* eslint-disable no-restricted-properties */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "test", "production", "ci"])
      .default("development"),
    PORT: z.coerce.number().default(3000),
  },
  server: {
    WWW_APP_URL: z.string().optional(),
    WWW_USE_CUSTOM_FONTS: z
      .enum(["true", "false"])
      .transform((value) => value === "true"),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    WWW_APP_URL: process.env.WWW_APP_URL,
    WWW_USE_CUSTOM_FONTS: process.env.WWW_USE_CUSTOM_FONTS,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export const IS_PRODUCTION =
  env.NODE_ENV === "production" || env.NODE_ENV === "ci";
