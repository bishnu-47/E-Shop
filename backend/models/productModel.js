const mongoose = require 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, requried: true },
    rating: { type: String, requried: true },
    comment: { type: String, requried: true },
}, {
    timestapms: true
})

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: 'User'
    },
    name: {
        type: String,
        requried: true,
    },
    image: {
        type: String,
        unique: true,
    },
    brand: {
        type: String,
        requried: true,
    },
    category: {
        type: String,
        requried: true,
    },
    description: {
        type: String,
        requried: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        requried: true,
        default: 0
    },
    numReviews: {
        type: Number,
        requried: true,
        default: 0
    },
    price: {
        type: Number,
        requried: true,
        default: 0
    },
    countInStock: {
        type: Number,
        requried: true,
        default: 0
    },
}, {
    timestamps: true,
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product

