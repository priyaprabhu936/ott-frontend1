import React from "react";

const Dashboard = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div>
      <h2>Welcome to Dashboard 🎉</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
