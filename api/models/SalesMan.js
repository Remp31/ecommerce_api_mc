import mongoose from "mongoose";

const salesManSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        //TODO: 8 caracteres min, 1 mayus, 1 minus, 1 signo
        type: String,
        required: true,
    },
    phoneSalesMan: {
        type: Number,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        default: '630ebd37c08324fb70ac9e28',
    }
})

export default mongoose.model('SalesMan', salesManSchema);