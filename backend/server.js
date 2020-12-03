const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const products = require('./data/products')

dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
    res.send("Api route")
})

app.get("/api/products", (req, res) =>{
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    product = products.find(p => p._id === req.params.id)
    res.json(product)
})

PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server started in ${process.env.NODE_ENV} mode at port ${PORT}`.yellow.bold)
})
