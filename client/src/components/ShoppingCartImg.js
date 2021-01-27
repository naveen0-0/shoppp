import React from 'react'
import shoppingcartimg from '../images/shoppingcart2.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NoOfProductsForCart } from '../utils/utils';

export default function ShoppingCartImg() {

    const cart = useSelector(state => state.cart);

    return (
        <div className="shoppingcartimg">
            <Link to="/cart" className="cart"><img src={shoppingcartimg} alt="User" className="cartimg" /></Link>
            {cart && <div className="noOfProducts">{NoOfProductsForCart(cart)}</div>}
        </div>
    )
}
