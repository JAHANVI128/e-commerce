import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Categories from '../Components/Category/Categories'
import images from "../Components/Carousels/images.js";
import ImageSlider from "../Components/Carousels/ImageSlider.js";
import Product from '../Components/Products/Product.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const Shop = () => {
  return (
    <div  className="shop">

      <ImageSlider images={images} />
          
      <Categories/>

      <Popular/>

      <Offer/>

      <Product/>

      <Footer/>
    </div>
  );
}

export default Shop