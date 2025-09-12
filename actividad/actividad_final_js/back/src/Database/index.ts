import { Database } from "bun:sqlite";

const db = new Database("./untref-be.db", { create: true });

export default db;