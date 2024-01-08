import express from "express";
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/productController.js";

const router = express.Router();


router.get("/", getAllProducts);
router.get("/:ProductId", getProductById);
router.delete('/:ProductId', deleteProduct);
router.post("/",addProduct);
router.patch("/:ProductId",updateProduct);


export default router;