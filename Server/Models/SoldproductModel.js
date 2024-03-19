const mongoose = require("mongoose");

const SoldProductSchema = mongoose.Schema({
    customer: {
        name: {
            type: String,
            required: true
        },
        profile: {
            type: Array,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        address: {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zipcode: {
                type: Number,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    },
    orders: [
        {
            order_id: {
                type: String,
                required: true
            },
            order_date: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            items: [
                {
                    images: {
                        type: Array,
                        required: true
                    },
                    productName: {
                        type: String,
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
                    category: {
                        type: String,
                        required: true
                    },
                    subcategory: {
                        type: String,
                        required: true
                    },
                    isOfferPurchased: {
                        type: Boolean,
                        required: false
                    },
                    offerName: {
                        type: String,
                        required: false
                    },
                    offeredPrice: {
                        type: Number,
                        required: false
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model("SoldProduct", SoldProductSchema);
