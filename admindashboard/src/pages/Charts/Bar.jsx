import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { FaDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver';

const Barchart = () => {
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
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
                "orderStatus": "",
                "isOfferPurchased": false
            }
        ]

    );

    useEffect(() => {
        // Fetch data from the Express server
        // (Make sure your Express server is running and serving data at http://localhost:3000/api/products)
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
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
