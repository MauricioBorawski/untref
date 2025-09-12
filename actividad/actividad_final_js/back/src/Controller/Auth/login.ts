import type { Request, Response } from "express";
import { userLoginSchema } from "../../Schemas/User";
import db from "../../Database";

export const loginUser = (req: Request, res: Response) => {
  const parseResult = userLoginSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ error: "Body incorrecto" });
  }

  const { username, password } = parseResult.data;

  const user = db
    .prepare(
      "SELECT apiKey FROM users WHERE username = ? AND password = ?"
    )
    .get(username, password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  res.status(200).json({ data: user });
};
