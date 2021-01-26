import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Product({ product }) {

    const { loggedIn, username } = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const { title, description, category, price, image, id } = product;

    const AddToCart = async productId => {
        let { data } = await axios.post('/addproduct', { productId: productId, username: username })
        console.log(data);
    }

    return (
        <div className="product">
            <div className="producttitle">{title}</div>
            <div className="productimgcontainer" ><img src={image} alt="ProductImage" className="productimg" /></div>
            <div className="productdescription">{description}</div>
            <div className="productcategory">Category : {category}</div>
            <div className="priceandcart">
                <div className="productprice">${price}</div>
                {loggedIn && <button className="addtocart" onClick={() => AddToCart(id)}>Add to Cart</button>}
            </div>
        </div>
    )
}
