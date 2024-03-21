import React from "react";
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
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <SearchBar />

        <li onClick={ () => { setmenu("home") }}> 
          <Link to = '/'> Home </Link> {menu === "home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("categories") }}>
        <Link to = '/category'> Categories </Link> {menu === "categories" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setmenu("orders") }}>
        <Link to = '/orders'> Orders </Link> {menu === "orders" ? <hr /> : <></>}
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