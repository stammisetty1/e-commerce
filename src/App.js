import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./stores/pages/Home.jsx";
import Products from "../src/stores/pages/Products.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import ProductDetails from "./stores/pages/ProductDetails.jsx";
import SearchResults from "./stores/pages/SearchResults.jsx";
import Cart from "./stores/pages/Cart.jsx";
import "../src/stores/pages/Cart.css";
import MiniCart from "./stores/pages/MiniCart.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [showMiniCart, setShowMiniCart] = useState(false); // State to control MiniCart visibility
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      setShowMiniCart(true);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
      setShowMiniCart(true);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  useEffect(() => {
    console.log(showMiniCart);
  }, [showMiniCart]);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity === 0) {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const closeMiniCart = () => {
    setShowMiniCart(false);
  };

  const goToCart = () => {
    console.log("Navigte");
    return <Navigate to="/cart" />;
  };

  return (
    <Router>
      <div className="app-home">
        <Routes>
          <Route
            path="/cart"
            element={
              <>
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  updateCartQuantity={updateCartQuantity}
                />
              </>
            }
          />
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                addToCart={addToCart}
                setShowMiniCart={setShowMiniCart}
              />
            }
          />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        {showMiniCart && (
          <MiniCart
            isVisible={showMiniCart}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            goToCart={goToCart}
            closeMiniCart={closeMiniCart}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
