import React, { useState } from "react";

const Automative = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <h2>Automative</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="outdoor">Outdoor</option>
        <option value="motorcycle">MotorCycle</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Automative;
