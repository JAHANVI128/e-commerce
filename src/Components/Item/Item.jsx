import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="new_price">
            ${props.new_price}
        </div>

        <div className="old_price">
            {props.new_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
