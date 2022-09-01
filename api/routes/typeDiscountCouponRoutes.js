import express from "express";
import * as typeDiscountCoupon from '../controllers/typeDiscountCouponController.js';

const router = express.Router();

router
    .route('/typeDiscountCoupon')
    .post(typeDiscountCoupon.createTypeDiscountCoupon)
    .get(typeDiscountCoupon.getAllTypeDiscountCoupon);



export default router;