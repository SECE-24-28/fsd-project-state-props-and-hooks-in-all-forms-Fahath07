import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <div className="page-hero">
        <h1>📬 Contact Us</h1>
        <p>We'd love to hear from you. Reach out anytime!</p>
      </div>

      <section className="section">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.75, marginTop: 8 }}>
              Have a question about a package or need help planning your trip? Our team is here to help.
            </p>
            <div className="contact-cards">
              {[
                { icon: "📍", title: "Our Office", detail: "Palani Road, Dharapuram,Tiruppur, Tamil Nadu 638657" },
                { icon: "📞", title: "Phone", detail: "+91 6369386812" },
                { icon: "✉️", title: "Email", detail: "adventure@trailbliss.in" },
                { icon: "🕐", title: "Working Hours", detail: "Mon–Sat, 9 AM – 7 PM" },
              ].map((c) => (
                <div className="contact-info-card" key={c.title}>
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <p>{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card contact-form-card">
            {sent ? (
              <div className="contact-sent">
                <div style={{ fontSize: "2.5rem" }}>✅</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 style={{ marginBottom: 24, color: "var(--navy)" }}>Send a Message</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Subject *</label>
                  <input type="text" className="form-control" placeholder="How can we help?" required />
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Message *</label>
                  <textarea className="form-control" placeholder="Write your message here..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 24, width: "100%" }}>
                  Send Message 📨
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
