import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import like from "../Assets/Like.png";
import cart from "../Assets/Cart.png";
import profile from "../Assets/Profile.png";
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <SearchBar/>
        <li>Home</li>
        <li>Categories</li>
        <li>
          Orders
          <div className="nav-order-count">1</div>
        </li>
      </ul>
      <div className="nav-login-cart">
        <img className="like" src={like} alt="Like" />
        <img className="cart" src={cart} alt="Cart" />
        <div className="nav-cart-count">0</div>
        <img className="profile" src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
