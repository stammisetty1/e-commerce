import React, { useState } from "react";
import MShirts from "./Fashion/MShirts";
import MShoes from "./Footwear/MShoes";
import Sunglasses from "./Fashion/Sunglasses";
import WJewellery from "./Fashion/WJewellery";
import WShoes from "./Footwear/WShoes";
import Tops from "./Fashion/Tops";
import WBags from "./Fashion/WBags";
import WDresses from "./Fashion/WDresses";

const Fashion = ({ addToCart }) => {
  return (
    <div>
      <h2>Fashion</h2>
      <div className="mshirts-fashion">
        <h2>Men's Shirts</h2> <MShirts addToCart={addToCart} />
      </div>
      <div className="tops-fashion">
        <h2>Tops</h2> <Tops addToCart={addToCart} />
      </div>
      <div className="sunglasses-fashion">
        <h2>Sunglasses</h2> <Sunglasses addToCart={addToCart} />
      </div>
      <div className="mshoes-fashion">
        <h2>Men's shoes</h2> <MShoes addToCart={addToCart} />
      </div>
      <div className="wbags-fashion">
        <h2>Women's Bags</h2> <WBags addToCart={addToCart} />
      </div>
      <div className="wdresses-fashion">
        <h2>Women's Dresses</h2> <WDresses addToCart={addToCart} />
      </div>
      <div className="wjewellery-fashion">
        <h2>Women's Jewellery</h2> <WJewellery addToCart={addToCart} />
      </div>
      <div className="wshoes-fashion">
        <h2>Women's Shoes</h2> <WShoes addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Fashion;
