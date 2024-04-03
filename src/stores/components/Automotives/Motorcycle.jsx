import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Motorcycle = ({ addToCart }) => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/motorcycle")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch MotorCycle");
        }
        return response.json();
      })
      .then((data) => setMotorcycles(data.products)) // Updated to use 'data.products'
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
        <div className="motorcycles-container">
          {Array.isArray(motorcycles) &&
            motorcycles.map((motorcycle) => (
              <div
                className="product-card"
                key={motorcycle.id}
                onClick={() => handleCardClick(motorcycle.id)}
              >
                <img
                  src={motorcycle.thumbnail}
                  alt={`Thumbnail for ${motorcycle.title}`}
                />
                <h3>{motorcycle.title}</h3>
                <p>Price: ${motorcycle.price}</p>
                <button onClick={(event) => handleAddToCart(event, motorcycle)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Motorcycle;
