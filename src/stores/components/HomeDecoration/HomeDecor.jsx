import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const HomeDecor = () => {
  const [decors, setDecor] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/home-decoration")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Decoration");
        }
        return response.json();
      })
      .then((data) => setDecor(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="Decoration-container">
         { Array.isArray(decors) && decors.map((decor) => (
                <div className="card" key={decor.id} onClick={() => handleCardClick(decor.id)}>
                <img src={decor.thumbnail} alt={`Thumbnail for ${decor.title}`} />
                    <div className="card-info">
                        <h3>{decor.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default HomeDecor;
