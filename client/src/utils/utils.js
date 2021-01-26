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