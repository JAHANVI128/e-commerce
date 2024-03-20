import React from 'react'
import './Navbar.css'
import logo from 'C:\Projects\e-commerce\src\Components\Assests\logo.png'
import like from 'C:\Projects\e-commerce\src\Components\Assests\Like.png'
import cart from 'C:\Projects\e-commerce\src\Components\Assests\Cart.png'
import profile from 'C:\Projects\e-commerce\src\Components\Assests\Profile.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav_menu">
        <li>Search</li>
        <li>Home</li>
        <li>Categories</li>
        <li>Order</li>
      </ul>
      <div className="nav-login-cart">
        <img src={like} alt="Like" />
        <img src={cart} alt="Cart" />
        <img src={profile} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar