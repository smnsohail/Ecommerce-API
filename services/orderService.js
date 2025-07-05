import { Cart } from "../models/cart.js";
import { Order } from "../models/order.js";
import { Product } from "../models/product.js";

export const createOrderService = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    return { success: false, status: 400, message: "Cart is empty" };
  }

  // Calculate total
  let totalAmount = 0;
  const orderItems = cart.items.map(item => {
    totalAmount += item.product.price * item.quantity;
    return {
      product: item.product._id,
      quantity: item.quantity
    };
  });

  // Create and save order
  const newOrder = new Order({
    user: userId,
    items: orderItems,
    totalAmount
  });

  await newOrder.save();

  // Empty the cart
  cart.items = [];
  await cart.save();

  return {
    success: true,
    status: 201,
    message: "Order placed successfully",
    order: newOrder
  };
};
