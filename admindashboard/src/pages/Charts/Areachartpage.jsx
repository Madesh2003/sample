import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';

const Areachartpage = () => {
  const [chartData, setChartData] = useState(
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
            "orderMonth": "March",
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
            "orderMonth": "January",
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
        },
        {
            "year": 2024,
            "productName": "Mechanical Gaming Mousepad",
            "brandName": "GamerTech",
            "productDescription": "Large-sized mousepad optimized for gaming precision.",
            "productPrice": 2000,
            "category": "Peripherals",
            "subcategory": "Mousepads",
            "customer": "Ava Clark",
            "purchaseLocation": "Retail Store",
            "orderMonth": "January",
            "isOfferPurchased": false
        }
    ]
);
   

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const getChartData = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const selectedYearData = chartData.filter(item => item.year === selectedYear);

    const productCountByMonth = months.map(month => {
      const salesInMonth = selectedYearData.filter(item => item.orderMonth === month);
      return salesInMonth.length;
    });

    return productCountByMonth;
  };

  const calculateTotalProducts = () => {
    const selectedYearData = chartData.filter(item => item.year === selectedYear);
    return selectedYearData.length;
  };

  const calculateTotalRevenue = () => {
    const selectedYearData = chartData.filter(item => item.year === selectedYear);

    const totalRevenue = selectedYearData.reduce((total, item) => {
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
    const selectedYearData = chartData.filter(item => item.year === selectedYear);

    const csvData = selectedYearData.map(item => {
      const price = item.isOfferPurchased ? item.offeredPrice : item.productPrice;
      return `${item.productName},${price},${item.orderMonth}`;
    });

    const csvContent = `Product Name,Brand Name,Price,Order Month\n${csvData.join('\n')}`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    saveAs(blob, `chart_data_${selectedYear}.csv`);
  };

  return (
    <div className=' mt-10'>
      <label htmlFor="yearSelect">Select Year:</label>
      <select id="yearSelect" onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))} value={selectedYear}>
        {[2021, 2022, 2023, 2024].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <Chart options={options} series={[{ name: 'Products Sold', data: getChartData() }]} type="area" height={350} />

      <div className='text-xl mt-5 font-semibold flex justify-evenly'>
        <div>
          <p>Sold Products <span className='text-brand-500'>{calculateTotalProducts()}</span></p>
          <p>Revenue <span className=' text-brand-500'>{calculateTotalRevenue()}</span></p>
        </div>
        <div>
          <button onClick={downloadCSV} className='shadow-[0px 0px 10px 1px rgba(69,4,253,1)] transition duration-700 border-0 text-lg h-12 w-34 bg-brand-bg hover:bg-black text-white mt-2 px-3 rounded-md'>
            <span>Download</span>
            <FaDownload className='inline-block animate-bounce text-xl ml-3' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Areachartpage;
