import { addToCartService, getCartService, updateCartItemService, removeCartItemService } from "../services/cartService.js";

export const addToCart= async(req, res)=>{
    const userId = req.user.userId;
    const {productId, quantity}= req.body;

    const result = await addToCartService(userId, productId, quantity);
    res.status(result.status).json(result);
};


export const getCart= async(req, res)=>{
    const userId = req.user.userId;

    const result = await getCartService(userId);
    res.status(result.status).json(result);
};


export const updateCartItem= async(req, res)=>{
    const userId = req.user.userId;
    const {productId, quantity}= req.body;

    const result = await updateCartItemService(userId, productId, quantity);
    res.status(result.status).json(result);
};


export const removeCartItem= async(req, res)=>{
    const userId = req.user.userId;
    const {productId}= req.body;

    const result = await removeCartItemService(userId, productId);
    res.status(result.status).json(result);
};

