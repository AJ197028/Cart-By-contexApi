import React, { useContext } from 'react';
import "./cart.css"
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const { id,productName, price, productImage } = props.data;
    const {cartItems} = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
            <p>
                <b> {productName} </b>
            </p>
            <p> ${price} </p>
            <div className='countHandler'>
                <button>+</button>
                <input value={cartItems[id]}/>
                <button>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem