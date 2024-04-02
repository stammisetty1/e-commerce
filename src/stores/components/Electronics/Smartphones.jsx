import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Smartphones = () => {
  const [smartphones, setSmartPhones] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Smartphones");
        }
        return response.json();
      })
      .then((data) => setSmartPhones(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="smartphones-container">
          {Array.isArray(smartphones) &&
            smartphones.map((smartphone) => (
              <div
                className="product-card"
                key={smartphone.id}
                onClick={() => handleCardClick(smartphone.id)}
              >
                <img src={smartphone.thumbnail} alt={smartphone.title} />
                <h3>{smartphone.title}</h3>
                <p>Price: ${smartphone.price}</p>
                <button>Add to Cart</button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Smartphones;
