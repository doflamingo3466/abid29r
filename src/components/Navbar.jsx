import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        abid.
      </Link>

      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        {menu ? "CLOSE" : "MENU"}
      </button>

      <div className={menu ? "nav-links show" : "nav-links"}>
        <NavLink to="/" end onClick={() => setMenu(false)}>
          Home
        </NavLink>
        <NavLink to="/services" onClick={() => setMenu(false)}>
          Services
        </NavLink>
        <NavLink to="/about" onClick={() => setMenu(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenu(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
