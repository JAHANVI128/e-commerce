import React from 'react'
import './ProductDisplay.css'
import { Rating } from '@mui/material';
import cart from '../Assets/fe_add-cart.png'

const reviews = {

}

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
                        <h4>Description</h4>
                        <ul>
                            <li>A high-resolution, 1600 dpi optical sensor ensures you`,`ll be smoothly gliding from window-to-window. Cable Length/Type : 1.80 m</li>
                            <li>Comfortable use for long hours with great performance</li>
                            <li>USB A type connectivity with laptop, desktop or CPU</li>
                            <li>Great Aesthetics, Usage ideal for office, education sectors, designing, basic gaming etc </li>
                            <li>Warranty: 1 Year</li>
                            <li>Wired mouse with 1600dpi optical sensor</li>
                            <li>Note : In case of Wireless mouse, the USB receiver will be provided inside or along with the mouse</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="customer-review">
                <div className="cr-left">
                    <h4>Customer Review</h4>
                    <Rating/>
                    <div className="review">
                        <h4>Write a review</h4>
                        <p>Your rating : <Rating name="size-small" defaultValue={2} size="small" /> </p>
                        <input type="text" name="" id="" placeholder='Write a review'/>
                    </div>
                </div>

                <div className="cr-right">
                    <h5>Top reviews for this product</h5>
                    {/* {reviews.map(item => (
                        <Review key={item._id} item={item} />
                    ))} */}

                    <p>View all review</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay