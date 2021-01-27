import React, { Fragment } from 'react';
import CartProduct from './CartProduct';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';



export default function Cart() {

    const { loggedIn } = useSelector(state => state.user);



    if (!loggedIn) return <Redirect to="/" />

    return (
        <Fragment>
            <div className="carttitle">Products in Cart</div>
            <CartProduct />
        </Fragment>
    )
}
