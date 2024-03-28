import React, { useState } from "react";

const Electronics = ({ handleCategoryChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const category = event.target.value;
    setSelectedOption(category);
    {console.log(category)};
    handleCategoryChange(category);
  };

  return (
    <div>
      <h2>Electronics</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value=""></option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="mens-watches">Men's Watches</option>
        <option value="womens-watches">Women's Watches</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Electronics;
