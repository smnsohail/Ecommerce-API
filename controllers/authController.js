import { loginService, registerService } from "../services/authService.js";

export const registerUser = async (req, res) => {
  const result = await registerService(req.body);
  res.status(result.status).json({ message: result.message });
};

export const loginUser = async (req, res) => {
  const result = await loginService(req.body);
  if (!result.success) return res.status(result.status).json({ message: result.message });

  res
    .cookie("token", result.token)
    .status(200)
    .json({ message: "Login successful", user: result.user });
};

export const logoutUser = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logged out" });
};
