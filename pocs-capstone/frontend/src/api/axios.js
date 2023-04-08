
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_DB_URL

console.log("DB URL: ", BASE_URL)

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type':'application/json',
        withCredentials:true
    }
});
