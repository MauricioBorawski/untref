import { Router } from "express";
import { getProductos, getProdctById } from "../Controller/Productos/productos";
import { authMiddleware } from "../Controller/Auth/Middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getProductos);
router.get("/:id", authMiddleware, getProdctById);

export default router;
