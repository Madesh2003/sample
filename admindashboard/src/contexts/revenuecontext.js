import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create a context
const SoldProductsContext = createContext();

const SoldProductsProvider = ({ children }) => {
  const [soldProducts, setSoldProducts] = useState(
    [
        {
          "year": 2023,
          "productName": "Gaming Desktop",
          "brandName": "XYZ Gaming",
          "productDescription": "High-performance gaming desktop with dedicated graphics.",
          "productPrice": 1500,
          "category": "Computers",
          "subcategory": "Desktops",
          "customer": "Alex Williams",
          "purchaseLocation": "Online Store",
          "orderMonth": "January",
          "isOfferPurchased": true,
          "offeredPrice": 4400,
          "offerName": "New Year Special"
        },
        {
          "year": 2023,
          "productName": "Laptop SSD Upgrade Kit",
          "brandName": "TechUp",
          "productDescription": "SSD upgrade kit for laptops, includes SSD and installation tools.",
          "productPrice": 120,
          "category": "Accessories",
          "subcategory": "Storage",
          "customer": "Emily Davis",
          "purchaseLocation": "Retail Store",
          "orderMonth": "February",
          "isOfferPurchased": false
        },
        {
          "year": 2023,
          "productName": "Wireless Gaming Mouse",
          "brandName": "GamerTech",
          "productDescription": "Ergonomic wireless gaming mouse with customizable RGB lighting.",
          "productPrice": 70,
          "category": "Peripherals",
          "subcategory": "Mice",
          "customer": "Michael Johnson",
          "purchaseLocation": "Online Store",
          "orderMonth": "March",
          "isOfferPurchased": true,
          "offeredPrice": 6000,
          "offerName": "Spring Sale"
        },
        {
          "year": 2024,
          "productName": "27-inch 4K Monitor",
          "brandName": "ProView",
          "productDescription": "High-resolution 4K monitor with wide color gamut for professional use.",
          "productPrice": 500,
          "category": "Displays",
          "subcategory": "Monitors",
          "customer": "Sophia Brown",
          "purchaseLocation": "Retail Store",
          "orderMonth": "April",
          "isOfferPurchased": false
        },
        {
          "year": 2022,
          "productName": "Mechanical Gaming Keyboard",
          "brandName": "KeyMaster",
          "productDescription": "Mechanical gaming keyboard with customizable RGB backlighting.",
          "productPrice": 80,
          "category": "Peripherals",
          "subcategory": "Keyboards",
          "customer": "David Smith",
          "purchaseLocation": "Online Store",
          "orderMonth": "May",
          "isOfferPurchased": false
        },
        {
          "year": 2022,
          "productName": "External Hard Drive",
          "brandName": "DataVault",
          "productDescription": "1TB external hard drive for additional storage.",
          "productPrice": 60,
          "category": "Accessories",
          "subcategory": "Storage",
          "customer": "Emma Taylor",
          "purchaseLocation": "Retail Store",
          "orderMonth": "June",
          "isOfferPurchased": true,
          "offeredPrice": 50,
          "offerName": "Mid-Year Clearance"
        },
        {
          "year": 2024,
          "productName": "Gaming Headset",
          "brandName": "AudioMaster",
          "productDescription": "Immersive gaming headset with surround sound.",
          "productPrice": 90,
          "category": "Audio",
          "subcategory": "Headsets",
          "customer": "Oliver Robinson",
          "purchaseLocation": "Online Store",
          "orderMonth": "July",
          "isOfferPurchased": false
        },
        {
          "year": 2022,
          "productName": "Graphics Card",
          "brandName": "GraphiX",
          "productDescription": "Powerful graphics card for gaming and video editing.",
          "productPrice": 400,
          "category": "Components",
          "subcategory": "Graphics Cards",
          "customer": "Sophie Wilson",
          "purchaseLocation": "Retail Store",
          "orderMonth": "August",
          "isOfferPurchased": true,
          "offeredPrice": 350,
          "offerName": "Back to School"
        },
        {
          "year": 2021,
          "productName": "Wireless Router",
          "brandName": "ConnectTech",
          "productDescription": "High-speed wireless router for seamless internet connectivity.",
          "productPrice": 80,
          "category": "Networking",
          "subcategory": "Routers",
          "customer": "James Miller",
          "purchaseLocation": "Online Store",
          "orderMonth": "September",
          "isOfferPurchased": false
        },
        {
          "year": 2021,
          "productName": "Mechanical Gaming Mousepad",
          "brandName": "GamerTech",
          "productDescription": "Large-sized mousepad optimized for gaming precision.",
          "productPrice": 30,
          "category": "Peripherals",
          "subcategory": "Mousepads",
          "customer": "Ava Clark",
          "purchaseLocation": "Retail Store",
          "orderMonth": "October",
          "isOfferPurchased": false
        }
      ]
  );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//         const response = await axios.get('YOUR_API_ENDPOINT/soldProducts');
//         setSoldProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

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

  // Provide the context values
  const contextValue = {
    soldProducts,
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
