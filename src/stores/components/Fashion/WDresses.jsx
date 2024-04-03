import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WDresses = ({ addToCart }) => {
  const [wdresses, setDresses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Womens dresses");
        }
        return response.json();
      })
      .then((data) => setDresses(data.products)) // Updated to use 'data.products'
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
        <div className="wdresses-container">
          {Array.isArray(wdresses) &&
            wdresses.map((wdress) => (
              <div
                className="product-card"
                key={wdress.id}
                onClick={() => handleCardClick(wdress.id)}
              >
                <img
                  src={wdress.thumbnail}
                  alt={`Thumbnail for ${wdress.title}`}
                />
                <h3>{wdress.title}</h3>
                <p>Price: ${wdress.price}</p>
                <button onClick={(event) => handleAddToCart(event, wdress)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WDresses;
