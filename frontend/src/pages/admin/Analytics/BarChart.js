import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarController, BarElement } from 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday','friday','saturday'],
    datasets: [
      {
        label: 'peek hours',
        data: [11, 12, 3, 5, 2,11,1],
        backgroundColor: [
          '#4FD1C5',
          '#E9D8FD',
          '#FC8181',
          '#F3BA2F',
          '#2A71D0',
          'lightblue',
          'lightpink',
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1 style={{ color: '#319795' }}>BLast Week Peek Hours For Station SP+ parking</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
