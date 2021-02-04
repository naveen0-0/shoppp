import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import CartProduct from './CartProduct';
import { TotalPrice } from './TotalPrice';



export default function Cart() {

    const { loggedIn } = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);

    if (!loggedIn) return <Redirect to="/" />

    return (
        <Fragment>
            <div className="carttitle">Products in Cart</div>
            <div className="cartproducts">
                {cart.map((item, index) => <CartProduct item={item} key={index} />)}
            </div>
            <TotalPrice cart={cart} />
        </Fragment>
    )
}

