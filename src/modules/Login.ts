import { z } from "zod";

export const LoginSchema = z.object({
  username: z
    .string({ required_error: "username requierd" })
    .trim()
    .min(2, { message: "nom doit contenir au moins 2 caractères" }),
  password: z
    .string({ required_error: "password requierd" })
    .trim()
    .min(2, { message: "acte doit contenir au moins 2 caractères" }),
});

export type LoginFrom = z.infer<typeof LoginSchema>;
