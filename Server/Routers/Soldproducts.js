const soldproducts = require("../Models/SoldproductModel")


function get_soldproducts(req, res, next){
    soldproducts.find()
  .then((response) => {
      if(response.length > 0){
          return res.status(200).json(response);
      } else {
          return res.status(200).json({
              success: true,
              message: "No products found",
              data: []
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
 

  module.exports = {
   get_soldproducts,
  };