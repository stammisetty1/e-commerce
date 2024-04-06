import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      {!isInCart && (
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
