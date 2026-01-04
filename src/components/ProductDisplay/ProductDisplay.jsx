import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { AllContext } from '../../context/AllContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(AllContext);

  if (!product) return null;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} style={{width:"15px"}} alt="" />
          <img src={star_icon} style={{width:"15px"}} alt="" />
          <img src={star_icon} style={{width:"15px"}} alt="" />
          <img src={star_icon} style={{width:"15px"}} alt="" />
          <img src={star_dull_icon} style={{width:"15px"}} alt="" />
          <p style={{marginTop:"20px"}}>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            A thoughtfully designed collection that sparks creativity and encourages artistic expression.  
        </div>
       <div className="productdisplay-right-quantity">
           <h1>Quantity</h1>
           <div className="quantity-box">
           <button>-</button>
           <span>1</span>
           <button>+</button>
         </div>
       </div>
        <button className='btn btn-danger' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        
      </div>
    </div>
  )
}

export default ProductDisplay
