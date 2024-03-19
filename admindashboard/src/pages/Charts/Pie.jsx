import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { saveAs } from "file-saver";
import { FaDownload } from "react-icons/fa";
import Downloadbtn from "../../components/Downloadbtn";

const Subcategory = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "pie",
      },
      labels: [],
    },
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/soldproducts/");
        const orders = response.data;

        const subcategoryCounts = {};

        orders.forEach((order) => {
          order.orders.forEach((orderItem) => {
            orderItem.items.forEach((item) => {
              if (subcategoryCounts[item.subcategory]) {
                subcategoryCounts[item.subcategory]++;
              } else {
                subcategoryCounts[item.subcategory] = 1;
              }
            });
          });
        });

        const labels = Object.keys(subcategoryCounts);
        const series = Object.values(subcategoryCounts);

        setChartData({
          options: {
            ...chartData.options,
            labels: labels,
          },
          series: series,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const downloadCSV = () => {
    let csvContent = "Subcategory,No.of.Soldproducts\n";

    chartData.series.forEach((count, index) => {
      const label = chartData.options.labels[index];
      csvContent += `${label},${count}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "product_sales.csv");
  };

  return (
      <div className="pie-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="500"
        />
              <Downloadbtn func={downloadCSV} />

      </div>
  );
};

export default Subcategory;
