import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import like from "../Assets/Like.png";
import cart from "../Assets/Cart.png";
import profile from "../Assets/Profile.png";
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
// import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-width: 1224px)'
  // })

  // const isDesktopOrLaptop = useMediaQuery(
  //   { minDeviceWidth: 1224 },
  //   { deviceWidth: 1600 } // `device` prop
  // )

  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const [menu, setmenu] = useState("home");

  const { width } = useWindowSize();

  return (
    <div className="navbar">
      {width > 500 && (
        <>
          
      <div className="nav-logo">
        <Link style={{textDecoration : 'none'}} to = '/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className="nav-menu">
        <SearchBar />

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

      <div className="nav-login-cart">
        <Link style={{textDecoration : 'none'}} to='/like'>
          <img className="like" src={like} alt="Like" />
        </Link>

        <Link style={{textDecoration : 'none'}} to='/cart'>
          <img className="cart" src={cart} alt="Cart" />
        </Link>

        <div className="nav-cart-count">0</div>

        <Link style={{textDecoration : 'none'}} to='/profile'>
          <img className="profile" src={profile} alt="Profile" />
        </Link>
      </div>
        </>
      )}
    </div>
  );
};

export default Navbar;