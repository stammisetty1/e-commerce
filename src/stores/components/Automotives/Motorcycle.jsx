import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Motorcycle = () => {
  const [motorcycles, setMotorcycles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/motorcycle")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch MotorCycle");
        }
        return response.json();
      })
      .then((data) => setMotorcycles(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="motorcycles-container">
         { Array.isArray(motorcycles) && motorcycles.map((motorcycle) => (
                <div className="card" key={motorcycle.id} onClick={() => handleCardClick(motorcycle.id)}>
                <img src={motorcycle.thumbnail} alt={`Thumbnail for ${motorcycle.title}`} />
                    <div className="card-info">
                        <h3>{motorcycle.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default Motorcycle;
