import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPassword() {
  return (
    <div className="auth-page">
      <div className="auth-card card fade-up">
        <div className="auth-header">
          <div className="auth-icon">🔑</div>
          <h2>Reset Password</h2>
          <p>Enter your email and we'll send you a reset link</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="you@example.com" required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>
            Send Reset Link
          </button>
        </form>

        <p className="auth-switch" style={{ marginTop: 24 }}>
          Remembered it? <Link to="/login" className="auth-link">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
