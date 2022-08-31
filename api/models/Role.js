import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
});

export default mongoose.model('Role', roleSchema)