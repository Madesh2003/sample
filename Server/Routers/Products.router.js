const productmodel = require("../Models/ProductModel")


function get_products(req, res, next){
  productmodel.find()
  .then((response) => {
      if(response.length > 0){
          return res.status(200).json(response);
      } else {
          return res.status(200).json({
              success: true,
              message: "No products found",
              data: []  // Return an empty array if no products are found
          });
      }
  })
  .catch((error) =>
    res.status(500).json({
      success: false,
      error: error,
    })
  );
}


function create_product(req, res, next) {
    const product = new productmodel(req.body);
  
    // STORE THE OFFER DATA GENERATED FROM OFFER MODEL INSTANCE
    product.save()
      .then((response) => {
        if (response._id) {
          return res.status(200).json({
            success: true,
            message: "product created successfully",
          });
        } else {
          return res.status(500).json({
            success: false,
            message: "Something went wrong",
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: error,
        });
      });
  }
  
 

  module.exports = {
   get_products,
   create_product,
  };