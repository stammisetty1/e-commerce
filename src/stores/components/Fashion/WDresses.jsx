import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const WDresses = () => {
  const [wdresses, setDresses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Womens dresses");
        }
        return response.json();
      })
      .then((data) => setDresses(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="dress-container">
         { Array.isArray(wdresses) && wdresses.map((wdress) => (
                <div className="card" key={wdress.id} onClick={() => handleCardClick(wdress.id)}>
                <img src={wdress.thumbnail} alt={`Thumbnail for ${wdress.title}`} />
                    <div className="card-info">
                        <h3>{wdress.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default WDresses;
