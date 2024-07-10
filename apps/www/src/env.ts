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
    WWW_USE_CUSTOM_FONTS: z.coerce.boolean().default(false),
  },
  client: {
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  },
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION ||
    !!process.env.CI ||
    process.env.npm_lifecycle_event === "lint",
});

export const IS_PRODUCTION =
  env.NODE_ENV === "production" || env.NODE_ENV === "ci";
