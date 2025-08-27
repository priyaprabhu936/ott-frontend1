import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // login aprm token save aganum
  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
