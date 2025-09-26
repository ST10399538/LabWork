import { Link, Outlet } from "react-router-dom";

export default function Layout({ user, setUser }) {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <Link to="/logout" onClick={() => setUser(null)}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>{" | "}
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
