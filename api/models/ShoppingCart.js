import mongoose from "mongoose";

const shoppingCartSchema = new mongoose.Schema({
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
});

export default mongoose.model('ShoppingCart', shoppingCartSchema)