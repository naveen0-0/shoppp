import React from 'react';
import { TotalCartPrice } from '../utils/utils';

export const TotalPrice = ({ cart }) => {

    if (cart.length === 0) {
        return <div className="noproducts">There are no products in the cart</div>
    };

    return (
        <div className="fullprice">${TotalCartPrice(cart)}</div>
    )
}

