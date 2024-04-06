import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WomensWatches = ({ addToCart }) => {
  const [wwatches, setWWatches] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-watches")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Men's Watches");
        }
        return response.json();
      })
      .then((data) => setWWatches(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (event, item) => {
    addToCart(item);
    event.stopPropagation();
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="womens-watches-container">
          {Array.isArray(wwatches) &&
            wwatches.map((wwatch) => (
              <div
                className="product-card"
                key={wwatch.id}
                onClick={() => handleCardClick(wwatch.id)}
              >
                <img
                  src={wwatch.thumbnail}
                  alt={`Thumbnail for ${wwatch.title}`}
                />
                <h3>{wwatch.title}</h3>
                <p>Price: ${wwatch.price}</p>
                <button
                  className="add-to-cart"
                  onClick={(event) => handleAddToCart(event, wwatch)}
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

export default WomensWatches;
