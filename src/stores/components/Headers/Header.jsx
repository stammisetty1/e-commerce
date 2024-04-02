import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    let url = "/search?query=";
    if (searchOption !== "all") {
      url += `${searchOption}:${searchQuery}`;
    } else {
      url += searchQuery;
    }
    // Redirect to the search results page with the constructed URL
    navigate(url);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="navSection">
      <div className="title">
        <h2 className="logo">E-Commerce</h2>
      </div>
      <div id="search">
        <form onSubmit={handleSearch} className="search-form">
          <select
            id="searchOption"
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" onSubmit={handleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user">
        <div className="cart" onClick={handleCartClick}>Cart</div>
        <div className="userDetail">SignIn/SignUp</div>
      </div>
    </div>
  );
};

export default Header;
