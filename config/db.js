import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("DB connection failed:", err.message);
    process.exit(1);
  }
}
