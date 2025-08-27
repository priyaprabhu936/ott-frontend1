// src/components/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://ott-backend1-3.onrender.com",
});

export default api;
