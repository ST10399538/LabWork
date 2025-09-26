export default function LogoutPage({ setUser }) {
  setUser(null);
  localStorage.removeItem("token");
  return <h2>You are logged out</h2>;
}
