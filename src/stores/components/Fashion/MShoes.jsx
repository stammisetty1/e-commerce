import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const MShoes = () => {
  const [shoes, setShoes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };


  // Fetch products from the dummy API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Shoes");
        }
        return response.json();
      })
      .then((data) => setShoes(data.products)) // Updated to use 'data.products'
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="shoes-container">
         { Array.isArray(shoes) && shoes.map((shoe) => (
                <div className="card" key={shoe.id} onClick={() => handleCardClick(shoe.id)}>
                <img src={shoe.thumbnail} alt={`Thumbnail for ${shoe.title}`} />
                    <div className="card-info">
                        <h3>{shoe.title}</h3>
                    </div>
                </div>
            ))}
        </div>
)}
    </div>
  );
};

export default MShoes;
