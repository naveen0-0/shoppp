import React, { Fragment, useEffect, useState } from 'react';
import { getAllProducts } from '../utils/utils';
import Hero from "./Hero";
import Product from './Product';

export default function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then(products => setProducts(products))
            .catch(() => console.log("Error"))
    }, []);

    return (
        <Fragment>
            <Hero />
            <div className="allproductstitle">Available products</div>
            <div className="products">
                {products && (products.map(product => <Product product={product} key={product.id} />))}
            </div>
        </Fragment>
    )
}
