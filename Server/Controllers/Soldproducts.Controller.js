const { get_soldproducts } = require("../Routers/Soldproducts");

const soldproductsRouter = require("express").Router();

soldproductsRouter.get("/", get_soldproducts);

module.exports = soldproductsRouter;
