import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = ({ chartData }) => {
  const colors = {
    green: 'rgba(0, 128, 0, 0.7)',
    red: 'rgba(255, 0, 0, 0.7)',
    blue: 'rgba(53, 162, 235, 0.5)'
  };

  const backgroundColors = chartData.map((product) => {
    if (product.rating.rate >= 4.5) {
      return colors.green; 
    } else if (product.rating.rate <= 3) {
      return colors.red; 
    } else {
      return colors.blue; 
    }
  });

  const data = {
    labels: chartData.map((product) => product.title),
    datasets: [
      {
        label: 'Mid Rating',
        data: chartData.map((product) => product.rating.rate),
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
      {
        label: 'High Rating)',
        data: [],
        backgroundColor: colors.green,
        borderWidth: 0,
      },
      {
        label: 'Low Rating',
        data: [],
        backgroundColor: colors.red,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
