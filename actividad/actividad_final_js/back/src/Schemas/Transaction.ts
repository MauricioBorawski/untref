import z from "zod";

export const RegisterTransactionSchema = z.object(
  {
    products: z
      .array(
        z.object({
          productId: z.number({
            error: "El ID del producto debe ser tipo numero",
          }),
          quantity: z
            .number()
            .min(1, { error: "La cantidad debe ser al menos 1" }),
        })
      )
      .min(1, { error: "Debe haber al menos un producto en la transacción" }),
  },
  { error: "El cuerpo de la solicitud no es válido" }
);
