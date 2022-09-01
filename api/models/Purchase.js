import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    idUser: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    idShoppingCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShoppingCart',
        required: true,
    },
    totalCost: {
        type: Number, 
        required: true,
        default: 0,
    },
    payDate: {
        type: Date, 
        required: true,
        default: null,
    },
    products: [{
        idproduct: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        }
    }
    ],
    idDiscountCoupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DiscountCoupon'
    }
});

export default mongoose.model('Purchase', purchaseSchema)