// components/DropdownSelector.tsx

import React from 'react';
import Select from 'react-select';

interface DropdownSelectorProps {
  options: { value: string; label: string }[];
  onChange: (selectedOption: any) => void;
  placeholder: string;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({ options, onChange, placeholder }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default DropdownSelector;
