import express from "express";
import { createProduct, getAllProducts, getAllProductsById, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getAllProductsById);
router.put('/:id', updateProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

export default router;