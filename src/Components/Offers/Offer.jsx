import React from "react";
import "./Offer.css";
import offer1 from "../Assets/offer";
import Item from "../Item/Item";

const Offer = () => {
  return (
    <div className=" container-fluid">
      <h1>Offers Only For You</h1>
      <div className="product">
        <div className="product-card">
          {offer1.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
