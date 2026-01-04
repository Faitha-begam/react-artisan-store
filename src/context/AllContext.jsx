import React, { createContext } from "react";
import all_products from '../components/assets/all_products_data'
import { useState } from "react";

export const AllContext = createContext(null);

 const getDefaultCart = ()=> {
        let cart ={};
        for (let index = 1; index<=all_products.length; index++){
            cart[index] = 0;
        }
        return cart;
    }

const AllContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
 
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
    return (
        <AllContext.Provider value={contextValue}>
            {props.children}
        </AllContext.Provider>
    )
}

export default AllContextProvider;