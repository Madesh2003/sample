const mongoose = require("mongoose");

const SoldproductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    year:{
      type: Number,
      required: true
    },
    purchaseLocation:{
         type: String,
         required: true
    },
    orderMonth:{
       type: String,
       required: true
    },
    isOfferPurchased:{
        type: Boolean,
        required: false
    },
    offerName: {
        type: String,
        required: false,
    },
    offeredPrice: {
        type: Number,
        required: false,
    }
})

module.exports = mongoose.model("soldproducts", SoldproductSchema)