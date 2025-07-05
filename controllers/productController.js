import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
} from "../services/productService.js";

export const createProduct = async (req, res) => {
  const result = await createProductService(req.body);
  res.status(result.status).json(result);
};

export const getAllProducts = async (req, res) => {
  const {name, category}= req.query;
  const result = await getAllProductsService({name, category});
  res.status(result.status).json(result);
};

export const getProductById = async (req, res) => {
  const result = await getProductByIdService(req.params.id);
  res.status(result.status).json(result);
};

export const updateProduct = async (req, res) => {
  const result = await updateProductService(req.params.id, req.body);
  res.status(result.status).json(result);
};

export const deleteProduct = async (req, res) => {
  const result = await deleteProductService(req.params.id);
  res.status(result.status).json(result);
};
