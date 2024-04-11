import React from "react";
import "./Footer.css";
import instagram from "../Assets/skill-icons_instagram.png";
import twitter from "../Assets/Frame 40.png";
import facebook from "../Assets/devicon_facebook.png";
import gmail from "../Assets/skill-icons_gmail-light.png";
import app from "../Assets/en_badge_web_generic.png";
import play from "../Assets/android-app-store-app-store-and-android-icons-11553546864dl6gbnzyt2.png";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Popular Searches</h1>
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
        <h4>Customer Policies</h4>
        <ul>
          <li>T&C</li>
          <li>Terms of Use</li>
          <li>Track Orders</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer-download">
        <h4>Download Mobile Apps</h4>
        <img src={app} alt="Mobile App" />
        {/* <img src={play} alt="Mobile App" /> */}
      </div>

      <div className="footer-social-icon">
        <h4>Contact Us</h4>
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
