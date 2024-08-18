"use client";

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './FilterDropdown.scss';

interface VariablesData {
  categories: string[];
  variables: { [key: string]: { variable: string; name: string }[] };
}

interface FilterDropdownProps {
  onDataFetched: (variableData: { [key: string]: number }, selectedLabel: { category: string; variable: string; name: string }) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onDataFetched }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [variables, setVariables] = useState<{ [key: string]: { variable: string; name: string }[] }>({});
  const [category, setCategory] = useState<string>('');
  const [variable, setVariable] = useState<string>('');
  const [name, setName] = useState<string>('');

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
          const variable = row['Label'];
          const name = row['Name'];
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
          setCategory(categoriesArray[0]);
          if (variableMap[categoriesArray[0]].length > 0) {
            setVariable(variableMap[categoriesArray[0]][0].variable);
            setName(variableMap[categoriesArray[0]][0].name);
          }
        }
      },
    });
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (variables[selectedCategory]?.length > 0) {
      setVariable(variables[selectedCategory][0].variable);
      setName(variables[selectedCategory][0].name);
    }
  };

  const handleVariableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedVariable = event.target.value;
    const selectedVarObj = variables[category].find(v => v.variable === selectedVariable);
    if (selectedVarObj) {
      setVariable(selectedVarObj.variable);
      setName(selectedVarObj.name);
    }
  };

  const handleApply = () => {
    Papa.parse('/data/t4_survey_data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data;
        const responseCounts: { [key: string]: number } = {};

        data.forEach((row: any) => {
          const response = row[name];
          if (response) {
            responseCounts[response] = (responseCounts[response] || 0) + 1;
          }
        });

        onDataFetched(responseCounts, { category, variable, name });
      },
    });
  };

  return (
    <div className="filter-dropdown">
      <p>Choose from the following characteristics, organized by categories, to create a simple summary table.</p>
      <div className="dropdown-group">
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="dropdown-group">
        <label htmlFor="variable">Variable</label>
        <select id="variable" value={variable} onChange={handleVariableChange}>
          {variables[category]?.map((varObj) => (
            <option key={varObj.variable} value={varObj.variable}>{varObj.variable}</option>
          ))}
        </select>
      </div>
      <button onClick={handleApply} className="apply-button">Apply</button>
    </div>
  );
};

export default FilterDropdown;