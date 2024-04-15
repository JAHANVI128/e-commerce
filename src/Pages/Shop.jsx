import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Categories from '../Components/Category/Categories'
import images from "../Components/Carousels/images.js";
import ImageSlider from "../Components/Carousels/ImageSlider.js";
import Product from '../Components/Products/Product.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import { Container } from 'react-bootstrap'

const Shop = () => {
  return (
    <Container fluid="md">
      <div  className="shop">

        {/* <ImageSlider images={images} />
            
        <Categories/>

        <Popular/>

        <Offer/>

        <Product/> */}

        {/* <Footer/> */}
      </div>
    </Container>
  );
}

export default Shop