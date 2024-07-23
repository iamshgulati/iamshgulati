import { object, optional, pipe, string, transform } from "valibot";

export const ogImageSchema = object({
  title: optional(string()),
  publishedAt: pipe(
    optional(string()),
    transform((v) => (v ? decodeURIComponent(v) : undefined)),
  ),
});
