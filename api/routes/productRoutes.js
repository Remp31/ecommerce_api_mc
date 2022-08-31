import express from "express";
import * as productController from '../controllers/productController.js';

const router = express.Router();

router
    .route('/product')
    .post(productController.createProduct)
    .get(productController.getAllProduct);



export default router;