import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("🚪 Logged out successfully!");
  };

  return (
    <Router>
      <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff" }}>
        <nav style={{ padding: "10px", borderBottom: "1px solid #444" }}>
          <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
          <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ marginRight: "15px", color: "#fff" }}>Register</Link>
          <button onClick={handleLogout} style={{ marginLeft: "15px" }}>Logout</button>
        </nav>

        <Routes>
          <Route path="/" element={<h1 style={{ textAlign: "center" }}>🎬 Welcome to CineStream</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
