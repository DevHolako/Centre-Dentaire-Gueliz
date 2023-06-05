import { z } from "zod";

export const ActeSchema = z.object({
  nom: z
    .string()
    .trim()
    .min(2, { message: "nom doit contenir au moins 2 caractères" }),
  acte: z
    .string()
    .trim()
    .min(2, { message: "acte doit contenir au moins 2 caractères" }),
  prenom: z
    .string()
    .trim()
    .min(2, { message: "prenom doit contenir au moins 2 caractères" }),
  montant: z.string().transform((value) => parseInt(value, 10)),
  date: z.string(),
  method: z
    .enum(["card", "espece", "chéque"])
    .refine(
      (value) => value !== undefined,
      "method doit être égal à l'une des valeurs suivantes : card, espce, chéque"
    ),

  doc_id: z.string().transform((val) => parseInt(val)),
});

export type ActeFrom = z.infer<typeof ActeSchema>;
