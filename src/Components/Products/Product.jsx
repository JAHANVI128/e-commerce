import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="Product_image" />
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-new-price">

        </div>

        <div className="item-old-price">
            
        </div>
      </div>
    </div>
  );
};

export default Product;
