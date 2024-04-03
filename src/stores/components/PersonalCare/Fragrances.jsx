import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fragrances = ({ addToCart }) => {
  const [fragrances, setFragrances] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/Fragrances")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Fragrances");
        }
        return response.json();
      })
      .then((data) => setFragrances(data.products)) // Updated to use 'data.products'
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
        <div className="fragrence-container">
          {Array.isArray(fragrances) &&
            fragrances.map((fragrance) => (
              <div
                className="product-card"
                key={fragrance.id}
                onClick={() => handleCardClick(fragrance.id)}
              >
                <img
                  src={fragrance.thumbnail}
                  alt={`Thumbnail for ${fragrance.title}`}
                />
                <h3>{fragrance.title}</h3>
                <p>Price: ${fragrance.price}</p>
                <button onClick={(event) => handleAddToCart(event, fragrance)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Fragrances;
