import * as z from "zod";

export const ogImageSchema = z.object({
  title: z.string().optional().default("Hello! I'm Shubham Gulati."),
  publishedAt: z.string().optional(),
});
