import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids'

const Topsellingproducts = () => {
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

  useEffect(() => {
    // Assuming you have an endpoint to fetch product data from your backend
    fetch('/api/productData')
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once

  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: false, allowEditing: false };

  const aggregateSalesByProduct = () => {
    const aggregatedData = {};

    productData.forEach((data) => {
      const { productName, brandName, category, productPrice, isOfferPurchased, offeredPrice, offerName } = data;
      const key = `${productName}-${brandName}-${category}-${productPrice}`;
      
      if (aggregatedData[key]) {
        aggregatedData[key].sales += 1;
        if (isOfferPurchased) {
          aggregatedData[key].offeredSales += 1;
        }
      } else {
        aggregatedData[key] = {
          productName,
          brandName,
          category,
          productPrice,
          sales: 1,
          offeredSales: isOfferPurchased ? 1 : 0,
          offeredPrice: isOfferPurchased ? offeredPrice : null,
          offerName: isOfferPurchased ? offerName : null,
        };
      }
    });

    return Object.values(aggregatedData).filter((product) => product.sales > 0);
  };

  const topSellingProducts = orderBy(aggregateSalesByProduct(), ['sales'], ['desc']).slice(0, 5);

  return (
    <div>
      
      <GridComponent 
      dataSource={topSellingProducts}
      width="auto"
      height="auto"
      allowPaging={false}
      allowSorting
      editSettings={editing}
         toolbar={toolbarOptions}>
          <ColumnsDirective>
          <ColumnDirective field="productName" headerText="Product Name" />
          <ColumnDirective field="brandName" headerText="Brand Name" />
          <ColumnDirective field="category" headerText="Category" />
          <ColumnDirective field="productPrice" headerText="Price"/>
          <ColumnDirective field="sales" headerText="Sales" />
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
         </GridComponent>
      </div>
  );
};

export default Topsellingproducts;