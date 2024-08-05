import axios from 'axios'; 

const axiosInstance = axios.create({
    baseURL: 'https://typetutor.onrender.com/api',
});

export default axiosInstance;
