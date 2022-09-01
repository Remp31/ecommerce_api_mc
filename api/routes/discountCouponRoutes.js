import express from "express";
import * as discountCouponController from '../controllers/discountCouponController.js';

const router = express.Router();

router
    .route('/discountCouponController')
    .post(discountCouponController.createDiscountCoupon)
    .get(discountCouponController.getAllDiscountCoupon);



export default router;