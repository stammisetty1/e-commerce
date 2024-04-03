import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    let url = "/search";
    if (searchOption === "all") {
      url += `?query=${searchQuery}`;
    } else {
      url += `?category=${searchOption}&value=${searchQuery}`;
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
    navigate("/cart");
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
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">HomeDecoration</option>
            <option value="furniture">Furniture</option>
            <option value="tops">Tops</option>
            <option value="womens-dresses">Women's Dresses</option>
            <option value="womens-bags">Women's Bags</option>
            <option value="womens-jewellery">Women's Jewellery</option>
            <option value="sunglasses">Sun Glasses</option>
            <option value="lighting">Lighting</option>
            <option value="automotive">Automotive</option>
            <option value="motorcycle">Motorcycle</option>
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
        <div className="cart" onClick={handleCartClick}>
          Cart
        </div>
        <div className="userDetail">SignIn/SignUp</div>
      </div>
    </div>
  );
};

export default Header;
