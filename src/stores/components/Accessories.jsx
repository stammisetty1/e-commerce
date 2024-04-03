import React, { useState } from "react";
import MensWatches from "./Accessories/MensWatches";
import WomensWatches from "./Accessories/WomensWatches";

const Accessories = ({ addToCart }) => {
  return (
    <div>
      <h2>Accessories</h2>
      <div className="wwatches-accessories">
        <h2>Women's Watches</h2>
        <WomensWatches addToCart={addToCart} />
      </div>
      <div className="mwatches-accessories">
        <h2>Men's Watches</h2>
        <MensWatches addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Accessories;
