import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Products = () => {
  const [productData, setProductData] = useState(
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
        "offeredPrice": 1400,
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

  const aggregateSalesBySubcategory = () => {
    const aggregatedData = {};

    productData.forEach((data) => {
      const { subcategory, isOfferPurchased } = data;

      if (subcategory) {
        const key = subcategory;

        if (aggregatedData[key]) {
          aggregatedData[key] += isOfferPurchased ? 1 : 0;
        } else {
          aggregatedData[key] = isOfferPurchased ? 1 : 0;
        }
      }
    });

    return Object.entries(aggregatedData).map(([subcategory, sales]) => ({ subcategory, sales }));
  };

  const topSellingSubcategories = aggregateSalesBySubcategory();

  // ApexCharts options

  const chartData = {
    series: topSellingSubcategories.map((item) => item.sales),
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },


      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of a custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: topSellingSubcategories ? topSellingSubcategories.map((item) => item.subcategory) : [],
    },
  };

  const downloadData = () => {
    // Create a CSV data string
    const csvData = `Subcategory,Sold Products\n${topSellingSubcategories.map(item => `${item.subcategory},${item.sales}`).join('\n')}`;

    // Use file-saver to save the file
    const blob = new Blob([csvData], { type: 'text/csv' });
    saveAs(blob, 'sales_data.csv');
  };

  return (
    <div>
      {/* ApexCharts RadialBar Chart */}
      <div>
        <Chart options={chartData.options} series={chartData.series} type="radialBar" height={390} />
      </div>

      {/* Download data button */}
      <button onClick={downloadData}>Download Data</button>
    </div>
  );
};

export default Products;
