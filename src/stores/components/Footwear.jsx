import React, { useState } from "react";
import MShoes from "./Footwear/MShoes";
import WShoes from "./Footwear/WShoes";

const Footwear = ({ addToCart }) => {
  return (
    <div>
      <h2>Footwear</h2>
      <div className="mshoes-footwear">
        <h2>Men's shoes</h2> <MShoes addToCart={addToCart} />
      </div>
      <div className="wshoes-footwear">
        <h2>Women's Shoes</h2> <WShoes addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Footwear;
