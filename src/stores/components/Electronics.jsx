import React from "react";
import Smartphones from "./Electronics/Smartphones";
import Laptops from "./Electronics/Laptops";

const Electronics = ({ addToCart }) => {
  return (
    <div>
      <h2>Electronics</h2>
      <div className="smartphones-electronics">
        <h2>Smartphones</h2>
        <Smartphones addToCart={addToCart} />
      </div>
      <div className="laptops-electronics">
        <h2>Laptops</h2>
        <Laptops addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Electronics;
