const Customer = require('../Models/SoldproductModel')


async function get_customerdetail(req,res,next){
    try {
        const customer = await Customer.findOne({ 'customer.email': req.params.customeremail });
        if (!customer) {
          return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}

module.exports={
    get_customerdetail,
}