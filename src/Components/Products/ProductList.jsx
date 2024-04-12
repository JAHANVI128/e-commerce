import React from "react";
import Product from "./Product";
import "./Product.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      <div className="see-all-products">See All Products</div>
    </div>
  );
};

export default ProductList;