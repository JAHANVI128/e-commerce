import React from 'react'
import './ProductDisplay.css'
import { Rating } from '@mui/material';
import cart from '../Assets/fe_add-cart.png'

const ProductDisplay = (props) => {

    const { product } = props;
    return (
        <div className="container">
            <div className='productdisplay'>
                <div className="pd-left">
                    <div className="pd-img">
                        <img className='pd-main-img' src={product.image} alt="" />
                    </div>
                    <div className="pd-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>

                <div className="pd-right">
                    <h1>{product.name}</h1>
                    <div className="pd-right-star">
                        <Rating/>
                    </div>

                    <hr />
                    
                    <div className="pd-right-price">
                        <div className="pd-right-old-price">
                            M.R.P. : ${product.old_price}
                        </div>

                        <div className="pd-right-new-price">
                            ${product.new_price}
                        </div>

                        <div className="discount">
                            <p>(30% off)</p>
                        </div>

                        <div className="tax">
                            <p>* inclusive of all taxes</p>
                        </div>

                        <div className="gst">
                            <p>( GST NO : OXS28378927 ) </p>
                        </div>

                        <button>Add to Cart <img src={cart} alt="" /></button>
                    </div>

                    <hr />

                    <div className="pd-right-desc">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay