import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/Laptops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Smartphones");
        }
        return response.json();
      })
      .then((data) => setLaptops(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="laptops-container">
          {Array.isArray(laptops) &&
            laptops.map((laptop) => (
              <div
                className="product-card"
                key={laptop.id}
                onClick={() => handleCardClick(laptop.id)}
              >
                  <img src={laptop.thumbnail} alt={laptop.title} />
                  <h3>{laptop.title}</h3>
                  <p>Price: ${laptop.price}</p>
                  <button>Add to Cart</button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;
