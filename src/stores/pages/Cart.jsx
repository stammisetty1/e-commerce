import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Headers/Header';
import SubHeader from '../components/Headers/SubHeader';

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
    navigate('/checkout');
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * quantities[item.id],
    0
  );

  return (
    <div>
      <Header />
      <SubHeader />
      <h1>Cart</h1>
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
                  onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                  disabled={quantities[item.id] <= 1}
                >
                  -
                </button>
                <span>{quantities[item.id]}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
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
    </div>
  );
};

export default Cart;