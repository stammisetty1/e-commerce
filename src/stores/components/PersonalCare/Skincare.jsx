import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Skincare = () => {
  const [skincares, setSkincare] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/skincare")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Fragrances");
        }
        return response.json();
      })
      .then((data) => setSkincare(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="skincare-container">
         { Array.isArray(skincares) && skincares.map((skincare) => (
                <div className="card" key={skincare.id} onClick={() => handleCardClick(skincare.id)}>
                <img src={skincare.thumbnail} alt={`Thumbnail for ${skincare.title}`} />
                    <div className="card-info">
                        <h3>{skincare.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default Skincare;