import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const MensWatches = () => {
  const [mwatches, setMWatches] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Men's Watches");
        }
        return response.json();
      })
      .then((data) => setMWatches(data.products)) // Updated to use 'data.products'
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
        <div className="mens-watches-container">
         { Array.isArray(mwatches) && mwatches.map((mwatch) => (
                <div className="card" key={mwatch.id} onClick={() => handleCardClick(mwatch.id)}>
                <img src={mwatch.thumbnail} alt={`Thumbnail for ${mwatch.title}`} />
                    <div className="card-info">
                        <h3>{mwatch.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MensWatches;
