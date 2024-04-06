import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaChevronDown,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa"; // Import the search icon from react-icons/fa
import logo from "../../../imgs/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOption, setSearchOption] = useState("all");
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const categoriesMenuRef = useRef(null);

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

  const handleTitleClick = () => {
    navigate("/");
  };

  const toggleCategoryMenu = () => {
    setShowCategoryMenu(!showCategoryMenu);
  };

  const handleOutsideClick = (event) => {
    console.log(categoriesMenuRef.current);
    if (
      categoriesMenuRef.current &&
      !categoriesMenuRef.current.contains(event.target)
    ) {
      setShowCategoryMenu(false);
    }
  };

  // Effect to add event listener when component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleUserClick = () => {
    window.alert("Coming soon...");
  };

  return (
    <div className="navSection">
      <div className="title" onClick={handleTitleClick}>
        <img src={logo} alt="logo" />
      </div>
      <div className="search-div">
        <div className="search">
          <form onSubmit={handleSearch}>
            <div className="search-bar-header">
              <div className="search-category">
                <div
                  className="search-category-all"
                  onClick={() => {
                    toggleCategoryMenu();
                  }}
                >
                  <div className="search-category-current">
                    {searchOption === "all"
                      ? "All Categories"
                      : searchOption.charAt(0).toUpperCase() +
                        searchOption.slice(1)}
                  </div>
                  <div className="search-drop-down">
                    <FaChevronDown />
                  </div>
                </div>
                <input type="hidden" name="category" value={searchOption} />
              </div>
              <input
                type="text"
                placeholder="What are you looking for?"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-icon">
                <button type="submit" className="searchbox-search">
                  <FaSearch style={{ color: "#fff", fontSize: "20px" }} />
                </button>
              </div>
            </div>
          </form>
          {showCategoryMenu && (
            <div className="search-categories" ref={categoriesMenuRef}>
              <div className="search-in-categories">
                <h4>Search in Categories</h4>
              </div>
              <div className="categories-menu">
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("all");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="all">All Categories</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("smartphones");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="smartphones">Smartphones</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("laptops");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="laptops">Laptops</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("fragrances");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="fragrances">Fragrances</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("skincare");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="skincare">Skincare</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("groceries");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="groceries">Groceries</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("home-decoration");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="home-decoration">HomeDecoration</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("furniture");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="furniture">Furniture</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("tops");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="tops">Tops</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("womens-dresses");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="womens-dresses">Women's Dresses</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("womens-bags");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="womens-bags">Women's Bags</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("womens-jewellery");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="womens-jewellery">Women's Jewellery</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("sunglasses");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="sunglasses">Sun Glasses</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("lighting");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="lighting">Lighting</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("automotive");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="automotive">Automotive</option>
                </div>
                <div
                  className="categories-menu-items"
                  onClick={() => {
                    setSearchOption("motorcycle");
                    toggleCategoryMenu();
                  }}
                >
                  <option value="motorcycle">Motorcycle</option>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* </form> */}
      <div className="user">
        <div className="cart" onClick={handleCartClick}>
          <span>
            <FaShoppingCart />
          </span>
          Cart
        </div>
        <div className="userDetail" onClick={handleUserClick}>
          <span>
            <FaUser />
          </span>
          SignIn/SignUp
        </div>
      </div>
    </div>
  );
};

export default Header;
