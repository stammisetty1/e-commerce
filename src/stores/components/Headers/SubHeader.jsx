import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SubHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = (category) => {
    console.log(category);
    navigate(`/products?view=${category}`);
  };

  return (
    <div className="subHeader">
      <div className="leftGroup">
        <button
          onMouseEnter={() => setShowModal(true)}
          onMouseOut={(e) => {
            if (!e.relatedTarget || !e.relatedTarget.closest(".modal")) {
              setShowModal(false);
            }
          }}
        >
          Categories
        </button>
        {showModal && <div className="categories-container"></div>}
      </div>
      <div className="rightGroup">
        <button onClick={() => handleClick("electronics")}>Electronics</button>
        <button onClick={() => handleClick("fashion")}>Fashion</button>
        <button onClick={() => handleClick("personalcare")}>Personal Care</button>
        <button onClick={() => handleClick("homedecoration")}>Home Decoration</button>
        <button onClick={() => handleClick("accessories")}>Accessories</button>
        <button onClick={() => handleClick("automotives")}>Automotives</button>

      </div>
    </div>
  );
};

export default SubHeader;
