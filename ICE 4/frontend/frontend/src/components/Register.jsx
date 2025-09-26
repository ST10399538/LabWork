import { useState } from "react";
import axios from "axios";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isStrongPassword = (password) =>
  /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMsg("Email and password are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setMsg("Invalid email format.");
      return;
    }
    if (!isStrongPassword(password)) {
      setMsg("Password must be at least 8 chars and include letters & numbers.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/register", { email, password });
      setMsg("Registered successfully!");
    } catch (err) {
      setMsg(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
      <p>{msg}</p>
    </form>
  );
}
