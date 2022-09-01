import mongoose from "mongoose";

const typeDiscountCouponSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

export default mongoose.model('TypeDiscountCoupon', typeDiscountCouponSchema)