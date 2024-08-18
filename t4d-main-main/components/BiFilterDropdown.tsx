"use client";
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './FilterDropdown.scss';

interface VariablesData {
  categories: string[];
  variables: { [key: string]: { variable: string; name: string }[] };
}

interface FilterDropdownProps {
  onDataFetched: (variableData: { [key: string]: number }, selectedLabels: { category1: string; variable1: string; name1: string, category2: string; variable2: string; name2: string }) => void;
}

const BiFilterDropdown: React.FC<FilterDropdownProps> = ({ onDataFetched }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [variables, setVariables] = useState<{ [key: string]: { variable: string; name: string }[] }>({});
  const [category1, setCategory1] = useState<string>('');
  const [variable1, setVariable1] = useState<string>('');
  const [name1, setName1] = useState<string>('');
  const [category2, setCategory2] = useState<string>('');
  const [variable2, setVariable2] = useState<string>('');
  const [name2, setName2] = useState<string>('');

  useEffect(() => {
    Papa.parse('/data/t4_survey_variable_list.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const categorySet = new Set<string>();
        const variableMap: { [key: string]: { variable: string; name: string }[] } = {};

        data.forEach((row: any) => {
          const category = row['Category'];
          const variable = row['Name'];
          const name = row['Label'];
          categorySet.add(category);
          if (!variableMap[category]) {
            variableMap[category] = [];
          }
          variableMap[category].push({ variable, name });
        });

        const categoriesArray = Array.from(categorySet);
        setCategories(categoriesArray);
        setVariables(variableMap);
        if (categoriesArray.length > 0) {
          setCategory1(categoriesArray[0]);
          if (variableMap[categoriesArray[0]].length > 0) {
            setVariable1(variableMap[categoriesArray[0]][0].variable);
            setName1(variableMap[categoriesArray[0]][0].name);
          }
          setCategory2(categoriesArray[1] || categoriesArray[0]);
          if (variableMap[categoriesArray[1] || categoriesArray[0]].length > 0) {
            setVariable2(variableMap[categoriesArray[1] || categoriesArray[0]][0].variable);
            setName2(variableMap[categoriesArray[1] || categoriesArray[0]][0].name);
          }
        }
      },
    });
  }, []);

  const handleCategory1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategory1(selectedCategory);
    if (variables[selectedCategory] && variables[selectedCategory].length > 0) {
      setVariable1(variables[selectedCategory][0].variable);
      setName1(variables[selectedCategory][0].name);
    }
  };

  const handleVariable1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariable = event.target.value;
    setVariable1(selectedVariable);
    const selectedName = variables[category1].find((v) => v.variable === selectedVariable)?.name || '';
    setName1(selectedName);
  };

  const handleCategory2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategory2(selectedCategory);
    if (variables[selectedCategory] && variables[selectedCategory].length > 0) {
      setVariable2(variables[selectedCategory][0].variable);
      setName2(variables[selectedCategory][0].name);
    }
  };

  const handleVariable2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariable = event.target.value;
    setVariable2(selectedVariable);
    const selectedName = variables[category2].find((v) => v.variable === selectedVariable)?.name || '';
    setName2(selectedName);
  };

  const handleFetchData = async () => {
    const category1Column = variables[category1].find((v) => v.variable === variable1)?.variable || '';
    const category2Column = variables[category2].find((v) => v.variable === variable2)?.variable || '';

    console.log('Selected Variables:', { category1Column, category2Column });

    Papa.parse('/data/t4_survey_data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        console.log('Survey Data:', data);

        const variableData: { [key: string]: number } = {};
        data.forEach((row: any) => {
          const key = `${row[category1Column]},${row[category2Column]}`;
          variableData[key] = (variableData[key] || 0) + 1;
        });

        console.log('Variable Data:', variableData);
        onDataFetched(variableData, { category1, variable1, name1, category2, variable2, name2 });
      },
    });
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-group">
        <label htmlFor="category1">Category 1:</label>
        <select id="category1" value={category1} onChange={handleCategory1Change}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown-group">
        <label htmlFor="variable1">Variable 1:</label>
        <select id="variable1" value={variable1} onChange={handleVariable1Change}>
          {variables[category1]?.map((variable) => (
            <option key={variable.variable} value={variable.variable}>
              {variable.name}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown-group">
        <label htmlFor="category2">Category 2:</label>
        <select id="category2" value={category2} onChange={handleCategory2Change}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="dropdown-group">
        <label htmlFor="variable2">Variable 2:</label>
        <select id="variable2" value={variable2} onChange={handleVariable2Change}>
          {variables[category2]?.map((variable) => (
            <option key={variable.variable} value={variable.variable}>
              {variable.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleFetchData} className="apply-button">Apply</button>
    </div>
  );
};

export default BiFilterDropdown;
