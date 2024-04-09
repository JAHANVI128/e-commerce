import React from "react";
import "./Footer.css";
import instagram from "../Assets/skill-icons_instagram.png";
import twitter from "../Assets/Frame 40.png"
import facebook from "../Assets/devicon_facebook.png"
import gmail from "../Assets/skill-icons_gmail-light.png"
import app from "../Assets/App.png"

const Footer = () => {
  return (
    <div className="footer">
      <h4>Popular Searches</h4>
      <ul className="footer-links">
        <li>Mouse |</li>
        <li> Samsung SSD |</li>
        <li> 1TB Haed Disk |</li>
        <li> samsung tab charger |</li>
        <li> oneplus charger </li>
        <ul className="footer-product">
          <li>RBG Keyboard |</li>
          <li> Gaming Pad |</li>
          <li> CPU coller</li>
        </ul>
      </ul>

      <div className="footer-category">
        <h4>Categories</h4>

      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>
      </div>
      <div className="footer-policy">
        <h4>Customer Policy</h4>
      </div>

      <div className="footer-download">
        <h4>Download Mobile Apps</h4>
        <img src={app} alt="Mobile App" />
      </div>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={gmail} alt="gmail" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
