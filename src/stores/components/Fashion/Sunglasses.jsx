import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Sunglasses = ({ addToCart }) => {
  const [glasses, setGlasses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Sunglasses");
        }
        return response.json();
      })
      .then((data) => setGlasses(data.products)) // Updated to use 'data.products'
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
        <div className="glasses-container">
          {Array.isArray(glasses) &&
            glasses.map((glass) => (
              <div
                className="product-card"
                key={glass.id}
                onClick={() => handleCardClick(glass.id)}
              >
                <img
                  src={glass.thumbnail}
                  alt={`Thumbnail for ${glass.title}`}
                />
                <h3>{glass.title}</h3>
                <p>Price: ${glass.price}</p>
                <button
                  className="add-to-cart"
                  onClick={(event) => handleAddToCart(event, glass)}
                >
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Sunglasses;
