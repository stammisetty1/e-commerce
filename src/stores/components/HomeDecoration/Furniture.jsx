import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Furniture = () => {
  const [furnitures, setFurniture] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Furniture");
        }
        return response.json();
      })
      .then((data) => setFurniture(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="furniture-container">
         { Array.isArray(furnitures) && furnitures.map((furniture) => (
                <div className="card" key={furniture.id} onClick={() => handleCardClick(furniture.id)}>
                <img src={furniture.thumbnail} alt={`Thumbnail for ${furniture.title}`} />
                    <div className="card-info">
                        <h3>{furniture.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default Furniture;
