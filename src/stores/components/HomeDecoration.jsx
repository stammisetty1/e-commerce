import React from "react";
import Lighting from "./HomeDecoration/Lighting";
import HomeDecor from "./HomeDecoration/HomeDecor";
import Furniture from "./HomeDecoration/Furniture";
const HomeDecoration = () => {
  return (
    <div>
      <h2>Home Decoration</h2>
      <div className="homedecor-homedecoration">
        <h2>Home Decor</h2> <HomeDecor />
      </div>
      <div className="lighting-homedecoration">
        <h2>Lighting</h2>
        <Lighting />
      </div>
      <div className="furniture-homedecoration">
        <h2>Furniture</h2> <Furniture />
      </div>
    </div>
  );
};

export default HomeDecoration;
