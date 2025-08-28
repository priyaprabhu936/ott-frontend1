import React, { useState } from "react";
import { registerUser } from "./api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await registerUser({ username, password });
      if (res.data.success) {
        alert("User registered successfully! Please login.");
        navigate("/");
      } else {
        alert("Registration failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
