import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Groceries = ({ addToCart }) => {
  const [groceries, setGroceries] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Furniture");
        }
        return response.json();
      })
      .then((data) => setGroceries(data.products)) // Updated to use 'data.products'
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
        <div className="groceries-container">
          {Array.isArray(groceries) &&
            groceries.map((grocery) => (
              <div
                className="product-card"
                key={grocery.id}
                onClick={() => handleCardClick(grocery.id)}
              >
                <img
                  src={grocery.thumbnail}
                  alt={`Thumbnail for ${grocery.title}`}
                />
                <h3>{grocery.title}</h3>
                <p>Price: ${grocery.price}</p>
                <button onClick={(event) => handleAddToCart(event, grocery)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Groceries;