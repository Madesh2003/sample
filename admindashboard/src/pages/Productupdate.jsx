import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductUpdatation() {
  const { productId } = useParams(); // Access the productId from the route params
  const [updatedProduct, setUpdatedProduct] = useState({
    // State to store updated product details
    productName: '',
    brandName: '',
    productDescription: '',
    productPrice: 0,
    availability: false,
    stocks: 0,
    category: '',
    subcategory: '',
    isOfferPurchased: false,
    offeredPrice: '',
    offerName: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  // Function to handle form submission (product update)
  const handleUpdate = (e) => {
    e.preventDefault();
    // Add your logic to update the product in the database
    // You can use the productId to identify the product to be updated
    console.log('Updated Product:', updatedProduct);
    // Redirect to the main product page after update
    // You can customize the redirection based on your routing setup
    // For example, you can use history.push('/products') if using useHistory
  };

  return (
    <div>
      <h1>Product Updatation Form</h1>
      <form onSubmit={handleUpdate}>
        {/* Add form fields for each product attribute */}
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={updatedProduct.productName}
            onChange={handleInputChange}
          />
        </label>
        {/* Repeat similar label and input elements for other attributes */}
        {/* ... */}
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}
