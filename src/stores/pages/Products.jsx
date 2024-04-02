import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Electronics from "../components/Electronics";
import Fashion from "../components/Fashion";
import HomeDecoration from "../components/HomeDecoration";
import Accessories from "../components/Accessories";
import PersonalCare from "../components/PersonalCare";
import Automotives from "../components/Automotives";
import Footer from "../components/Headers/Footer";

const Products = ({ item, addToCart }) => {
  const location = useLocation();
  const [currentView, setCurrentView] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const view = urlParams.get("view");
    if (view) {
      setCurrentView(view);
    } else {
      setCurrentView(null);
    }
  }, [location.search]);

  return (
    <div>
      <Header />
      <SubHeader />
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
            <Accessories />
          </div>
        )}
        {currentView === "automotives" && (
          <div className="products-list">
            <Automotives />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
