import React from "react";
import Smartphones from "./Electronics/Smartphones";
import Laptops from "./Electronics/Laptops";

const Electronics = ({ handleCategoryChange }) => {
  return (
    <div>
      <h2>Electronics</h2>
      <Smartphones />
      <Laptops />
    </div>
  );
};

export default Electronics;
