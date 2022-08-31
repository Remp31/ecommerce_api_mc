import mongoose from "mongoose";

const administratorSchema = new mongoose.Schema({
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
    phoneAdministrator: {
        type: Number,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        default: '630ebd07c08324fb70ac9e24',
    }
})

export default mongoose.model('Administrator', administratorSchema);