import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { saveAs } from 'file-saver';
import axios from 'axios';
import Downloadbtn from '../../components/Downloadbtn';

const Barchart = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/soldproducts/");
                const deliveredProducts = response.data.filter(product =>
                    product.orders.some(order => order.status === 'Delivered')
                  );
              
                  setProductData(deliveredProducts); 
                  console.log(deliveredProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


const categoryCounts = productData.reduce((counts, product) => {
    product.orders.forEach(order => {
        order.items.forEach(item => {
            const category = item.category;
            counts[category] = (counts[category] || 0) + 1;
        });
    });
    return counts;
}, {});

    const labels = Object.keys(categoryCounts);
    const dataValues = Object.values(categoryCounts);

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
                        fontSize: '14px',
                    },
                    rotate: -90,
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: 'black',
                        fontSize: "16px"
                    },
                    formatter: function (value) {
                        return Math.round(value);
                    }
                },
                min: 0, 
                max: Math.max(...dataValues) + 1, 
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
        const csvContent = `Category,Products Sold\n${labels.map((label, index) => `${label},${dataValues[index]}`).join('\n')}`;

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
         <Downloadbtn func={handleDownloadCSV} />
        </div>
    );
};

export default Barchart;