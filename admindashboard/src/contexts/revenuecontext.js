import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const SoldProductsContext = createContext();

const SoldProductsProvider = ({ children }) => {
  const [soldProduct, setSoldProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/soldproducts/");
      
      const deliveredProducts = response.data.filter(product =>
        product.orders.some(order => order.status === 'Delivered')
      );
  
      setSoldProduct(deliveredProducts);
      console.log(deliveredProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  

  const calculateTotalRevenue = () => {
    return soldProduct.reduce((total, product) => {
      if (product.orders && product.orders.length > 0) {
        product.orders.forEach(order => {
          order.items.forEach(item => {
            const productName = item.productName;
            const price = item.isOfferPurchased === 'true' ? parseFloat(item.offeredPrice) : parseFloat(item.productPrice);
            const orderDate = order.order_date;
            const year = orderDate ? new Date(orderDate).getFullYear() : 'N/A';
  
            console.log("Product Name: ", productName);
            console.log("Price: ", price);
            console.log("Year: ", year); 
  
            total += price; 
          });
        });
      } else {
        console.log("No orders found for the product");
      }
  
      return total;
    }, 0);
  };
  
  
  
  
  const downloadCSV = () => {
    const csvData = soldProduct.map(product => {
      const order = product.orders.find(order => order.status === 'Delivered'); 
      const item = order.items[0]; 
      const productName = item.productName;
      const price = item.isOfferPurchased === 'true' ? parseFloat(item.offeredPrice) : parseFloat(item.productPrice);
      const orderDate = order.order_date;
      const year = orderDate ? new Date(orderDate).getFullYear() : 'N/A';
  
      return `${productName},${price},${year}`;
    });
  
    const csvContent = `Product Name,Price,Year\n${csvData.join('\n')}`;
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  
    saveAs(blob, 'sold_products_data.csv');
  };
  


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

const useSoldProducts = () => {
  return useContext(SoldProductsContext);
};

export { SoldProductsProvider, useSoldProducts };