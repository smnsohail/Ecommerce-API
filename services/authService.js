import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerService = async ({ name, email, password, isAdmin }) => {
  if (!name || !email || !password) {
    return { success: false, status: 400, message: "Name, email, and password are required" };
  }

  const userExists = await User.findOne({ email });
  if (userExists) return { success: false, status: 409, message: "User already exists" };

  const hashed = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashed, isAdmin: isAdmin || false });

  return { success: true, status: 201, message: "User registered successfully" };
};

export const loginService = async ({ email, password }) => {
  if (!email || !password) {
    return { success: false, status: 400, message: "Email and password are required" };
  }

  const user = await User.findOne({ email });
  if (!user) return { success: false, status: 401, message: "Invalid credentials" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { success: false, status: 401, message: "Invalid credentials" };

  const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return { success: true, status: 200, token, user: { name: user.name, email: user.email, isAdmin: user.isAdmin } };
};
