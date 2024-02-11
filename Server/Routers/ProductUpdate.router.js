const productmodel = require("../Models/ProductModel");

async function getselectedproduct(req, res) {
    const productName = req.params.productName;
    try {
        const product = await productmodel.findOne({ productName: req.params.productName});
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found', product: req.params.productName });
        }
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ success: false, error: 'Error finding product' });
    }
}

async function editproduct(req, res, next) {
  try {
      const productName = req.params.productName;
      const updatedProduct = req.body;
      const result = await productmodel.findOneAndUpdate({ productName: req.params.productName }, updatedProduct, { new: true });
      
      if (result) {
          res.status(200).json({ success: true, data: result });
      } else {
          res.status(404).json({ success: false, error: 'Product not found' });
      }
  } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ success: false, error: 'Error updating product' });
  }
}


async function deleteproduct(req, res, next) {
  try {
      const productName = req.params.productName;
      const deletedProduct = await productmodel.findOneAndDelete({ productName: req.params.productName });
      console.log(req.params.productName)
      if (deletedProduct) {
          res.status(200).json({ success: true, message: 'Product deleted successfully' });
      } else {
          res.status(404).json({ success: false, error: 'Product not found' });
      }
  } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ success: false, error: 'Error deleting product' });
  }
}


module.exports = {
    getselectedproduct,
    editproduct,
    deleteproduct
};
