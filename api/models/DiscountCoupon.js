import mongoose from "mongoose";

const discountCouponSchema = new mongoose.Schema({
    typeDiscountCoupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TypeDiscountCoupon',
        required: true,
    },
    discountRate: {
        type: Number,
    },
    discountAmount: {
        type: Number,
    },
    discountReason: {
        type: String,
        required: true,
    }
});

export default mongoose.model('DiscountCoupon', discountCouponSchema)