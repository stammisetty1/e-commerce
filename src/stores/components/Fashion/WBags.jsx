import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const WBags = () => {
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

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="bags-container">
         { Array.isArray(bags) && bags.map((bag) => (
                <div className="card" key={bag.id} onClick={() => handleCardClick(bag.id)}>
                <img src={bag.thumbnail} alt={`Thumbnail for ${bag.title}`} />
                    <div className="card-info">
                        <h3>{bag.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default WBags;