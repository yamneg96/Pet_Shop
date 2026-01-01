import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import paymentRoutes from "./routes/payment.js"

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes);

app.get("/", (_, res) => {
  res.send("AddisPet API running");
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
