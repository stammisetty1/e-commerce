import React, { useState } from "react";
import MensWatches from "./Accessories/MensWatches";
import WomensWatches from "./Accessories/WomensWatches";

const Accessories = () => {
  return (
    <div>
      <h2>Accessories</h2>
      <div className="wwatches-accessories">
        <h2>Women's Watches</h2>
        <WomensWatches />
      </div>
      <div className="mwatches-accessories">
        <h2>Men's Watches</h2>
        <MensWatches />
      </div>
    </div>
  );
};

export default Accessories;
