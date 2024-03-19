const { get_customerdetail } = require('../Routers/CustomerRouter');


const customerRouter = require("express").Router()

customerRouter.get('/:customeremail',get_customerdetail);

module.exports = customerRouter;