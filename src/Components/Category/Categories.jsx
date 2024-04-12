import React from "react";
import Cat1 from '../Assets/Cat1.png'
import Cat2 from '../Assets/Cat2.png'
import Cat3 from '../Assets/Cat3.png'
import Cat4 from '../Assets/Cat4.png'
import './Categories.css'

const Categories = () => {
  return (
    <div className="main-category">
      <h2>Categories</h2>
      <div className="main-brands">
        <img src={Cat1} alt="" />
        <img src={Cat2} alt="" />
        <img src={Cat3} alt="" />
        <img src={Cat4} alt="" />
        <img src={Cat1} alt="" />
      </div>
    </div>
  );
};

export default Categories;
