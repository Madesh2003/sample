import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SoldProductsRevenue = () => {
  const [soldProducts, setSoldProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axios.get('YOUR_API_ENDPOINT/soldProducts');
        setSoldProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalRevenue = () => {
    return soldProducts.reduce((total, product) => {
      const price = product.isOfferPurchased ? product.offeredPrice : product.productPrice;
      return total + price;
    }, 0);
  };
  
  const downloadCSV = () => {
    const csvData = soldProducts.map(product => {
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

  return (
    <div>
      <h2>Total Revenue from Sold Products: {calculateTotalRevenue()}</h2>
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
};


export default SoldProductsRevenue;