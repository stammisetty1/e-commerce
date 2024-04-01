import React, { useState } from "react";
import Automotive from "./Automotives/Automotive";
import Motorcycle from "./Automotives/Motorcycle";



const Automotives = () => {
  return (
    <div>
      <h2>Automotives</h2>
      <Automotive />
      <Motorcycle />
    </div>
  );
};

export default Automotives;
