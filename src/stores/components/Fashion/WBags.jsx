import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WBags = ({ addToCart }) => {
  const [bags, setBags] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Womens Bags");
        }
        return response.json();
      })
      .then((data) => setBags(data.products)) // Updated to use 'data.products'
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
        <div className="wbags-container">
          {Array.isArray(bags) &&
            bags.map((bag) => (
              <div
                className="product-card"
                key={bag.id}
                onClick={() => handleCardClick(bag.id)}
              >
                <img src={bag.thumbnail} alt={`Thumbnail for ${bag.title}`} />
                <h3>{bag.title}</h3>
                <p>Price: ${bag.price}</p>
                <button onClick={(event) => handleAddToCart(event, bag)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default WBags;
