const mongoose = require 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        unique: true,
        requried: true,
    },
    password: {
        type: String,
        requried: true,
    },
    isAdmin: {
        type: Boolean,
        requried: true,
        default: false,
    },
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

module.exports = User
