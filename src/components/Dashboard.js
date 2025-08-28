import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome to Dashboard 🎉</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
