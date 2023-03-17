import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <NavLink
        to="."
        end
        className={(obj) => (obj.isActive ? "active-link" : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="feed"
        className={(obj) => (obj.isActive ? "active-link" : null)}
      >
        Feed
      </NavLink>
    </nav>
  );
}
