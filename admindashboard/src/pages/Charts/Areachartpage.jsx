import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { FaDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import axios from 'axios';


const Areachartpage = () => {
  const [chartData, setChartData] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/soldproducts/");
        const deliveredProducts = response.data.filter(product =>
          product.orders.some(order => order.status === 'Delivered')
        );
        setChartData(deliveredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const getChartData = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const selectedYearData = chartData.filter(item => {
      const orderYear = new Date(item.orders[0].order_date).getFullYear();
      return orderYear === selectedYear && item.orders[0].status === "Delivered";
    });
  
    const productCountByMonth = months.map(month => {
      const salesInMonth = selectedYearData.filter(item => {
        const orderMonth = new Date(item.orders[0].order_date).toLocaleString('en-us', { month: 'long' });
        return orderMonth === month && item.orders[0].status === "Delivered";
      });
      return salesInMonth.length;
    });
  
    return productCountByMonth;
  };
  
  const calculateTotalProducts = () => {
    const selectedYearData = chartData.filter(item => {
      const orderYear = new Date(item.orders[0].order_date).getFullYear();
      return orderYear === selectedYear && item.orders[0].status === "Delivered";
    });
  
    return selectedYearData.length;
  };
  

  const calculateTotalRevenue = () => {
    const selectedYearData = chartData.filter(item => {
      const orderYear = new Date(item.orders[0].order_date).getFullYear();
      return orderYear === selectedYear && item.orders[0].status === "Delivered";
    });
  
    const totalRevenue = selectedYearData.reduce((total, item) => {
      const orders = item.orders.filter(order => order.status === "Delivered");
      const revenue = orders.reduce((acc, order) => {
        const price = order.isOfferPurchased ? order.offeredPrice : order.items[0].productPrice;
        return acc + parseFloat(price);
      }, 0);
      return total + revenue;
    }, 0);
  
    return totalRevenue; 
  };
  

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
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
    const csvData = chartData.map(item => {
      const orderDate = new Date(item.orders[0].order_date);
      const orderYear = orderDate.getFullYear();
      const orderMonth = orderDate.toLocaleString('en-us', { month: 'long' });
      const price = item.orders[0].items[0].isOfferPurchased === 'true' ? parseFloat(item.orders[0].items[0].offeredPrice) : parseFloat(item.orders[0].items[0].productPrice);
      return `${item.orders[0].items[0].productName},${item.orders[0].items[0].brandName},${price},${orderMonth},${orderYear}`;
    });
  
    const csvContent = `Product Name,Brand Name,Price,Order Month,Order Year\n${csvData.join('\n')}`;
  
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
          <p>Revenue <span className=' text-brand-500'>₹ {calculateTotalRevenue()}</span></p>
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
