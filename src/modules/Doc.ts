import { z } from "zod";

export const DocSchema = z.object({
  nomComplete: z
    .string()
    .trim()
    .min(5, { message: "nom doit contenir au moins 5 caractères" }),
});

export type DocForm = z.infer<typeof DocSchema>;
