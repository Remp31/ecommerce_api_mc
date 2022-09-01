import express from "express";
import * as categoryController from '../controllers/categoryController.js';

const router = express.Router();

router
    .route('/category')
    .post(categoryController.createCategory)
    .get(categoryController.getAllCategory);

export default router;