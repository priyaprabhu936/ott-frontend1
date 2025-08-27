// src/components/api.js
import axios from "axios";

// Netlify frontend use panra, so backend URL inga set pannunga.
// Option 1: Netlify .env (Environment variables) la:
//   Key: REACT_APP_API_BASE_URL
//   Value: https://your-backend.onrender.com
//
// Option 2: Direct hardcode (test ku):

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://your-backend.onrender.com", 
  // ↑ unga backend deploy URL potu mathunga
  withCredentials: false, // cookies venumna true podalam
  timeout: 20000, // 20 sec timeout
});

// Request interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Local storage la token save panna iruntha attach pannalam
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
