import { z } from "zod";

export const ProfileSchema = z
  .object({
    nomComplete: z
      .string()
      .trim()
      .min(2, { message: "nom doit contenir au moins 2 caractères" }),
    login: z
      .string()
      .trim()
      .min(2, { message: "login doit contenir au moins 2 caractères" }),
    mdpA: z
      .string()
      .trim()
      .min(6, { message: "mote de pass doit contenir au moins 6 caractères" }),
    Nmdp: z.string().trim().min(6, {
      message: "nouveau mote de pass doit contenir au moins 6 caractères",
    }),
    Cmdp: z.string().trim().min(6, {
      message:
        "confirmation de mote de pass doit contenir au moins 6 caractères",
    }),
  })
  .refine((data) => data.Nmdp === data.Cmdp, {
    message: "les mots de passe ne correspondaient pas",
    path: ["Cmdp"],
  });

export type ProfileFrom = z.infer<typeof ProfileSchema>;
