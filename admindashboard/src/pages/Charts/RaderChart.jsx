import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios'; // You may need to install axios for making HTTP requests

const WorldMapChart = () => {
    const [chartData, setChartData] = useState({
        series: [],
        options: {
            chart: {
                type: 'heatmap',
                height: 350
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#008FFB'],
            title: {
                text: 'Countries of Customers',
                align: 'left'
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.5,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        ranges: [{
                            from: 0,
                            to: 0,
                            color: '#008FFB'
                        }]
                    }
                }
            },
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            tooltip: {
                enabled: false
            },
            grid: {
                show: false
            }
        }
    });

    useEffect(() => {
        // Assuming you have an API endpoint to fetch the data
        axios.get('your_api_endpoint_here')
            .then(response => {
                const orders = response.data.orders;
                const countryCounts = {};

                orders.forEach(order => {
                    const country = order.customer.address.country;
                    if (countryCounts[country]) {
                        countryCounts[country]++;
                    } else {
                        countryCounts[country] = 1;
                    }
                });

                const seriesData = Object.entries(countryCounts).map(([country, count]) => ({
                    x: country,
                    y: count
                }));

                setChartData({
                    ...chartData,
                    series: [{
                        name: 'Countries',
                        data: seriesData
                    }]
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div className="world-map-chart">
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="heatmap"
                height={350}
            />
        </div>
    );
};

export default WorldMapChart;
