import { Router } from "express";
import { addToCart, updateCartItem, getCart, removeCartItem } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();


router.post("/", verifyToken, addToCart);
router.get("/", verifyToken, getCart);
router.put("/", verifyToken, updateCartItem);
router.delete("/", verifyToken, removeCartItem);



export default router;