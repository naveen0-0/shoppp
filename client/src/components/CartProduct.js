import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { FormatPrice } from '../utils/utils';


import shop1 from '../images/shoppp1.jpg';
import shop2 from '../images/shoppp2.jpg';
import shop3 from '../images/shoppp3.jpg';
import shop4 from '../images/shoppp4.jpg';
import shop5 from '../images/shoppp5.jpg';
import shop6 from '../images/shoppp6.jpg';
import shop7 from '../images/shoppp7.jpg';
import shop8 from '../images/shoppp8.jpg';
import shop9 from '../images/shoppp9.jpg';
import shop10 from '../images/shoppp10.jpg';
import shop11 from '../images/shoppp11.jpg';
import shop12 from '../images/shoppp12.jpg';
import shop13 from '../images/shoppp13.jpg';
import shop14 from '../images/shoppp14.jpg';
import shop15 from '../images/shoppp15.jpg';
import shop16 from '../images/shoppp16.jpg';
import shop17 from '../images/shoppp17.jpg';
import shop18 from '../images/shoppp18.jpg';
import shop19 from '../images/shoppp19.jpg';
import shop20 from '../images/shoppp20.jpg';



export default function CartProduct({ item }) {

    const { username } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { productId, title, description, price, category } = item;

    const productImages = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11, shop12, shop13, shop14, shop15, shop16, shop17, shop18, shop19, shop20]


    const AddToCart = async () => {
        let { data } = await axios.post('/addproduct', { productId, username, title, description, category, price });
        console.log(data);
        dispatch({ type: "UPDATEANSINGLEITEM", payload: { productId, title, description, category, price } })
    }


    const RemoveCart = async () => {
        let { data } = await axios.post('/removeproduct', { productId, username });
        console.log(data);
        dispatch({ type: "REMOVEITEMFROMCART", payload: { productId } })
    }

    return (
        <div className="cartproduct">
            <div className="cartimagecontainer"><img src={productImages[productId]} alt="CartImage" className="cartimage" /></div>

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



