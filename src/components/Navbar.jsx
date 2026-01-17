import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Stylesheets/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // for active link

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "bar rotate1" : "bar"}></span>
          <span className={menuOpen ? "bar fade" : "bar"}></span>
          <span className={menuOpen ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Nav Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <Link to="/" onClick={toggleMenu}>
              <li className={location.pathname === "/" ? "active" : ""}>Home</li>
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              <li className={location.pathname === "/about" ? "active" : ""}>About</li>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <li className={location.pathname === "/contact" ? "active" : ""}>Contact</li>
            </Link>
            <Link to="/shop" onClick={toggleMenu}>
              <li className="cta">Shop</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
