import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Sunglasses = () => {
  const [glasses, setGlasses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Sunglasses");
        }
        return response.json();
      })
      .then((data) => setGlasses(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="glasses-container">
         { Array.isArray(glasses) && glasses.map((glass) => (
                <div className="card" key={glass.id} onClick={() => handleCardClick(glass.id)}>
                <img src={glass.thumbnail} alt={`Thumbnail for ${glass.title}`} />
                    <div className="card-info">
                        <h3>{glass.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default Sunglasses;
