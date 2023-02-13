import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: ['chocolate', 'abc'], label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function SelectReact() {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption.value);

  const handleOnChange = (event) => {
    setSelectedOption(event);
  };

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={handleOnChange}
        options={options}
      />
    </div>
  );
}
