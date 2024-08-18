// components/ChartContainer.tsx

'use client';

import React, { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import VerticalStackedBarChart from './VerticalChart/VerticalChart';

const ChartContainer: React.FC = () => {
  const [variableData, setVariableData] = useState<{ [key: string]: number }>({});

  const handleDataFetched = (data: { [key: string]: number }) => {
    setVariableData(data);
  };

  const chartData = {
    labels: Object.keys(variableData),
    datasets: [
      {
        label: 'Count',
        data: Object.values(variableData),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <FilterDropdown onDataFetched={handleDataFetched} />
      {Object.keys(variableData).length > 0 && (
        <VerticalStackedBarChart chartData={chartData} title="Average" />
      )}
    </div>
  );
};

export default ChartContainer;  
