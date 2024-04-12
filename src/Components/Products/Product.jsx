import React, { useContext } from 'react'
import data_product from '../Assets/data';
import Item from "../Item/Item";
import './Product.css'
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Product = () => {

  // const {all_product} = useContext(ShopContext);
  // const {productId} = useParams();
  // const product = all_product && all_product.find((product) => product.id === productId);

  return (
    <div className="card products">
      <h2>All Products</h2>
      <div className="container product-item">
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

        {/* <ProductDisplay product={product}/> */}
      </div>
    </div>
  )
}

export default Product