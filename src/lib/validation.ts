import { object, string } from "zod";

export const ogImageSchema = object({
  title: string().optional(),
  publishedAt: string()
    .optional()
    .transform((v) => (v ? decodeURIComponent(v) : undefined)),
});
