import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LogoutPage from "./pages/LogoutPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={
            <ProtectedRoute user={user}>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="logout" element={<LogoutPage setUser={setUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
