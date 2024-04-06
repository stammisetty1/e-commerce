import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WJewellery = ({ addToCart }) => {
  const [jews, setJew] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-jewellery")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Womens Jewellery");
        }
        return response.json();
      })
      .then((data) => setJew(data.products)) // Updated to use 'data.products'
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
        <div className="jew-container">
          {Array.isArray(jews) &&
            jews.map((jew) => (
              <div
                className="product-card"
                key={jew.id}
                onClick={() => handleCardClick(jew.id)}
              >
                <img src={jew.thumbnail} alt={`Thumbnail for ${jew.title}`} />
                <h3>{jew.title}</h3>
                <p>Price: ${jew.price}</p>
                <button
                  className="add-to-cart"
                  onClick={(event) => handleAddToCart(event, jew)}
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

export default WJewellery;
