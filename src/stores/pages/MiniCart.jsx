import React, { useEffect } from "react";
import emptycart from "../../imgs/emptycart.png";
import { useNavigate } from "react-router-dom";

const MiniCart = ({ isVisible, cartItems, removeFromCart, closeMiniCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const goToCart = () => {
    closeMiniCart(); // Close the mini cart before navigating
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className={`mini-cart ${isVisible ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={closeMiniCart}>
          &#10005; {/* Cross symbol */}
        </button>
        <h2
          style={{
            textDecoration: "underline",
            color: "#475d77",
          }}
        >
          Mini Cart
        </h2>
        <div className="cart-content">
          {cartItems.length > 0 ? (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="cart-item-info">
                      <h3>{item.title}</h3>
                      <p>Price: ${item.price}</p>
                      <button
                        className="remove-button"
                        onClick={(event) => {
                          event.stopPropagation();
                          removeFromCart(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-price">
                <span>Total: ${totalPrice.toFixed(2)}</span>
                <div className="buttons">
                  <button className="go-to-cart-button" onClick={goToCart}>
                    Go to Cart
                  </button>
                  <button
                    className="continue-shopping-button"
                    onClick={closeMiniCart}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <img src={emptycart} alt="Empty Cart" />
              <p>Your cart is empty. Add items to your cart to get started.</p>
              <button
                className="continue-shopping-button"
                onClick={closeMiniCart}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
