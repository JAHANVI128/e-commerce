import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const ProductDesc = () => {

    // const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    
  return (
    <div>
        <ProductDisplay/>
    </div>
  )
}

export default ProductDesc