import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MShoes = ({ addToCart }) => {
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

  const handleAddToCart = (event, item) => {
    addToCart(item);
    event.stopPropagation();
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="mshoes-container">
          {Array.isArray(shoes) &&
            shoes.map((shoe) => (
              <div
                className="product-card"
                key={shoe.id}
                onClick={() => handleCardClick(shoe.id)}
              >
                <img src={shoe.thumbnail} alt={`Thumbnail for ${shoe.title}`} />
                <h3>{shoe.title}</h3>
                <p>Price: ${shoe.price}</p>
                <button className="add-to-cart" onClick={(event) => handleAddToCart(event, shoe)}>
                  Add to Cart
                </button>{" "}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MShoes;
