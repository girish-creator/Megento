import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().min(1).max(160),
  role: z.string().trim().max(120).optional().default(""),
  interest: z.enum(["onderzoeker", "omzetter", "kwalificatiestrijder", "devops", "platform", "support", "not-sure"]),
  message: z.string().trim().max(2000).optional().default(""),
  consent: z.literal(true),
  // Honeypot: real users leave it empty.
  website: z.string().max(0).optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;
