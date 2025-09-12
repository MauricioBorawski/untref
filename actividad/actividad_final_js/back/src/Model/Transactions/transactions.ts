import db from "../../Database";
import z from "zod";
import { RegisterTransactionSchema } from "../../Schemas/Transaction";

type ProductTransaction = z.infer<typeof RegisterTransactionSchema>;

export const registerTransaction = async (
  userId: number,
  date: string
): Promise<number> => {
  const query = "INSERT INTO transactions (userId, date) VALUES (?, ?)";

  try {
    const stmt = db.prepare(query);
    const result = stmt.run(userId, date);

    return result.lastInsertRowid as number;
  } catch {
    throw new Error("Error al registrar la transacción");
  }
};

export const registerTransactionProduct = async (
  products: ProductTransaction,
  transactionId: number
): Promise<void> => {
  const query = `INSERT INTO transaction_products (transactionId, productId, quantity) VALUES (?, ?, ?)`;

  try {
    const stmt = db.prepare(query);

    products.products.forEach((product) => {
      stmt.run(transactionId, product.productId, product.quantity);
    });
  } catch {
    throw new Error("Error al registrar los productos de la transacción");
  }
};

type Transaction = {
  id: number;
};

export const getAllTransactions = async (
  userId: number
): Promise<Transaction[]> => {
  const query = `SELECT * FROM transactions WHERE userId = ?`;

  try {
    const stmt = db.prepare(query);
    const result = stmt.all(userId);

    return result.map((row) => ({ id: (row as Transaction)["id"] }));
  } catch {
    throw new Error("Error al obtener las transacciones");
  }
};

type transactionDetail = {
  transactionId: number;
  productId: number;
  quantity: number;
};

export const getTransactionDetails = async (
  transactionId: number
): Promise<transactionDetail[]> => {
  const query = `SELECT * FROM transaction_products WHERE transactionId = ?`;

  try {
    const stmt = db.prepare(query);
    const result = stmt.all(transactionId) as transactionDetail[];

    return result.map((row) => ({
      transactionId: row.transactionId,
      productId: row.productId,
      quantity: row.quantity,
    }));
  } catch {
    throw new Error("Error al obtener los detalles de la transacción");
  }
};
