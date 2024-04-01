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
      <MShirts />
      <Tops />
      <Sunglasses />
      <MShoes />
      <WBags />
      <WDresses />
      <WJewellery />
      <WShoes />
    </div>
  );
};

export default Fashion;
