import { Product } from "../models/product.js";

export const createProductService = async (data) => {
  const { name, description, price, countInStock } = data;

  if (!name || !description || !price || !countInStock) {
    return { success: false, status: 400, message: "Missing required fields" };
  }

  const product = await Product.create(data);
  return { success: true, status: 201, product };
};

export const getAllProductsService = async ({name, category}) => {
  const filter= {};

  if(name){
    filter.name = {$regex: name, $options: "i"};
  }
  if(category){
    filter.category = category;
  }

  const products = await Product.find(filter);
  return { success: true, status: 200, products };
};

export const getProductByIdService = async (id) => {
  const product = await Product.findById(id);
  if (!product) return { success: false, status: 404, message: "Product not found" };
  return { success: true, status: 200, product };
};

export const updateProductService = async (id, data) => {
  const product = await Product.findById(id);
  if (!product) return { success: false, status: 404, message: "Product not found" };

  Object.assign(product, data);
  const updated = await product.save();
  return { success: true, status: 200, product: updated };
};

export const deleteProductService = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) return { success: false, status: 404, message: "Product not found" };
  return { success: true, status: 200, message: "Product deleted" };
};
