const { getselectedproduct, editproduct, deleteproduct } = require('../Routers/ProductUpdate.router');

const ProductUpdateRouter = require("express").Router()

ProductUpdateRouter.get("/products/:productName", getselectedproduct)
ProductUpdateRouter.put("/products/:productName", editproduct);
ProductUpdateRouter.delete("/products/:productName", deleteproduct)

module.exports = ProductUpdateRouter;
