const mongoose = require 'mongoose'

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: 'User'
    },
    orderItems: [{
        name: { type: String, requried: true },
        qty: { type: Number, requried: true },
        image: { type: String, requried: true },
        price: { type: Number, requried: true },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            requried: true,
            ref: 'Product'
        }
    }],
    shippingAddress: {
        address: { type: String, requried: true },
        city: { type: String, requried: true },
        postalCode: { type: String, requried: true },
        country: { type: String, requried: true },
    },
    paymentMethod: {
        type: String,
        requried: true,
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: Number,
        requried: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        requried: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        requried: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        requried: true,
        default: false,
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        requried: true,
        default: false,
    },
    deliveredAt: {
        type: Date
    },
}, {
    timestamps: true,
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order

