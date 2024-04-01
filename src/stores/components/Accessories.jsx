import React, { useState } from "react";
import MensWatches from "./Accessories/MensWatches";
import WomensWatches from "./Accessories/WomensWatches";



const Accessories = () => {
  return (
    <div>
      <h2>Accessories</h2>
      <WomensWatches />
      <MensWatches />
    </div>
  );
};

export default Accessories;
