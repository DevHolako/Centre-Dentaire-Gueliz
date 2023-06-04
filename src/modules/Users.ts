import { z } from "zod";

export const UserSchema = z.object({
  nomComplete: z
    .string()
    .trim()
    .min(4, { message: "nom et prenom doit contenir au moins 4 caractères" }),
  login: z
    .string()
    .trim()
    .min(4, { message: "login doit contenir au moins 4 caractères" }),
  mdp: z
    .string()
    .trim()
    .min(8, { message: "mote de pass doit contenir au moins 8 caractères" }),
  isAdmin: z
    .string()
    .default("0")
    .transform((val) => (val === "1" ? 1 : 0)),
});

export type UserForm = z.infer<typeof UserSchema>;
