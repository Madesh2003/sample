import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Brand: {product.brandName}</p>
      <p>Price: {product.productPrice}</p>
      <p>Description: {product.productDescription}</p>
      {/* Add more details here */}
    </div>
  );
}

export default ProductDetail;
