// submit handler example
const handleRegister = async (e) => {
  e.preventDefault();
  setMessage("...");

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Registration failed");

    setMessage("✅ Registered! Please login.");
    setUsername(""); setPassword("");
  } catch (err) {
    setMessage("❌ " + err.message);
  }
};
