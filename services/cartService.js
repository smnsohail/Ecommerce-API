import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";

//add to cart
export const addToCartService = async (userId, productId, quantity) => {
  if (!productId || !quantity || quantity < 1) {
    return {
      success: false,
      status: 400,
      message: "Invalid product or quantity",
    };
  }

  //finding the product
  const product = await Product.findById(productId);
  if (!product)
    return { success: false, status: 404, message: "Product not found" };

  let cart = await Cart.findOne({ user: userId });

  // create new cart if no cart
  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity }],
    });
  } else {
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
    if (itemIndex > -1) {
      // product already in cart -> update quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
  }

  return { success: true, status: 200, message: "Product added to cart", cart };
};

//get cart
export const getCartService = async (userId) => {
  const cart = await Cart.findOne({ userId }).populate("items.product");
  if (!cart) return { success: true, status: 200, cart: { items: [] } };
  return { success: true, status: 200, cart };
};

//update cart 
export const updateCartItemService = async (userId, productId, quantity) => {
  if (!quantity || quantity < 1) {
    return { success: false, status: 400, message: "Quantity must be at least 1" };
  }

  const cart = await Cart.findOne({ user: userId });
  if (!cart) return { success: false, status: 404, message: "Cart not found" };

  const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
  if (itemIndex === -1) return { success: false, status: 404, message: "Item not in cart" };

  cart.items[itemIndex].quantity = quantity;
  await cart.save();

  return { success: true, status: 200, message: "Cart item updated", cart };
};

//delete items from cart
export const removeCartItemService = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) return { success: false, status: 404, message: "Cart not found" };

  const newItems = cart.items.filter(item => item.product.toString() !== productId);
  cart.items = newItems;
  await cart.save();

  return { success: true, status: 200, message: "Item removed", cart };
};