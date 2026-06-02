import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function ForgotPassword() {
  const [email, setEmail]       = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(30);

  // countdown timer that kicks in after the reset link is "sent"
  // gives users feedback and prevents spamming the button
  useEffect(() => {
    if (!submitted) return;
    if (countdown === 0) return;
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [submitted, countdown]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) { setError("Email is required"); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Enter a valid email address"); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="auth-page">
        <div className="auth-card card fade-up">
          <div className="auth-header">
            <div className="auth-icon">📬</div>
            <h2>Check your inbox</h2>
            <p>
              We sent a reset link to <strong>{email}</strong>. It may take a
              minute to arrive.
            </p>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 8 }}
            disabled={countdown > 0}
            onClick={() => {
              setSubmitted(false);
              setCountdown(30);
              setEmail("");
            }}
          >
            {countdown > 0 ? `Resend in ${countdown}s` : "Resend Link"}
          </button>
          <p className="auth-switch" style={{ marginTop: 20 }}>
            <Link to="/login" className="auth-link">← Back to Login</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card card fade-up">
        <div className="auth-header">
          <div className="auth-icon">🔑</div>
          <h2>Reset Password</h2>
          <p>Enter your email and we'll send you a reset link</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="reset-email">Email Address</label>
            <input
              id="reset-email"
              type="email"
              className={`form-control ${error ? "input-error" : ""}`}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
            />
            {error && <span className="error-msg">{error}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 8 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
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
