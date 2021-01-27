import axios from 'axios';

export const getUser = async () => {
    let { data } = await axios.get('/getuser');
    return data;
}


export const getAllProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
}


export const gettingCartProducts = async (username) => {
    let { data } = await axios.get(`/cartproducts/${username}`);
    return data;
}

export const updatingASingleItem = (cart, newItem) => {
    let newItemOrNot = true;;
    let newCart = cart.map(item => {
        if (item.productId === newItem.productId) {
            item.noOfProducts = item.noOfProducts + 1;
            newItemOrNot = false;
            return item;
        }
        return item;
    })
    if (newItemOrNot) return [...cart, { productId: newItem.productId, noOfProducts: 1 }];
    return newCart;
}



export const NoOfProductsForCart = cart => {
    if (cart.length === 0) return 0;
    let noOfProducts = 0;

    cart.map(item => {
        noOfProducts = noOfProducts + item.noOfProducts;
        return item;
    })
    return noOfProducts;
}
