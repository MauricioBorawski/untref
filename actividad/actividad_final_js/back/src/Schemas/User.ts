import z from "zod";

export const userRegisterSchema = z.object({
  username: z
    .string()
    .min(3, { error: "username: demasiado corto min: 3" })
    .max(12, { error: "username: demasiado largo max: 12" })
    .transform((val) => val.trim()),
  password: z
    .string()
    .min(6, {
      error: "password: demasiado corto min: 6",
    })
    .max(32, {
      error: "password: demasiado largo max: 32",
    })
    .transform((val) => val.trim()),
});

export const userLoginSchema = z.object({
  username: z.string().transform((val) => val.trim()),
  password: z.string().transform((val) => val.trim()),
});
