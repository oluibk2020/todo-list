import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <NavLink to="/">Todo App</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
}
export default Navbar;
