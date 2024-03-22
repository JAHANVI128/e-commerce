import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import like from "../Assets/Like.png";
import cart from "../Assets/Cart.png";
import profile from "../Assets/Profile.png";
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <div className="nav-logo">
      <Link style={{textDecoration : 'none'}} to = '/'>
        <img src={logo} alt="Logo" />
      </Link>
      </div>
      <ul className="nav-menu">
        <SearchBar />

        <li onClick={ () => { setmenu("home") }}> 
          <Link style={{textDecoration : 'none'}} to = '/'> Home </Link> {menu === "home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("categories") }}>
          <Link style={{textDecoration : 'none'}} to = '/category'> Categories </Link> {menu === "categories" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("orders") }}>
          <Link style={{textDecoration : 'none'}} to = '/orders'> Orders </Link> {menu === "orders" ? <hr /> : <></>}
          <div className="nav-order-count">1</div>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration : 'none'}}>
          <img className="like" src={like} alt="Like" />
        </Link>

        <Link style={{textDecoration : 'none'}}>
          <img className="cart" src={cart} alt="Cart" />
        </Link>

        <div className="nav-cart-count">0</div>

        <Link style={{textDecoration : 'none'}}>
          <img className="profile" src={profile} alt="Profile" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;