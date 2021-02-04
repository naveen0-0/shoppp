import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';



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


export default function FullProduct({ match }) {

    const { id } = match.params;
    const productImages = [shop1, shop2, shop3, shop4, shop5, shop6, shop7, shop8, shop9, shop10, shop11, shop12, shop13, shop14, shop15, shop16, shop17, shop18, shop19, shop20]
    const [loading, setLoading] = useState(true);
    const [fullProduct, setFullProduct] = useState({});
    const { loggedIn, username } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const AddToCart = async productId => {
        await Axios.post('/addproduct', { productId, username, title: fullProduct.title, description: fullProduct.description, category: fullProduct.category, price: fullProduct.price });
        dispatch({ type: "UPDATEANSINGLEITEM", payload: { productId, title: fullProduct.title, description: fullProduct.description, category: fullProduct.category, price: fullProduct.price } })
    }

    useEffect(() => {
        let source = Axios.CancelToken.source();

        const gettingFullProduct = async () => {
            try {
                const { data } = await Axios.get(`/defaultproducts/${id}`, {
                    cancelToken: source.token
                })
                setLoading(false);
                setFullProduct(data);
            } catch (error) {
                if (Axios.isCancel(error)) {
                    console.log("Caught Cancel");
                } else {
                    throw error;
                }
            }
        }
        gettingFullProduct();
        return () => {
            source.cancel();
        }
    }, [id])

    if (loading) return <Spinner />

    return (
        <div className="fullproduct">
            <div className="fulltitle">{fullProduct.title}</div>
            <div className="fullimage"><img src={productImages[id]} alt={fullProduct.title} /></div>
            <div className="fullproductprice">${fullProduct.price}</div>
            <div className="fullcategory">Category : {fullProduct.category}</div>
            <div className="fulldescription">{fullProduct.description}</div>

            {loggedIn && <button className="fullproductaddtocart" onClick={() => AddToCart(id)}>Add to Cart</button>}
        </div>
    )
}
