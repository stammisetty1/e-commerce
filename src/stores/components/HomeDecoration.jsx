import React from "react";
import Lighting from "./HomeDecoration/Lighting";
import HomeDecor from "./HomeDecoration/HomeDecor";
import Furniture from "./HomeDecoration/Furniture"
const HomeDecoration = () => {
  return (
    <div>
      <h2>Home Decoration</h2>
      <HomeDecor />
      <Lighting />
      <Furniture />
    </div>
  );
};

export default HomeDecoration;
