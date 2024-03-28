import React, { useState, useEffect } from "react";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/Laptops")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Smartphones");
        }
        return response.json();
      })
      .then((data) => setLaptops(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="categories-container-laptops">
         { Array.isArray(laptops) && laptops.map((laptop) => (
                <div className="card" key={laptop.id}>
                <img src={laptop.thumbnail} alt={`Thumbnail for ${laptop.title}`} />
                    <div className="card-info">
                        <h3>{laptop.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default Laptops;
