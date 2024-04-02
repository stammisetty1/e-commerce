import React, { useState } from "react";
import Automotive from "./Automotives/Automotive";
import Motorcycle from "./Automotives/Motorcycle";

const Automotives = () => {
  return (
    <div>
      <h2>Automotives</h2>
      <div className="motorcycle-automotives">
        <h2>Motorcycles</h2>
        <Motorcycle />
      </div>
      <div className="automotive-automotives">
        <h1>Automotive</h1>
        <Automotive />
      </div>
    </div>
  );
};

export default Automotives;
