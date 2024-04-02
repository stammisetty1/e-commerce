import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Automotive = () => {
  const [automotives, setAutomotives] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/automotive")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Automotives");
        }
        return response.json();
      })
      .then((data) => setAutomotives(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="automotives-container">
          {Array.isArray(automotives) &&
            automotives.map((automotive) => (
              <div
                className="product-card"
                key={automotive.id}
                onClick={() => handleCardClick(automotive.id)}
              >
                <img
                  src={automotive.thumbnail}
                  alt={`Thumbnail for ${automotive.title}`}
                />
                <h3>{automotive.title}</h3>
                <p>Price: ${automotive.price}</p>
                <button>Add to Cart</button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Automotive;
