import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Electronics from "../components/Electronics";
import Fashion from "../components/Fashion";
import HomeAndLiving from "../components/HomeAndLiving";
import Accessories from "../components/Accessories";
import PersonalCare from "../components/PersonalCare";
import Automotives from "../components/Automotives";
import Footer from "../components/Headers/Footer";
import Footwear from "../components/Footwear";

const Products = ({ addToCart }) => {
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
            <Electronics addToCart={addToCart} />
          </div>
        )}
        {currentView === "fashion" && (
          <div className="products-list">
            <Fashion addToCart={addToCart} />
          </div>
        )}
        {currentView === "homeandliving" && (
          <div className="products-list">
            <HomeAndLiving addToCart={addToCart} />
          </div>
        )}
        {currentView === "personalcare" && (
          <div className="products-list">
            <PersonalCare addToCart={addToCart} />
          </div>
        )}
        {currentView === "accessories" && (
          <div className="products-list">
            <Accessories addToCart={addToCart} />
          </div>
        )}
        {currentView === "footwear" && (
          <div className="products-list">
            <Footwear addToCart={addToCart} />
          </div>
        )}
        {currentView === "automotives" && (
          <div className="products-list">
            <Automotives addToCart={addToCart} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
