import mongoose from "mongoose";

const shoppingCartSchema = new mongoose.Schema({
    totalCost: {
        type: Number, 
        required: true,
        default: 0,
    },
    payDate: {
        type: Date, 
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
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    }
});

export default mongoose.model('ShoppingCart', shoppingCartSchema)