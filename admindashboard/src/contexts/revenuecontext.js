import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context
const SoldProductsContext = createContext();

const SoldProductsProvider = ({ children }) => {
  const [soldProduct, setSoldProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axios.get("http://localhost:8000/soldproducts/");
        setSoldProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalRevenue = () => {
    return soldProduct.reduce((total, product) => {
      const price = product.isOfferPurchased ? product.offeredPrice : product.productPrice;
      return total + price;
    }, 0);
  };
  
  const downloadCSV = () => {
    const csvData = soldProduct.map(product => {
      const price = product.isOfferPurchased ? product.offeredPrice : product.productPrice;
      return `${product.productName},${price},${product.year}`;
    });

    const csvContent = `Product Name,Price,Year\n${csvData.join('\n')}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sold_products_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Provide the context values
  const contextValue = {
    soldProduct,
    calculateTotalRevenue,
    downloadCSV,
  };

  return (
    <SoldProductsContext.Provider value={contextValue}>
      {children}
    </SoldProductsContext.Provider>
  );
};

// Custom hook to use the context values
const useSoldProducts = () => {
  return useContext(SoldProductsContext);
};

export { SoldProductsProvider, useSoldProducts };
