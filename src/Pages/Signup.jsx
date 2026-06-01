import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card card fade-up">
        <div className="auth-header">
          <div className="auth-icon">🌍</div>
          <h2>Create Account</h2>
          <p>Join TrailBliss and start exploring</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row-2">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="John" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Doe" required />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" className="form-control" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Min. 8 characters" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" placeholder="Repeat password" required />
          </div>
          <label className="checkbox-label" style={{ marginTop: 4 }}>
            <input type="checkbox" required />
            I agree to the <Link to="/terms" className="auth-link">Terms</Link> and <Link to="/privacy" className="auth-link">Privacy Policy</Link>
          </label>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 12 }}>
            Create Account
          </button>
        </form>

        <p className="auth-switch" style={{ marginTop: 20 }}>
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
