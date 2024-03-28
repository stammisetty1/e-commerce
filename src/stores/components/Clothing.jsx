import React, { useState } from "react";

const Clothing = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <h2>Clothing</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Clothing;
