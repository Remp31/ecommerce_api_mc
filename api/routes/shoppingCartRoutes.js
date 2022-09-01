import express from "express";
import * as shoppingCart from '../controllers/shoppingCartController.js';

const router = express.Router();

router
    .route('/shoppingCart')
    .post(shoppingCart.createShoppingCart)
    .get(shoppingCart.getAllShoppingCart);

router
    .route('/shoppingCart/:id')
    .put(shoppingCart.updateShoppingCart);

export default router;