import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import like from "../Assets/Like.png";
import cart from "../Assets/Cart.png";
import profile from "../Assets/Profile.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
import searchIcon from "../Assets/Vector.svg";
import hamburger from "../Assets/hamburger-menu.png";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();

  const toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link style={{textDecoration : 'none'}} to = '/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>

      <img className="toggle-menu" onClick={toggle} src={hamburger} alt="" />
      <ul ref={menuRef} className="nav-menu">

          <li onClick={ () => { setmenu("home") }}>
            <Link style={{textDecoration : 'none'}} to = '/'> Home </Link> {menu === "home"}
          </li>

          <li onClick={() => { setmenu("categories") }}>
            <Link style={{textDecoration : 'none'}} to = '/category'> Categories </Link> {menu === "categories"}
          </li>

          <li onClick={() => { setmenu("orders") }}>
            <Link style={{textDecoration : 'none'}} to = '/orders'> Orders </Link> {menu === "orders"}
            <div className="nav-order-count">1</div>
          </li>
      </ul>

      <div className="icons">
        <div className="nav-login-cart">
          <Link style={{textDecoration : 'none'}} to='/like'>
            <img className="like" src={like} alt="Like" />
          </Link>

          <Link style={{textDecoration : 'none'}} to='/cart'>
            <img className="cart" src={cart} alt="Cart" />
          </Link>

          <div className="nav-cart-count">0</div>

          <Link style={{textDecoration : 'none'}} to='/login'>
            <img className="profile" src={profile} alt="Profile" />
          </Link>
        </div>
      </div>
      <div className="hamburger-menu">
          
      </div>
    </div>
  )
};

export default Navbar;