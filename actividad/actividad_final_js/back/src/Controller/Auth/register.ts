import crypto from "crypto";
import type { Request, Response } from "express";
import { userRegisterSchema } from "../../Schemas/User";
import db from "../../Database";

export const registerUser = (req: Request, res: Response) => {
  const parseResult = userRegisterSchema.safeParse(req.body);

  if (!parseResult.success) {
    const errorMessages = parseResult.error.issues.map((e) => e.message);

    return res.status(400).json({ error: errorMessages });
  }

  const { username, password } = parseResult.data;

  const existingUser = db
    .prepare("SELECT id FROM users WHERE username = ?")
    .get(username);

  if (existingUser) {
    return res.status(409).json({ error: "Usuario registrado" });
  }

  const apiKey = crypto.randomUUID();
  const userId = crypto.randomUUID();

  const stmt = db.prepare(
    "INSERT INTO users (username, password, apiKey, userId) VALUES (?, ?, ?, ?)"
  );

  stmt.run(username, password, apiKey, userId);

  res.status(201).json({
    data: {
      username,
      apiKey,
    },
  });
};
