import React, { useState } from "react";
import Fragrances from "./PersonalCare/Fragrances";
import Skincare from "./PersonalCare/Skincare";

const Fashion = () => {
  return (
    <div>
      <h2>Personal Care</h2>
      <div className="fragrances-personalcare">
        <h2>Fragrances</h2> <Fragrances />
      </div>
      <div className="skincare-personalcare">
        <h2>Skincare</h2> <Skincare />
      </div>
    </div>
  );
};

export default Fashion;
