import type { Request, Response } from "express";
import {
  registerTransaction,
  registerTransactionProduct,
  getAllTransactions as getAllTransactionsModel,
  getTransactionDetails,
} from "../../Model/Transactions/transactions";
import { RegisterTransactionSchema } from "../../Schemas/Transaction";
import { parseReqParams } from "../../utils";

export const createTransaction = async (req: Request, res: Response) => {
  const parsedBody = RegisterTransactionSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res
      .status(400)
      .json({ errors: parsedBody.error.issues.map((issue) => issue.message) });
  }

  const userId = parseReqParams(req["userId"]);
  const date = new Date().toISOString();

  if (!userId) {
    return res
      .status(500)
      .json({ error: "Crear Transaccion > Usuario no encontrado o invalido" });
  }

  try {
    const transactionId = await registerTransaction(Number(userId), date);
    await registerTransactionProduct(parsedBody.data, transactionId);
    return res
      .status(201)
      .json({ message: "Transacción creada", data: { transactionId } });
  } catch {
    return res.status(500).json({ error: "Error al registrar la transacción" });
  }
};

export const getAllTransactions = async (req: Request, res: Response) => {
  const userId = parseReqParams(req["userId"]);

  if (!userId) {
    return res
      .status(500)
      .json({ error: "Crear Transaccion > Usuario no encontrado o invalido" });
  }

  try {
    const transactions = await getAllTransactionsModel(userId);

    return res.status(200).json({ data: transactions });
  } catch {
    return res
      .status(500)
      .json({ error: "Error al obtener las transacciones" });
  }
};

export const getTransactionById = async (req: Request, res: Response) => {
  const reqId = req.params.id;
  const transactionId = parseReqParams(reqId);

  if (!transactionId) {
    return res
      .status(400)
      .json({ error: "El ID de la transacción es inválido" });
  }

  try {
    const transactionDetails = await getTransactionDetails(transactionId);

    if (transactionDetails.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron detalles para esta transacción" });
    }

    return res.status(200).json({ data: transactionDetails });
  } catch {
    return res
      .status(500)
      .json({ error: "Error al obtener los detalles de la transacción" });
  }
};
