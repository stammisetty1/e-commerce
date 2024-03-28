import React, { useState } from "react";

const Lifestyle = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <h2>Lifestyle</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="groceries">Groceries</option>
        <option value="decoration">Home Decoration</option>
        <option value="furniture">Furniture</option>
        <option value="lighting">Lighting</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Lifestyle;