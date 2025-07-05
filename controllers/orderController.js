import { createOrderService } from "../services/orderService.js";

export const createOrder = async (req, res)=>{
    const userId = req.user.userId;

    const result = await createOrderService(userId);
    return res.status(result.status).json(result);
};