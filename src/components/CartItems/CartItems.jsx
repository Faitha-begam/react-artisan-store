import React, { useContext } from 'react'
import './CartItems.css'
import {AllContext} from '../../context/AllContext'
import remove_icon from '../assets/remove_icon.png'


const CartItems = () => {
    const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(AllContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
                     <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                           <p>{e.name}</p>
                           <p>${e.new_price}</p>
                           <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                           <p>${e.new_price*cartItems[e.id]}</p>
                        <img src={remove_icon} className='cartitems-dlt' style={{height:"30px", width:"30px", cursor:"pointer"}} onClick={()=>{removeFromCart(e.id)}} alt="" />
                      </div>
                      <hr />
                    </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                   <p>Shipping Fee</p>
                   <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='btn btn-danger'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p className='text-secondary'>If you have a promo code, Enter it here </p>
            <div className="cartitems-promobox">
                <input type="text"  placeholder='promo code'/>
                <button className='btn btn-dark' style={{  width: "170px", height: "58px", cursor: "pointer"}}>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
