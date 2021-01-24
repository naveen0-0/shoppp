import axios from 'axios';

export const getUser = async () => {
    let { data } = await axios.get('/getuser');
    return data;
}