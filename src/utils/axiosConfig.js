import axios from 'axios'; 

const axiosInstance = axios.create({
    baseURL: 'https://t3a2-b-server-mi40.onrender.com',
});

export default axiosInstance;
