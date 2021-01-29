import axios from 'axios';

export const getUser = async () => {
    let { data } = await axios.get('/getuser');
    return data;
}


export const getAllProducts = async () => {
    let { data } = await axios.get("/defaultproducts");
    return data;
}


export const gettingCartProducts = async (username) => {
    let { data } = await axios.get(`/cartproducts/${username}`);
    return data;
}

export const updatingASingleItem = (cart, newItem) => {
    let newItemOrNot = true;
    let newCart = cart.map(item => {
        if (item.productId === newItem.productId) {
            item.noOfProducts = item.noOfProducts + 1;
            newItemOrNot = false;
            return item;
        }
        return item;
    })
    if (newItemOrNot) return [...cart, { productId: newItem.productId, noOfProducts: 1, title: newItem.title, description: newItem.description, category: newItem.category, price: newItem.price, image: newItem.image }];
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



export const FormatPrice = price => {
    return price.toFixed(2);
}


export const TotalCartPrice = cart => {
    let totalprice = 0;
    if (cart.length === 0) return 0;
    cart.map(product => totalprice = totalprice + (product.noOfProducts * product.price));
    return totalprice.toFixed(2);
}


export const REMOVEITEMFROMCART = (cart, removeItem) => {
    let newCart = [];

    cart.forEach(product => {
        if (product.productId === removeItem.productId) {
            if (product.noOfProducts === 1) {
                delete cart[product];
            } else {
                product.noOfProducts--;
                newCart.push(product);
            }
        } else {
            newCart.push(product);
        }
    });

    return newCart;
}
