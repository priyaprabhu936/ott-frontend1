import axios from "axios";

const api = axios.create({
  baseURL: "https://ott-backend1-3.onrender.com", // ✅ backend link
});

export default api;
