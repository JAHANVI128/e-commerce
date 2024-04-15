import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import data_product from "../Components/Assets/data";
import Item from "../Components/Item/Item";
import { useParams } from "react-router-dom";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);
  const { category } = useParams();
  console.log("category", category);

  return (
    <div className="shop-category">
      <div className="shopcategory-sort">Sort by:</div>

      <div className="shopcategory-products">
        {/* {data_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
           return ( <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />)
          }
        })} */}
      </div>
    </div>
  );
};

export default ShopCategory;
