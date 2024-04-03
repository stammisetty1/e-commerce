import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tops = ({ addToCart }) => {
  const [tops, setTops] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/tops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Tops");
        }
        return response.json();
      })
      .then((data) => setTops(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  const handleAddToCart = (event, item) => {
    addToCart(item);
    event.stopPropagation();
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="tops-container">
          {Array.isArray(tops) &&
            tops.map((top) => (
              <div
                className="product-card"
                key={top.id}
                onClick={() => handleCardClick(top.id)}
              >
                <img src={top.thumbnail} alt={`Thumbnail for ${top.title}`} />
                <h3>{top.title}</h3>
                <p>Price: ${tops.price}</p>
                <button className="add-to-cart" onClick={(event) => handleAddToCart(event, tops)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Tops;
