import axios from 'axios';

//axios config
const axiosInstance = axios.create({
  baseURL: 'localhost:9000',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  // gettoken으로 토큰 받아옴
  const token = 0;
  if (token !== null) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use();

export default axiosInstance;
