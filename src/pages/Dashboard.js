import React from "react";

const Dashboard = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dashboard 🎉</h1>
      <p>You are successfully logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
