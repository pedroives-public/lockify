import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDb.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.API_URL, credentials: true }));
app.use(express.json()); // Allow to parse JSON from incoming requests
app.use(cookieParser()); // Allow to parse cookies from incoming requests
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running! -> PORT: ${PORT}`);
});
