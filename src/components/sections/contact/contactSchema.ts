import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().refine(
    (value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10;
    },
    "Telefone deve ter pelo menos 10 dígitos",
  ),
  email: z.email("E-mail inválido"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
