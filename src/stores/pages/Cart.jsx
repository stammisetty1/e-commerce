import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Headers/Header";
import SubHeader from "../components/Headers/SubHeader";
import Footer from "../components/Headers/Footer";
import emptycart from "../../imgs/emptycart.png";

const Cart = ({ cartItems, removeFromCart, updateCartQuantity }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Initialize the quantities state from the cartItems
    const initialQuantities = cartItems.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.quantity }),
      {}
    );
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (id, quantity) => {
    setQuantities({ ...quantities, [id]: quantity });
    updateCartQuantity(id, quantity);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    window.alert("Coming Soon...");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <img src={emptycart} alt="emptycart" />
            <h1>Your cart is empty.</h1>
            <div>
              <button className="go-shopping" onClick={() => navigate("/")}>
                Go Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, quantities[item.id] - 1)
                        }
                        disabled={quantities[item.id] <= 1}
                      >
                        -
                      </button>
                      <span>{quantities[item.id]}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, quantities[item.id] + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
            <div className="cart-actions">
              <button className="checkout-button" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
