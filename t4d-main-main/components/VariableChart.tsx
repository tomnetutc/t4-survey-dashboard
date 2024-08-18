// components/VariableChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface VariableChartProps {
  data: { [key: string]: number };
}

const VariableChart: React.FC<VariableChartProps> = ({ data }) => {
  const labels = Object.keys(data);
  const counts = Object.values(data);

  const chartData = {
    labels,
    datasets: [
      { 
        label: 'Count',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Variable Responses vs Count',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default VariableChart;
