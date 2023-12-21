import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    APP_URL: z.preprocess(
      (v) => (process.env.APP_URL ? `https://${process.env.APP_URL}` : v),
      process.env.APP_URL ? z.string().min(1) : z.string().optional(),
    ),
    VERCEL_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
    PORT: z.coerce.number().default(3000),
  },

  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {
    // SERVERVAR: z.string(),
    USE_CUSTOM_FONTS: z
      .enum(["true", "false"])
      .optional()
      .transform((v) => v === "true"),
  },

  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */
  runtimeEnv: {
    // SHAREDVAR: process.env.SHAREDVAR,
    NODE_ENV: process.env.NODE_ENV,
    APP_URL: process.env.APP_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    PORT: process.env.PORT,
    // SERVERVAR: process.env.SERVERVAR,
    USE_CUSTOM_FONTS: process.env.USE_CUSTOM_FONTS,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",
});

export const isProduction = env.NODE_ENV === "production";
