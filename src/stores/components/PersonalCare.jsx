import React, { useState } from "react";
import Fragrances from "./PersonalCare/Fragrances";
import Skincare from "./PersonalCare/Skincare";

const PersonalCare = ({ addToCart }) => {
  return (
    <div>
      <div className="fragrances-personalcare">
        <h2>Fragrances</h2> <Fragrances addToCart={addToCart} />
      </div>
      <div className="skincare-personalcare">
        <h2>Skincare</h2> <Skincare addToCart={addToCart} />
      </div>
    </div>
  );
};

export default PersonalCare;
