import React, { useState, useEffect } from 'react';
import { orderBy } from 'lodash';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids'
import { useSoldProducts } from '../contexts/revenuecontext';


const Topsellingproducts = () => {  

  const { soldProduct } = useSoldProducts();


  const editing = { allowDeleting: false, allowEditing: false };

  const aggregateSalesByProduct = () => {
    const aggregatedData = {};

    soldProduct.forEach((data) => {
      const { productName, brandName, isOfferPurchased, offeredPrice, offerName } = data;
      const key = `${productName}-${brandName}`;
      
      if (aggregatedData[key]) {
        aggregatedData[key].sales += 1;
        if (isOfferPurchased) {
          aggregatedData[key].offeredSales += 1;
        }
      } else {
        aggregatedData[key] = {
          productName,
          brandName,
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
      editSettings={editing}>
          <ColumnsDirective>
          <ColumnDirective field="productName" headerText="Product Name" />
          <ColumnDirective field="brandName" headerText="Brand Name" />
          <ColumnDirective field="sales" headerText="Sales" />
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
         </GridComponent>
      </div>
  );
};

export default Topsellingproducts;