import type { Request, Response } from "express";
import {
  getProductosFromDb,
  getProductoById,
} from "../../Model/Productos/productos";
import { parseReqParams } from "../../utils";

export const getProductos = async (_req: Request, res: Response) => {
  try {
    const productos = await getProductosFromDb();

    return res.status(200).json({ data: productos });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Error getProductos",
    });
  }
};

export const getProdctById = async (req: Request, res: Response) => {
  const productId = parseReqParams(req.params.id);

  if (!productId) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  try {
    const producto = await getProductoById(productId);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res.status(200).json({ data: producto });
  } catch {
    return res.status(500).json({ error: "Error al obtener el producto" });
  }
};
