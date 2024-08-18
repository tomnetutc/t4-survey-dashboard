import Papa from 'papaparse';
import { ChartDataProps, TableDataRow, Variable } from './Types'; // Adjust the path if necessary

// Function to read CSV data
const readCSV = (filePath: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(filePath, {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

// Function to extract variables from data dictionary
export const extractVariablesFromDictionary = async (dataDictionaryPath: string): Promise<Variable[]> => {
  const data = await readCSV(dataDictionaryPath);
  return data.map((row) => ({
    category: row['Category'],
    variable: row['Variable'],
    name: row['Name'],
  }));
};

// Function to fetch variable responses from survey data
export const fetchVariableResponses = async (
  surveyDataPath: string,
  category1: string,
  variable1: string,
  category2: string,
  variable2: string
): Promise<{ [key: string]: number }> => {
  const data = await readCSV(surveyDataPath);
  const variableData: { [key: string]: number } = {};
  data.forEach((row: any) => {
    const key = `${row[variable1]},${row[variable2]}`;
    variableData[key] = (variableData[key] || 0) + 1;
  });
  return variableData;
};

export const prepareVerticalChartData = (data: { [key: string]: number }): ChartDataProps => {
  const categories = new Set<string>();
  const subCategories = new Set<string>();

  // Separate data into categories and subcategories
  const parsedData: { [category: string]: { [subCategory: string]: number } } = {};
  Object.entries(data).forEach(([key, value]) => {
    const [category, subCategory] = key.split(',');
    categories.add(category);
    subCategories.add(subCategory);
    if (!parsedData[category]) {
      parsedData[category] = {};
    }
    parsedData[category][subCategory] = value;
  });

  const labels = Array.from(categories);
  const datasets = Array.from(subCategories).map((subCategory, index) => {
    return {
      label: subCategory,
      data: labels.map((label) => parsedData[label][subCategory] || 0),
      backgroundColor: `rgba(${index * 30 % 255}, ${index * 50 % 255}, ${index * 70 % 255}, 0.6)`,
      borderColor: `rgba(${index * 30 % 255}, ${index * 50 % 255}, ${index * 70 % 255}, 1)`,
      borderWidth: 1,
      barThickness: 70,
    };
  });

  return {
    labels,
    datasets,
  };
};

export const prepareTableData = (data: { [key: string]: number }): TableDataRow[] => {
  const totalResponses = Object.values(data).reduce((sum, value) => sum + value, 0);

  return Object.entries(data).map(([response, count]) => {
    const [variable1, variable2] = response.split(',');
    return {
      variable1, // Separately map variable1
      variable2, // Separately map variable2
      count,
      share: (count / totalResponses) * 100,
    };
  });
};
