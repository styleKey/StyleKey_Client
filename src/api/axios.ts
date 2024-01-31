import axios from 'axios';

//axios config

const axiosInstance = axios.create({
  baseURL: 'localhost:9000',
});

export default axiosInstance;
