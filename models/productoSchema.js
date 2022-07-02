import mongoose from "mongoose";

export const productoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
})