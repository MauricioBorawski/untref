import type { Request, Response, NextFunction } from "express";
import { getUserByApiKey } from "../../../Model/Auth/user.model";

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const apiKey = authHeader && authHeader;

  if (!apiKey) {
    return res.status(403).json({ error: "Header invalido" });
  }

  try {
    const userId = (await getUserByApiKey(apiKey)) as { id: number };
    req["userId"] = userId.id.toString();

    next();
  } catch {
    return res.status(401).json({ error: "API Key invalida" });
  }
};
