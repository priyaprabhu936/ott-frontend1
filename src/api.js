// src/components/api.js
import axios from "axios";

// Axios instance create pannurathu
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://ott-backend1-3.onrender.com",
  withCredentials: false, // cookies venumna true podalaam
  timeout: 20000, // 20 sec timeout
});

// Request interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Local storage la token save panna iruntha attach pannalaam
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (optional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Unauthorized na redirect panna lam
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized - Please login again");
    }
    return Promise.reject(error);
  }
);

export default api;
