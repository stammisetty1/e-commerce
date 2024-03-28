import React, { useState, useEffect } from "react";

const Smartphones = () => {
  const [smartphones, setSmartPhones] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Smartphones");
        }
        return response.json();
      })
      .then((data) => setSmartPhones(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="categories-container-smartphones">
         { Array.isArray(smartphones) && smartphones.map((smartphone) => (
                <div className="card" key={smartphone.id}>
                <img src={smartphone.thumbnail} alt={`Thumbnail for ${smartphone.title}`} />
                    <div className="card-info">
                        <h3>{smartphone.title}</h3>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Smartphones;
