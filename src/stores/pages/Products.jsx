import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import MensWatches from "../components/Accessories/MensWatches";
import WomensWatches from "../components/Accessories/WomensWatches";
import Automotive from "../components/Automotives/Automotive";
import Motorcycle from "../components/Automotives/Motorcycle";
import Electronics from "../components/Electronics";
import Fashion from "../components/Fashion";
import HomeDecoration from "../components/HomeDecoration";
import PersonalCare from "../components/PersonalCare"

const Products = () => {
  const location = useLocation();
  const [currentView, setCurrentView] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const view = urlParams.get("view");
    setCurrentView(view);
  }, [location.search]);

  return (
    <div>
      <Header />
      <SubHeader />
      console.log("Inside products");
      <div className="products-body">
      {currentView === "electronics" && (
        <div className="products-list">
          <Electronics />
        </div>
      )}
      {currentView === "fashion" && (
        <div className="products-list">
          <Fashion />
        </div>
      )}
      {currentView === "homedecoration" && (
        <div className="products-list">
          <HomeDecoration />
        </div>
      )}
      {currentView === "personalcare" && (
        <div className="products-list">
          <PersonalCare />
        </div>
      )}
      {currentView === "accessories" && (
        <div className="products-list">
          <MensWatches />
          <WomensWatches />
        </div>
      )}
      {currentView === "automotives" && (
        <div className="products-list">
          <Automotive />
          <Motorcycle />
        </div>
      )}
    </div>
    </div>
  );
};

export default Products;
