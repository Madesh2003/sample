import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { FaDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver';
import axios from 'axios';

const Barchart = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8000/soldproducts/");
            setProductData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
        fetchData();
      }, []);

    // Count the number of products sold in each category
    const categoryCounts = productData.reduce((counts, product) => {
        counts[product.category] = (counts[product.category] || 0) + 1;
        return counts;
    }, {});

    // Extract labels and data for the chart
    const labels = Object.keys(categoryCounts);
    const dataValues = Object.values(categoryCounts);

    // Chart data
  // ...

// ...

const chartData = {
    options: {
        chart: {
            type: 'bar',
            toolbar: {
                tools: {
                    download: false,
                },
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
            }
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: labels,
            labels: {
                style: {
                    colors: 'black',
                    fontSize: '16px',
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'black',
                    fontSize: "16px"
                },
                formatter: function (value) {
                    return Math.round(value); // Rounds the value to the nearest integer
                }
            },
            min: 0, // Set the minimum value for the y-axis
            max: Math.max(...dataValues) + 1, // Set the maximum value for the y-axis
        },
        colors: ["#4318FF"]
    },
    series: [
        {
            name: 'Number of Products Sold',
            data: dataValues,
        },
    ],
};


    const handleDownloadCSV = () => {
        // Convert data to CSV format
        const csvContent = `Category,Products Sold\n${labels.map((label, index) => `${label},${dataValues[index]}`).join('\n')}`;

        // Save as CSV file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'product_data.csv');
    };

    return (
        <div>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
            />
            <div className='flex justify-center'>
            <button onClick={handleDownloadCSV} class=" shadow-[0px 0px 10px 1px rgba(69,4,253,1)] transition duration-700 border-0 text-lg h-12 w-34 bg-brand-bg hover:bg-black text-white mt-2 px-3 rounded-md">
                    <span>Download</span>
                    <FaDownload class=' inline-block animate-bounce text-xl ml-3' />
                </button>
            </div>
        </div>
    );
};

export default Barchart;
