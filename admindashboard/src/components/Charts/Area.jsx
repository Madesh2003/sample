import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { FaDownload } from "react-icons/fa6";

const Area = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/soldproducts/");
          setChartData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);
    var months;
    const getChartData = () => {
        // Manipulate data to fit the chart format
        months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const currentYear = new Date().getFullYear();
        const currentYearData = chartData.filter(item => item.year === currentYear);

        const productCountByMonth = months.map(month => {
            const salesInMonth = currentYearData.filter(item => item.orderMonth === month);
            return salesInMonth.length;
        });

        return productCountByMonth;


    };

    const calculateTotalProducts = () => {
        const currentYear = new Date().getFullYear();
        const currentYearData = chartData.filter(item => item.year === currentYear);
        return currentYearData.length;
    };

    const calculateTotalRevenue = () => {
        const currentYear = new Date().getFullYear();
        const currentYearData = chartData.filter(item => item.year === currentYear);

        const totalRevenue = currentYearData.reduce((total, item) => {
            const price = item.isOfferPurchased ? item.offeredPrice : item.productPrice;
            return total + price;
        }, 0);

        return totalRevenue;
    };


    const options = {
        chart: {
            type: 'area',
            toolbar: {
                tools: {
                    download: false,
                    selection: true,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                },
            },
        },
        colors: ["#422AFB"],
        fill: {
            colors: "#422AFB",
        },
        stroke: {
            curve: 'smooth',
        },

        dataLabels: {
            style: {
                colors: ['#422AFB'],
            }
        },
        xaxis: {
            categories: [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            labels: {
                style: {
                  colors: 'black',
                  fontSize: '11px',
                }
              }
        },
    };

    const downloadCSV = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Months are zero-based
        const currentYearData = chartData.filter(
            item => item.year === currentYear && months.indexOf(item.orderMonth) + 1 <= currentMonth
        );

        const csvData = currentYearData.map(item => {
            const price = item.isOfferPurchased ? item.offeredPrice : item.productPrice;
            return `${item.productName},${price},${item.orderMonth}`;
        });

        const csvContent = `Product Name,Brand Name,Price,Order Month\n${csvData.join('\n')}`;

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chart_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div>
            <Chart options={options} series={[{ name: 'Products Sold', data: getChartData() }]} type="area" height={350} />
            <div className= 'text-xl mt-5 font-semibold flex justify-evenly'>
                <div>
                <p>Sold Products <span className='text-brand-500'>{calculateTotalProducts()}</span></p>
                <p>Revenue <span className=' text-brand-500'>{calculateTotalRevenue()}</span></p>
                </div>
               <div>
               <button onClick={downloadCSV} class=" shadow-[0px 0px 10px 1px rgba(69,4,253,1)] transition duration-700 border-0 text-lg h-12 w-34 bg-brand-bg hover:bg-black text-white mt-2 px-3 rounded-md">
                    <span>Download</span>
                    <FaDownload class=' inline-block animate-bounce text-xl ml-3' />
                </button>
               </div>
            </div>
        </div>
    );
};

export default Area;
