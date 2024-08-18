import React from 'react';
import './VerticalChart.scss';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface VerticalStackedBarChartProps {
  chartData: any;
  title: string;
  isStacked?: boolean;
  showLegend?: boolean;
}

const VerticalStackedBarChart: React.FC<VerticalStackedBarChartProps> = ({
  chartData,
  title,
  isStacked = false,
  showLegend = true,
}) => {
  if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
    return <div>No data available</div>;
  }

  const options = {
    indexAxis: 'x' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';
            let value = context.raw !== undefined ? context.raw : context.parsed.y;
            if (label) {
              label += ': ';
            }
            label += value % 1 === 0 ? `${value}.0%` : `${value.toFixed(2)}%`;
            return label;
          },
        },
      },
      legend: {
        display: showLegend,
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        stacked: isStacked,
        ticks: {
          maxRotation: 90,
          minRotation: 45,
          autoSkip: false,
        },
      },
      y: {
        stacked: isStacked,
        ticks: {
          callback: (value: any) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default VerticalStackedBarChart;
