import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI || "https://ott-backend1-3.onrender.com",
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
