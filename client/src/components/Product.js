import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'

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




export default function Product({ product }) {

    const { loggedIn, username } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { title, description, category, price, id } = product;

    const productImages = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11, shop12, shop13, shop14, shop15, shop16, shop17, shop18, shop19, shop20]

    const AddToCart = async productId => {
        await axios.post('/addproduct', { productId, username, title, description, category, price });
        dispatch({ type: "UPDATEANSINGLEITEM", payload: { productId, title, description, category, price } })
    }

    return (
        <Link className="product" to={`/product/${id}`}>
            <div className="producttitle">{title}</div>
            <div className="productimgcontainer" ><img src={productImages[id]} alt="ProductImage" className="productimg" /></div>
            <div className="productdescription">{description}</div>
            <div className="productcategory">Category : {category}</div>
            <div className="priceandcart">
                <div className="productprice">${price}</div>
                {loggedIn && <button className="addtocart" onClick={() => AddToCart(id)}>Add to Cart</button>}
            </div>
        </Link>
    )
}
