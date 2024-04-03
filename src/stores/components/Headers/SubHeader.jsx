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
      <div className="subHeaderInner">
        <a className="subHeaderItem-a" href="/products?view=electronics">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 500, color: "rgb(29, 29, 29)" }}>
              Electronics
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=fashion">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Fashion
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=personalcare">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Personal Care
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=homeandliving">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Home And Living
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=accessories">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Accessories
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=automotives">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Automotives
            </span>
          </div>
        </a>
        <a className="subHeaderItem-a" href="/products?view=footwear">
          <div className="subHeaderItem">
            <span style={{ fontWeight: 300, color: "rgb(29, 29, 29)" }}>
              Footwear
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SubHeader;
