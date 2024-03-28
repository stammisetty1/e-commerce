import React, { useState, useEffect } from "react";

import Electronics from "./Electronics";
import Fashion from "./Fashion";
import Clothing from "./Clothing";
import Lifestyle from "./Lifestyle";
import Automative from "./Automative";
import Smartphones from "./Electronics/Smartphones";
import Laptops from "./Electronics/Laptops";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    {console.log("changed")};
  };


  return (
    <div>
    <div className="categories">
      <Electronics handleCategoryChange={handleCategoryChange} />
      <Fashion />
      <Clothing />
      <Lifestyle />
      <Automative /> 
    </div>
    {selectedCategory === 'smartphones' && <Smartphones />}
      {selectedCategory === 'laptops' && <Laptops />}
    </div>
  );
};

export default Products;