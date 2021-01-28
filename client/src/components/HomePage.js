import React, { Fragment, useEffect, useState } from 'react';
import { getAllProducts } from '../utils/utils';
import Hero from "./Hero";
import Product from './Product';
import { Spinner } from './Spinner';

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts()
            .then(products => { setProducts(products); setLoading(false) })
            .catch(() => console.log("Error"))
    }, []);

    return (
        <Fragment>
            <Hero />
            <div className="allproductstitle">Available products</div>

            {loading ? <Spinner /> : (
                <div className="products">
                    {products && (products.map(product => <Product product={product} key={product.id} />))}
                </div>
            )}

        </Fragment>
    )
}
