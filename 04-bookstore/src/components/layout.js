import NavBar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
}
