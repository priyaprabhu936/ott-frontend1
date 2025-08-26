// src/api.js

// Backend URL (Render live backend)
export const API_URL = "https://ott-backend1.onrender.com/api";

// API helper functions
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const getMovies = async () => {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
};

export const addMovie = async (movieData) => {
  const res = await fetch(`${API_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movieData),
  });
  return res.json();
};
