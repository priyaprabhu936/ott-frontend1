import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URI,
});

export const registerUser = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await API.post("/login", userData);
  return res.data;
};

export const getProfile = async (token) => {
  const res = await API.get("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getMovies = async () => {
  const res = await API.get("/movies");
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
