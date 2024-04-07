import React from 'react'
import data_product from '../Assets/data';
import Item from "../Item/Item";
import './Product.css'

const Product = () => {
  return (
    <div className="products">
      <h2>All Products</h2>
      <div className="product-item">
        {data_product.map((item, i) => {
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
  )
}

export default Product