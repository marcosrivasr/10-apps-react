import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">
        <a>Home</a>
      </Link>

      <Link to="/create">
        <a>Create</a>
      </Link>
    </div>
  );
}
