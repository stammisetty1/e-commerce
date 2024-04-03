import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Lighting = ({ addToCart }) => {
  const [lightings, setLighting] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/lighting")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Lighting");
        }
        return response.json();
      })
      .then((data) => setLighting(data.products)) // Updated to use 'data.products'
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
        <div className="lighting-container">
          {Array.isArray(lightings) &&
            lightings.map((lighting) => (
              <div
                className="product-card"
                key={lighting.id}
                onClick={() => handleCardClick(lighting.id)}
              >
                <img
                  src={lighting.thumbnail}
                  alt={`Thumbnail for ${lighting.title}`}
                />
                <h3>{lighting.title}</h3>
                <p>Price: ${lighting.price}</p>
                <button onClick={(event) => handleAddToCart(event, lighting)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Lighting;
