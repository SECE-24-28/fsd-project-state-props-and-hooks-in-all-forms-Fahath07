import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/Images/trailbliss.png";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="TrailBliss" />
          <span>Trail<strong>Bliss</strong></span>
        </Link>

        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/packages" onClick={() => setOpen(false)}>Packages</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <div className="nav-actions">
            <Link to="/login" className="btn btn-outline btn-sm" onClick={() => setOpen(false)}>Login</Link>
            <Link to="/signup" className="btn btn-gold btn-sm" onClick={() => setOpen(false)}>Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
