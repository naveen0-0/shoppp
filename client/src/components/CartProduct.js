import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { FormatPrice } from '../utils/utils';



export default function CartProduct({ item }) {

    const { username } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const { productId, title, description, image, price, category } = item;


    const AddToCart = async () => {
        let { data } = await axios.post('/addproduct', { productId, username, title, description, category, price, image });
        console.log(data);
        dispatch({ type: "UPDATEANSINGLEITEM", payload: { productId, title, description, category, price, image } })
    }


    const RemoveCart = async () => {
        let { data } = await axios.post('/removeproduct', { productId, username });
        console.log(data);
        dispatch({ type: "REMOVEITEMFROMCART", payload: { productId } })
    }

    return (
        <div className="cartproduct">
            {/* <div className="cartimagecontainer">
                <img src={item.image} alt="CartImage" className="cartimage" />
            </div> */}

            <div className="cartdetails">
                <div className="cartproducttitle">{item.title} (<div className="cartproductprice">${item.price}</div>)</div>
                <div className="noofproducts">
                    <button className="cartproductincrement" onClick={RemoveCart}>-</button>
                    <div className="noofproductsnumber">{item.noOfProducts}</div>
                    <button className="cartproductdecrement" onClick={AddToCart}>+</button>
                </div>
                <div className="totalpriceforaproduct">${FormatPrice(item.price * item.noOfProducts)}</div>
            </div>

            
        </div>
    )
}



