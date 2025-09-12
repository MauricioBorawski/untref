import { Router } from "express";
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
} from "../Controller/Transactions/transactions";
import { authMiddleware } from "../Controller/Auth/Middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllTransactions);
router.get("/:id", authMiddleware, getTransactionById);
router.post("/create", authMiddleware, createTransaction);

export default router;
