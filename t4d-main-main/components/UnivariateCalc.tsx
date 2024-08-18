import { ChartDataProps, DataRow, TableDataRow } from '@types';

export const prepareVerticalChartData = (data: DataRow[], startYear: string, endYear: string): { chartData: ChartDataProps } => {
  const filteredData = data.filter(item => item.year >= startYear && item.year <= endYear);

  const variableCounts = filteredData.reduce((acc, item) => {
    const variable = item.variable; // Adjust this to the actual variable name in your data
    if (!acc[variable]) {
      acc[variable] = 0;
    }
    acc[variable]++;
    return acc;
  }, {} as Record<string, number>);

  const labels = Object.keys(variableCounts);
  const counts = Object.values(variableCounts);
  const total = counts.reduce((sum, count) => sum + count, 0);
  const percentages = counts.map(count => (count / total) * 100);

  const chartData: ChartDataProps = {
    labels,
    datasets: [
      {
        label: 'Percentage',
        data: percentages,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barThickness: 0
      },
    ],
  };

  return { chartData };
};

export const prepareTableData = (data: DataRow[]): TableDataRow[] => {
  const variableCounts = data.reduce((acc, item) => {
    const variable = item.variable; // Adjust this to the actual variable name in your data
    if (!acc[variable]) {
      acc[variable] = { count: 0, share: 0 };
    }
    acc[variable].count++;
    return acc;
  }, {} as Record<string, { count: number; share: number }>);

  const total = data.length;

  Object.keys(variableCounts).forEach(variable => {
    variableCounts[variable].share = (variableCounts[variable].count / total) * 100;
  });

  return Object.keys(variableCounts).map(variable => ({
    variable,
    count: variableCounts[variable].count,
    share: variableCounts[variable].share,
  }));
};
