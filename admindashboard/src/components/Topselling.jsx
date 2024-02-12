import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import { GridComponent, Inject, Toolbar, ColumnsDirective, ColumnDirective, Sort, Search, Page } from '@syncfusion/ej2-react-grids'
import { Navbar, Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { useSoldProducts } from '../contexts/revenuecontext';


const imageTemplate = (props) => {
  return (<img src={props.images[0]} alt="Product" style={{ width: '100px', height: '100px' }} />);
}

const Topsellingproducts = () => {
const { soldProduct } = useSoldProducts();

  // useEffect(() => {
  //   // Assuming you have an endpoint to fetch product data from your backend
  //   fetch('/api/productData')
  //     .then((response) => response.json())
  //     .then((data) => setProductData(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []); // Empty dependency array ensures useEffect runs only once

  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: false, allowEditing: false };
  const pageSettings = { pageSize: 10 };
  const searchOptions = {
    fields: ['productName'], // Use lowercase 'n' to match the field name in your data
  }

  const aggregateSalesByProduct = () => {

    const aggregatedData = {};

    soldProduct.forEach((data) => {
        const { productName, images, brandName, category, productPrice, isOfferPurchased, offeredPrice, offerName } = data;
        const key = `${productName}-${brandName}-${category}-${productPrice}`;
        
        if (aggregatedData[key]) {
          aggregatedData[key].sales += 1;
          if (isOfferPurchased) {
            aggregatedData[key].offeredSales += 1;
          }
        } else {
          aggregatedData[key] = {
            productName,
            images,
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

  const soldProducts = orderBy(aggregateSalesByProduct(), ['sales'], ['desc']);

  return (
  
    <div>
        <style>
        {`
          .e-grid * {
            font-size: 16px !important;
          }
        `}
      </style>
      <GridComponent
        dataSource={soldProducts}
        width="auto"
        height="auto"
        allowPaging={true}
        pageSettings={pageSettings}
        editSettings={editing}
        allowSearching={true} 
        searchSettings={searchOptions}
        toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field="productName" headerText="Product Name" />
          <ColumnDirective headerText="Images" width="150" template={imageTemplate} />
          <ColumnDirective field="brandName" headerText="Brand Name" />
          <ColumnDirective field="category" headerText="Category" />
          <ColumnDirective field="productPrice" headerText="Price"/>
          <ColumnDirective field="sales" headerText="Sales" />
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar ]} />
      </GridComponent>
    </div>
  );
};

export default Topsellingproducts;