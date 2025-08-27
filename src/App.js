// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Movies from "./pages/Movies";

function App() {
  const token = localStorage.getItem("token"); // check login

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // redirect
  };

  return (
    <Router>
      <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff" }}>
        <nav style={{ padding: "10px", borderBottom: "1px solid #444" }}>
          <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
          {!token ? (
            <>
              <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
              <Link to="/register" style={{ color: "#fff" }}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/profile" style={{ marginRight: "15px", color: "#fff" }}>Profile</Link>
              <Link to="/movies" style={{ marginRight: "15px", color: "#fff" }}>Movies</Link>
              <button onClick={handleLogout} style={{ background: "red", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                Logout
              </button>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/profile" />} />
          <Route path="/register" element={!token ? <Register /> : <Navigate to="/profile" />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/movies" element={token ? <Movies /> : <Navigate to="/login" />} />
          <Route path="/" element={<h1 style={{ textAlign: "center" }}>🎬 Welcome to CineStream</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
