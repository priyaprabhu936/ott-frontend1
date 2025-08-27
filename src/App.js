import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Movies from "./pages/Movies";
import Profile from "./pages/Profile";

// Protected Route wrapper
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#111", minHeight: "100vh", color: "#fff" }}>
        
        {/* Navigation Bar */}
        <nav style={{ padding: "10px", borderBottom: "1px solid #444" }}>
          <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>Home</Link>
          <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>Login</Link>
          <Link to="/register" style={{ marginRight: "15px", color: "#fff" }}>Register</Link>
          <Link to="/movies" style={{ marginRight: "15px", color: "#fff" }}>Movies</Link>
          <Link to="/profile" style={{ marginRight: "15px", color: "#fff" }}>Profile</Link>

          {/* Logout Button */}
          <button
            onClick={() => {
              localStorage.removeItem("token"); // remove token
              window.location.href = "/login"; // redirect
            }}
            style={{
              marginLeft: "15px",
              backgroundColor: "#e50914",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Logout
          </button>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1 style={{ padding: "20px" }}>🍿 Welcome to OTT App</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/movies"
            element={
              <PrivateRoute>
                <Movies />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
