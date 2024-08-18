"use client";
import React, { useState } from 'react';
import "@components/univariate.scss";
import BivariateBarChart from './BivariateChart'; // Use the new BivariateBarChart component
import { prepareVerticalChartData, prepareTableData } from './BiCalc'; // Ensure BiCalc is in the correct path
import BiFilterDropdown from './BiFilterDropdown';
import Infobox from '@components/InfoBox/InfoBox';
import { Option, ChartDataProps, TableDataRow } from './Types'; // Adjust the path if necessary

const BivariateAnalysis: React.FC<{ menuSelectedOptions: Option[], toggleState: boolean, setIsBtwYearLoading: (isLoading: boolean) => void }> = ({ menuSelectedOptions, toggleState, setIsBtwYearLoading }) => {
  const [processedVerticalChartData, setProcessedVerticalChartData] = useState<ChartDataProps>({ labels: [], datasets: [] });
  const [tableData, setTableData] = useState<TableDataRow[]>([]);
  const [variableData, setVariableData] = useState<{ [key: string]: number }>({});
  const [selectedLabels, setSelectedLabels] = useState<{ category1: string; variable1: string; name1: string; category2: string; variable2: string; name2: string } | null>(null);

  const handleApplyFilterData = (variableData: { [key: string]: number }, selectedLabels: { category1: string; variable1: string; name1: string; category2: string; variable2: string; name2: string }) => {
    setVariableData(variableData);
    setSelectedLabels(selectedLabels);

    const tableData = prepareTableData(variableData);
    setTableData(tableData);

    const chartData = prepareVerticalChartData(variableData);
    setProcessedVerticalChartData(chartData);
  };

  return (
    <div className='home'>
      <div className="betweenYear">
        <div className="box SegmentAverage">
          <BiFilterDropdown onDataFetched={handleApplyFilterData} />
          <Infobox>
            <p>Choose the Categories and Variables</p>
          </Infobox>
        </div>
        <div className="box ChartContainer">
          {Object.keys(variableData).length > 0 ? (
            <BivariateBarChart
              chartData={processedVerticalChartData}
              title={`Variable: ${selectedLabels?.variable1} & ${selectedLabels?.variable2}`}
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
                  <th>Variable 1</th>
                  <th>Variable 2</th>
                  <th>Total</th>
                  <th>Share (%)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.variable1}</td>
                    <td>{row.variable2}</td>
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

export default BivariateAnalysis;
