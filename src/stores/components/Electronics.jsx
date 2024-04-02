import React from "react";
import Smartphones from "./Electronics/Smartphones";
import Laptops from "./Electronics/Laptops";

const Electronics = ({ handleCategoryChange }) => {
  return (
    <div>
      <h2>Electronics</h2>
      <div className="smartphones-electronics">
        <h2>Smartphones</h2>
        <Smartphones />
      </div>
      <div className="laptops-electronics">
        <h2>Laptops</h2>
        <Laptops />
      </div>
    </div>
  );
};

export default Electronics;
