import React from "react";
import Chart from "react-apexcharts";

export default function ChartComponent({ chartData = [], categories = [], chart_id = 'basic-bar', series = 'Total' }) {
  const status = {
    options: {
      chart: {
        id: chart_id
      },
      xaxis: {
        categories: categories
      }
    },
    series: [
      {
        name: "Total",
        data: chartData,
      }
    ],
  };
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    < Chart
      options={status.options}
      series={status.series}
      type="bar"
      width={chartData.width}
      height={chartData.height}
    />
  )
}