import React from "react";
import Lighting from "./HomeAndLiving/Lighting";
import HomeDecor from "./HomeAndLiving/HomeDecor";
import Furniture from "./HomeAndLiving/Furniture";
import Groceries from "./HomeAndLiving/Groceries";
const HomeAndLiving = ({ addToCart }) => {
  return (
    <div>
      <div className="groceries-homeandliving">
        <h2>Groceries</h2> <Groceries addToCart={addToCart} />
      </div>
      <div className="homedecor-homeandliving">
        <h2>Home Decor</h2> <HomeDecor addToCart={addToCart} />
      </div>
      <div className="lighting-homeandliving">
        <h2>Lighting</h2>
        <Lighting />
      </div>
      <div className="furniture-homeandliving">
        <h2>Furniture</h2> <Furniture addToCart={addToCart} />
      </div>
    </div>
  );
};

export default HomeAndLiving;
