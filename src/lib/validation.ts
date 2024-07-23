import { z } from "zod";

export const ogImageSchema = z.object({
  title: z.string().optional(),
  publishedAt: z
    .string()
    .optional()
    .transform((v) => (v ? decodeURIComponent(v) : undefined)),
});
