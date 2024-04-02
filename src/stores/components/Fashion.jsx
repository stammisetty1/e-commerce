import React, { useState } from "react";
import MShirts from "./Fashion/MShirts";
import MShoes from "./Fashion/MShoes";
import Sunglasses from "./Fashion/Sunglasses";
import WJewellery from "./Fashion/WJewellery";
import WShoes from "./Fashion/WShoes";
import Tops from "./Fashion/Tops";
import WBags from "./Fashion/WBags";
import WDresses from "./Fashion/WDresses";

const Fashion = () => {
  return (
    <div>
      <h2>Fashion</h2>
      <div className="mshirts-fashion">
        <h2>Men's Shirts</h2> <MShirts />
      </div>
      <div className="tops-fashion">
        <h2>Tops</h2> <Tops />
      </div>
      <div className="sunglasses-fashion">
        <h2>Sunglasses</h2> <Sunglasses />
      </div>
      <div className="mshoes-fashion">
        <h2>Men's shoes</h2> <MShoes />
      </div>
      <div className="wbags-fashion">
        <h2>Women's Bags</h2> <WBags />
      </div>
      <div className="wdresses-fashion">
        <h2>Women's Dresses</h2> <WDresses />
      </div>
      <div className="wjewellery-fashion">
        <h2>Women's Jewellery</h2> <WJewellery />
      </div>
      <div className="wshoes-fashion">
        <h2>Women's Shoes</h2> <WShoes />
      </div>
    </div>
  );
};

export default Fashion;
