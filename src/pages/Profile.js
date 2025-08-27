// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import API_URL from "../api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    fetch(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.username) {
          setUser(data);
        }
      })
      .catch(() => setUser(null));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 Profile</h2>
      {user ? (
        <div>
          <p><b>Username:</b> {user.username}</p>
        </div>
      ) : (
        <p>⚠️ Please login to see profile</p>
      )}
    </div>
  );
}

export default Profile;
