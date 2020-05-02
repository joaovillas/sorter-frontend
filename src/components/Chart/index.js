import React from "react";
import Chart from "react-apexcharts";

export default function ChartComponent({ chartData }) {
  const status = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Média Idade', 'Homens', 'Mulheres', 'Total']
      }
    },
    series: [
      {
        name: "series-1",
        data: [chartData.avarage, chartData.male, chartData.female, chartData.total],
      }
    ],
  };

  return (
    <Chart
      options={status.options}
      series={status.series}
      type="bar"
      width="50%"
    />
  )
}