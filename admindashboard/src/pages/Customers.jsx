// import React from 'react';
// import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

//import { employeesData, employeesGrid } from '../data/dummy';
// import { Header } from '../components';

// const Employees = () => {
//   const toolbarOptions = ['Search'];


//   const editing = { allowDeleting: false, allowEditing: false };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Customers" />
//       <GridComponent
//         dataSource={employeesData}
//         width="auto"
//         allowPaging
//         allowSorting
//         pageSettings={{ pageCount: 5 }}
//         editSettings={editing}
//         toolbar={toolbarOptions}
//       >
//         <ColumnsDirective>
//           {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Search, Page]} />

//       </GridComponent>
//     </div>
//   );
// };
// export default Employees;
























// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { saveAs } from 'file-saver';

// const ProductCategoryChart = () => {
//   const [productData, setProductData] = useState(

//   );

//   useEffect(() => {
//     // Fetch data from the Express server
//     axios.get('http://localhost:3000/api/products')
//       .then(response => {
//         setProductData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   Count the number of products sold in each category
//   const categoryCounts = productData.reduce((counts, product) => {
//     counts[product.category] = (counts[product.category] || 0) + 1;
//     return counts;
//   }, {});

//   // Extract labels and data for the chart
//   const labels = Object.keys(categoryCounts);
//   const dataValues = Object.values(categoryCounts);

//   // Chart data
//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Number of Products Sold',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
//         hoverBorderColor: 'rgba(75,192,192,1)',
//         data: dataValues,
//       },
//     ],
//   };

//   const handleDownloadCSV = () => {
//     // Convert data to CSV format
//     const csvContent = `Category,Products Sold\n${labels.map((label, index) => `${label},${dataValues[index]}`).join('\n')}`;

//     // Save as CSV file
//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
//     saveAs(blob, 'product_data.csv');
//   };

//   return (
//     <div>
//       <h2>Number of Products Sold by Category</h2>
//       <Bar
//         id="productChart"
//         data={chartData}
//         options={{
//           scales: {
//             y: {
//               beginAtZero: true,
//               title: {
//                 display: true,
//                 text: 'Number of Products Sold',
//               },
//             },
//             x: {
//               title: {
//                 display: true,
//                 text: 'Category',
//               },
//             },
//           },
//         }}
//       />
//       <div>
//         <button onClick={handleDownloadCSV}>Download as CSV</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCategoryChart;

// src/App.js
