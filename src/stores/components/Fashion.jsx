import React, { useState } from "react";

const Fashion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <h2>Fashion</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="fragrances">Fragrances</option>
        <option value="tops">Tops</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="jewellery">Jewellery</option>
        <option value="bags">Bags</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Fashion;