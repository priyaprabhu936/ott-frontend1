import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={{ padding: "10px", background: "#222", color: "white" }}>
          <Link to="/" style={{ margin: "10px", color: "white" }}>
            Home
          </Link>
          <Link to="/login" style={{ margin: "10px", color: "white" }}>
            Login
          </Link>
          <Link to="/register" style={{ margin: "10px", color: "white" }}>
            Register
          </Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MovieGrid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
