import React from 'react';

interface DataTableProps {
  data: { variable: string; count: number; share: number }[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="data-table">
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Total Count</th>
            <th>Share (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.variable}</td>
              <td>{row.count}</td>
              <td>{row.share.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
