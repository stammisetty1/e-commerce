import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Furniture = ({ addToCart }) => {
  const [furnitures, setFurniture] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Furniture");
        }
        return response.json();
      })
      .then((data) => setFurniture(data.products)) // Updated to use 'data.products'
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
        <div className="furniture-container">
          {Array.isArray(furnitures) &&
            furnitures.map((furniture) => (
              <div
                className="product-card"
                key={furniture.id}
                onClick={() => handleCardClick(furniture.id)}
              >
                <img
                  src={furniture.thumbnail}
                  alt={`Thumbnail for ${furniture.title}`}
                />
                <h3>{furniture.title}</h3>
                <p>Price: ${furniture.price}</p>
                <button
                  className="add-to-cart"
                  onClick={(event) => handleAddToCart(event, furniture)}
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

export default Furniture;
