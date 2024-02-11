const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    productName:{
           type: String,
           required: true
    },
    images:{
        type: Array,
        required: true
    },
    brandName:{
        type: String,
        required: true
 },
 productDescription:{
    type: String,
    required: true
},
productPrice:{
    type: Number,
    required: true
},
stocks:{
    type: Number,
    required: true
},
category:{
    type: String,
    required: true
},
subcategory:{
    type: String,
    required: true
},
offerName:{
    type: String,
    required: false,
},
offeredPrice:{
    type: Number,
    required: false,
}
})

module.exports = mongoose.model("products",ProductSchema)