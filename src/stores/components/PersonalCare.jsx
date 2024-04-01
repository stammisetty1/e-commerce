import React, { useState } from "react";
import Fragrances from "./PersonalCare/Fragrances";
import Skincare from "./PersonalCare/Skincare";



const Fashion = () => {
  return (
    <div>
      <h2>Personal Care</h2>
      <Fragrances />
      <Skincare />
    </div>
  );
};

export default Fashion;
