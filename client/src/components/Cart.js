import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';

import CartProduct from './CartProduct';
import { TotalPrice } from './TotalPrice';
import { gettingCartProducts } from '../utils/utils'


export default function Cart() {

    const { loggedIn, username } = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        gettingCartProducts(username)
            .then(data => { dispatch({ type: "UPDATECART", payload: data }) })
            .catch(() => console.log("Cart Error"))
    })




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
