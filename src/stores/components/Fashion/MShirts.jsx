import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const MShirts = () => {
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

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="shirts-container">
         { Array.isArray(shirts) && shirts.map((shirt) => (
                <div className="card" key={shirt.id} onClick={() => handleCardClick(shirt.id)}>
                <img src={shirt.thumbnail} alt={`Thumbnail for ${shirt.title}`} />
                    <div className="card-info">
                        <h3>{shirt.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default MShirts;
