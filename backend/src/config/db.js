import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};
