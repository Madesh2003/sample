import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export function WorldMap() {
  const [aggregatedData, setAggregatedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Make a GET request to your backend API to fetch orders data
        const response = await axios.get("http://localhost:8000/soldproducts/");
        const ordersData = response.data;

        // Aggregate the fetched data
        const aggregated = aggregateData(ordersData);
        setAggregatedData(aggregated);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log(aggregatedData)

  // Function to aggregate data based on country and count the number of products sold
  function aggregateData(ordersData) {
    const aggregatedData = {};
    ordersData.forEach((order) => {
      const country = order.customer.address.country;
      if (aggregatedData[country]) {
        aggregatedData[country] += order.orders.length;
      } else {
        aggregatedData[country] = order.orders.length;
      }
    });
    return aggregatedData;
  }

  return (
     <Chart
     className="xl:w-800 xl:h-[600px] lg:w-[700px] lg:h-[500px] md:w-[600px] md:h-[500px] sm:w-[400px] sm:h-[300px] max-sm:w-[300px] max-sm:h-[300px]"
      chartType="GeoChart"
      data={[
        ["Country", "Products Sold"],
        ...Object.entries(aggregatedData).map(([country, productsSold]) => [
          country,
          productsSold,
        ]),
      ]}
      options={{
        region: "world",
        colorAxis: { colors: ["#B0A5DF", "#5F3AFF"] },
      }}
    />
  );
}
