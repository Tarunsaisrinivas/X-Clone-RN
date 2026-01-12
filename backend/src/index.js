import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(ENV.PORT, () => {
  connectDB();
  console.log("Server is running on port ", ENV.PORT);
});
