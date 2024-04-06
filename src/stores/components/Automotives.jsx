import React, { useState } from "react";
import Automotive from "./Automotives/Automotive";
import Motorcycle from "./Automotives/Motorcycle";

const Automotives = ({ addToCart }) => {
  return (
    <div>
      <div className="motorcycle-automotives">
        <h2>Motorcycles</h2>
        <Motorcycle addToCart={addToCart} />
      </div>
      <div className="automotive-automotives">
        <h2>Automotive</h2>
        <Automotive addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Automotives;
