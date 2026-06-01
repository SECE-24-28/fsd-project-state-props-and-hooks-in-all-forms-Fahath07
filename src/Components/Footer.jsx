import { Link } from "react-router-dom";
import logo from "../Assets/Images/trailbliss.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="TrailBliss" />
            <span>Trail<strong>Bliss</strong></span>
          </Link>
          <p>Tailor-made travel experiences across India's most breathtaking destinations.</p>
          <div className="footer-socials">
            <a href="#!" aria-label="Facebook">📘</a>
            <a href="#!" aria-label="Instagram">📸</a>
            <a href="#!" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <Link to="/faq">FAQ's</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Help Center</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Kochi, Kerala, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@trailbliss.in</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} TrailBliss. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
