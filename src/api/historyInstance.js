import axios from "axios";

const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenSEI");
  if (token) {
    config.headers.token = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
