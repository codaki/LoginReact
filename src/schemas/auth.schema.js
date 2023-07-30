import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El usuario es requerido",
  }),
  email: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "Correo inválido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "El usuario es requerido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(5, {
      message: "La contraseña debe tener al menos 5 caracteres",
    }),
});
