import React, { Fragment } from 'react';
import CartProduct from './CartProduct';



export default function Cart() {

    return (
        <Fragment>
            <div className="carttitle">Products in Cart</div>
            <CartProduct />
        </Fragment>
    )
}
