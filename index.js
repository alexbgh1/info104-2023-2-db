import express from "express";
import dotenv from "dotenv";
import comentariosRouter from "./routes/comentarios.route.js";
import "./server/db/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/comentarios", comentariosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
