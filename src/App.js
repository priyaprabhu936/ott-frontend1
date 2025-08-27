// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff" }}>
        <nav style={{ padding: "10px", borderBottom: "1px solid #444" }}>
          <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
          <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ marginRight: "15px", color: "#fff" }}>Register</Link>
          <Link to="/profile" style={{ marginRight: "15px", color: "#fff" }}>Profile</Link>
          <Link to="/movies" style={{ color: "#fff" }}>Movies</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1 style={{ textAlign: "center" }}>🎬 Welcome to CineStream</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
