import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Dashboard 🎉</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
