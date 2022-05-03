import { Link } from "react-router-dom";

export default function NavBar() {
  const linkStyle = {
    padding: "10px",
    display: "block",
    fontSize: "18px",
  };

  const navContainerStyle = {
    backgroundColor: "#181d27",
    padding: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
  };

  return (
    <div style={navContainerStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>

      <Link to="/create" style={linkStyle}>
        Create
      </Link>
    </div>
  );
}
