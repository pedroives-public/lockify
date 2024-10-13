import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDb.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  connectDB();
  console.log(`Server is running! -> PORT: ${port}`);
});
