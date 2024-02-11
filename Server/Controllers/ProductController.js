const AuthorizationShield = require("../Middleware/AuthorizationShield");
const TokenShield = require("../Middleware/TokenSheild");
const { get_products, create_product, editproduct, deleteproduct, getselectedproduct } = require("../Routers/Products.router");

const productsRouter = require("express").Router();

productsRouter.get("/", get_products);
productsRouter.post("/create", create_product);

module.exports = productsRouter;
