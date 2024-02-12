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
        setChartData(response.data);
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
