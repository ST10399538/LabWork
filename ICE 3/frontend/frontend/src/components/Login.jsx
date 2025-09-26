import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

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

    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
}
