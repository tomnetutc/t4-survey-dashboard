'use client';

import React, { useState } from 'react';
import VerticalStackedBarChart from '@components/VerticalChart/VerticalChart';
import { prepareVerticalChartData, prepareTableData } from './UnivariateCalc';
import FilterDropdown from './FilterDropdown';
import Infobox from '@components/InfoBox/InfoBox';
import { Option, ChartDataProps, TableDataRow } from './UnivariateType';
import "@components/univariate.scss";

const UnivariateAnalysis: React.FC<{ menuSelectedOptions: Option[], toggleState: boolean, setIsBtwYearLoading: (isLoading: boolean) => void }> = ({ menuSelectedOptions, toggleState, setIsBtwYearLoading }) => {
  const [processedVerticalChartData, setProcessedVerticalChartData] = useState<ChartDataProps>({ labels: [], datasets: [] });
  const [tableData, setTableData] = useState<TableDataRow[]>([]);
  const [variableData, setVariableData] = useState<{ [key: string]: number }>({});
  const [selectedLabel, setSelectedLabel] = useState<{ category: string; variable: string; name: string } | null>(null);

  const handleApplyFilterData = (variableData: { [key: string]: number }, selectedLabel: { category: string; variable: string; name: string }) => {
    setVariableData(variableData);
    setSelectedLabel(selectedLabel);

    const totalResponses = Object.values(variableData).reduce((sum, value) => sum + value, 0);
    const tableData = Object.entries(variableData).map(([response, count]) => ({
      variable: response,
      count,
      share: (count / totalResponses) * 100,
    }));

    setTableData(tableData);

    const chartData = {
      labels: Object.keys(variableData),
      datasets: [
        {
          label: 'Percentage',
          data: Object.values(variableData).map(value => (value / totalResponses) * 100),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          barThickness: 70
        },
      ],
    };
    setProcessedVerticalChartData(chartData);
  };

  return (
    <div className='home'>
      <div className="betweenYear">
        <div className="box SegmentAverage">
          <FilterDropdown onDataFetched={handleApplyFilterData} />
          <Infobox>
            <p>{selectedLabel ? `Variable: ${selectedLabel.variable}` : 'No data available'}</p>
          </Infobox>
        </div>
        <div className="box ChartContainer">
          {Object.keys(variableData).length > 0 ? (
            <VerticalStackedBarChart
              chartData={processedVerticalChartData}
              title={`Variable: ${selectedLabel?.variable}`}
              isStacked={true}
              showLegend={true}
            />
          ) : (
            <Infobox>
              <p>No data available</p>
            </Infobox>
          )}
        </div>
        <div className="box TableContainer">
          {tableData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Variable</th>
                  <th>Total</th>
                  <th>Share (%)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.variable}</td>
                    <td>{row.count}</td>
                    <td>{row.share.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Infobox>
              <p>No data available</p>
            </Infobox>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnivariateAnalysis;
