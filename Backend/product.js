const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    userId:String,
    category:String,
    price:Number,
    company:String
})
module.exports = mongoose.model("products",productSchema);