// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
// import { Header } from '../components';

// const Orders = () => {
//   const editing = { allowDeleting: true, allowEditing: true };
//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Orders" />
//       <GridComponent
//         id="gridcomp"
//         dataSource={ordersData}
//         allowPaging
//         allowSorting
//         allowExcelExport
//         allowPdfExport
//         contextMenuItems={contextMenuItems}
//         editSettings={editing}
//       >
//         <ColumnsDirective>
//           {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
//       </GridComponent>
//     </div>
//   );
// };
// export default Orders;

// import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';

// const ProductChart = () => {
//   // Sample product data
//   const [productData, setProductData] = useState([
//     {
//       month: 'January',
//       sales: 100,
//       revenue: 5000,
//     },
//     {
//       month: 'February',
//       sales: 150,
//       revenue: 7500,
//     },
//     {
//       month: 'March',
//       sales: 100,
//       revenue: 7000,
//     },
//     {
//       month: 'April',
//       sales: 360,
//       revenue: 15500,
//     },
//     {
//       month: 'May',
//       sales: 250,
//       revenue: 13843,
//     },
//     {
//       month: 'June',
//       sales: 233,
//       revenue: 23564,
//     },
//     {
//       month: 'July',
//       sales: 456,
//       revenue: 56430,
//     },
//     {
//       month: 'Augest',
//       sales: 370,
//       revenue: 17500,
//     },
//     {
//       month: 'Septemper',
//       sales: 130,
//       revenue: 3685,
//     },
//     {
//       month: 'Octomber',
//       sales: 136,
//       revenue: 79500,
//     },
//     // Add more data for each month and product as needed
//   ]);

//   // Function to find the month with the highest revenue
//   const findTopRevenueMonth = () => {
//     const topMonth = productData.reduce((prev, current) =>
//       prev.revenue > current.revenue ? prev : current
//     , {});
//     return topMonth;
//   };

//   // Function to find the total sales and revenue for a specific month
//   const findMonthStats = (month) => {
//     const monthData = productData.find((data) => data.month === month);
//     return monthData;
//   };

//   // Chart data and options
//   const chartData = {
//     options: {
//       chart: {
//         id: 'sales-chart',
//       },
//       xaxis: {
//         categories: productData.map((data) => data.month),
//       },
//     },
//     series: [
//       {
//         name: 'Sales',
//         data: productData.map((data) => data.sales),
//       },
//     ],
//   };

//   useEffect(() => {
//     // You can fetch product data from an API or any other source here
//     // For simplicity, we're using static data in this example
//     // Update the productData state accordingly
//   }, []);

//   const topRevenueMonth = findTopRevenueMonth();
//   const topRevenueMonthStats = findMonthStats(topRevenueMonth.month);

//   return (
//     <div>
//       <h2>Product Sales Area Chart</h2>
//       <Chart options={chartData.options} series={chartData.series} type="area" />
//       <div>
//         <h3>Month with Highest Revenue:</h3>
//         <p>Month: {topRevenueMonthStats.month}</p>
//         <p>Sales: {topRevenueMonthStats.sales}</p>
//         <p>Total Revenue: {topRevenueMonthStats.revenue}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SoldProductsRevenue = () => {
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
          "offeredPrice": 60,
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

  return (
    <div>
      <h2>Total Revenue from Sold Products: ${calculateTotalRevenue()}</h2>
      <button onClick={downloadCSV}>Download CSV</button>
    </div>
  );
};

export default SoldProductsRevenue;
