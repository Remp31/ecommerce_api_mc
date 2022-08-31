import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    outdoorNumber: {
        type: Number,
        required: true
    },
    interiorNumber: {
        type: Number,
    }, 
    betweenStreets: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    references: {
        type: String,
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
    phoneUser: {
        type: Number,
        required: true,
    },
    contacts: {
        type: {
            nameContact: {
                type: String,
            },
            phoneContact: {
                type: Number,
            },
        },
        required: true,
    },
})

export default mongoose.model('User', userSchema)