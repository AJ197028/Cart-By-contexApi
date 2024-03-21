import React, { createContext, useState } from 'react';
import PRODUCTS from '../pages/products';

export const ShopContext = createContext(null);

const getDefaultCart =()=> {
    let cart = {}                   //object means 1 product
    for(let i=1; i<PRODUCTS.length+1; i++) {
        cart[i]=0                   //intial all product to 0            
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
     
    const addToCart = (itemId) => {
        setCartItems((prev) =>(
            {...prev, [itemId]: prev[itemId] + 1}       //
        ))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) =>(
            {...prev, [itemId]: prev[itemId] - 1}
        ))
    }

    const contextValue = {cartItems, addToCart, removeFromCart };
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

