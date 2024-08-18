export interface Option {
    label: string;
    value: string;
  }
  
  export interface ChartDataProps {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string | string[];
      borderColor: string | string[];
      borderWidth: number;
      barThickness: number;
    }[];
  }
  
  export interface TableDataRow {
    variable: string;
    count: number;
    share: number;
  }
  
  export interface Variable {
    category: string;
    variable: string;
    name: string;
  }
  