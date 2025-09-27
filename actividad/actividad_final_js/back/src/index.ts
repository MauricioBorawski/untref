
import express from "express";
import cors from "cors";
import path from "path";
import usersRouter from "./Routes/Auth.route";
import productosRouter from "./Routes/Productos.route";
import transactionsRouter from "./Routes/Transactions.route";

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/auth", usersRouter);
app.use("/api/productos", productosRouter);
app.use("/api/transactions", transactionsRouter);

// Fallback route for root to serve index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
