import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MShirts = ({ addToCart }) => {
  const [shirts, setShirts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Shirts");
        }
        return response.json();
      })
      .then((data) => setShirts(data.products)) // Updated to use 'data.products'
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
        <div className="mshirts-container">
          {Array.isArray(shirts) &&
            shirts.map((shirt) => (
              <div
                className="product-card"
                key={shirt.id}
                onClick={() => handleCardClick(shirt.id)}
              >
                <img
                  src={shirt.thumbnail}
                  alt={`Thumbnail for ${shirt.title}`}
                />
                <h3>{shirt.title}</h3>
                <p>Price: ${shirt.price}</p>
                <button onClick={(event) => handleAddToCart(event, shirt)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MShirts;
