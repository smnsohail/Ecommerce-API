import mongoose from "mongoose";
const CartItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        min:1,
        default:1
    }
});
const CartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    items:[CartItemSchema],
    updatedAt:{
        type: Date,
        default: Date.now
    }
});

export const Cart = mongoose.model("Cart", CartSchema);