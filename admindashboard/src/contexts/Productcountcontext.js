import React, { createContext, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/product");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const calculateTotalProducts = () => {
    return products.length;
  };

  const downloadProductsData = () => {
    // Format the data into a CSV string
    const csvData = [
      'productName,brandName,productDescription,productPrice,availability,stocks,category,subcategory,offeredPrice,offerName',
      ...products.map(product => (
        `${product.productName},${product.brandName},${product.productDescription},${product.productPrice},${product.availability},${product.stocks},${product.category},${product.subcategory},${product.offeredPrice},${product.offerName}`
      )),
    ].join('\n');

    // Create a Blob with the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Use file-saver to trigger the download
    saveAs(blob, 'products_data.csv');
  };

  return (
    <ProductsContext.Provider value={{ products, calculateTotalProducts, downloadProductsData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };