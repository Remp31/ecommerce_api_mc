import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    }, 
    categoryDescription: {
        type: String,
        required: true
    }
});

export default mongoose.model('Category', categorySchema)