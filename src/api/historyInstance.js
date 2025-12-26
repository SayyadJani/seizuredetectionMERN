import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenSEI");
  if (token) {
    config.headers.token = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
