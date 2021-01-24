import axios from 'axios';

export const getUser = async () => {
    let { data } = await axios.get('/getuser');
    return data;
}



export const getAllProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
}