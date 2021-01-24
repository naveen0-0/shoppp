import React, { Fragment, useEffect } from 'react';
import { getAllProducts } from '../utils/utils';

export default function HomePage() {

    useEffect(() => {
        getAllProducts()
            .then(products => console.log(products))
            .catch(() => console.log("Error"))
    }, []);

    return (
        <Fragment>

        </Fragment>
    )
}
