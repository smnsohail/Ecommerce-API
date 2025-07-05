import { Router } from "express";
import { createOrder } from "../controllers/orderController.js";
import {verifyToken} from "../middleware/authMiddleware.js";

const router = Router();

router.post('/', verifyToken, createOrder);

export default router;
