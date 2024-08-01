import axios from 'axios'; 

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5600/api',
});

export default axiosInstance;
