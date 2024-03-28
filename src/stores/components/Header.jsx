import React from "react";

const Header = () => {
  return (
    <div class="navSection">
  <div class="title">
    <h2 class="logo">E-Commerce</h2>
  </div>
  <div id="search">
    <select id="searchOption">
      <option value="all">All</option>
      <option value="name">Name</option>
      <option value="category">Category</option>
    </select>
    <input type="text" placeholder="Search..." />
    <button type="submit">
        <i class="fa fa-search"></i>
    </button>
</div>
  <div class="user">
  <div class="cart">Cart</div>
    <div class="userDetail">SignIn/SignUp</div>
  </div>
</div>
  );
};

export default Header;
