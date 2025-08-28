import axios from "axios";

const api = axios.create({
  baseURL: "https://ott-backend1-3.onrender.com", // un backend link
});

// Register
export const registerUser = async (userData) => {
  return await api.post("/register", userData);
};

// Login
export const loginUser = async (userData) => {
  return await api.post("/login", userData);
};

// Profile
export const getProfile = async (token) => {
  return await api.get("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Movies
export const getMovies = async () => {
  return await api.get("/movies");
};

// Logout (frontend side token remove)
export const logoutUser = () => {
  localStorage.removeItem("token");
};

export default api;
