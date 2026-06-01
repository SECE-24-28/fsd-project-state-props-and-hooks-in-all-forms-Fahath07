import "./InfoPages.css";

function PrivacyPolicy() {
  return (
    <div>
      <div className="page-hero">
        <h1>🔒 Privacy Policy</h1>
        <p>Last updated: January 2025</p>
      </div>
      <section className="section">
        <div className="container info-container">
          <div className="card info-card">
            {[
              { title: "1. Information We Collect", body: "We collect information you provide directly, such as your name, email address, phone number, and travel preferences when you register, book a package, or contact us. We also collect usage data such as pages visited and time spent on our site." },
              { title: "2. How We Use Your Information", body: "We use your information to process bookings, send confirmations and updates, personalise your experience, improve our services, and send promotional offers (only with your consent)." },
              { title: "3. Information Sharing", body: "We do not sell your personal data. We share information only with trusted partners necessary to fulfil your booking (hotels, guides, transport providers) and as required by law." },
              { title: "4. Data Security", body: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information." },
              { title: "5. Cookies", body: "We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. You can control cookie settings through your browser." },
              { title: "6. Your Rights", body: "You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@trailbliss.in to exercise these rights." },
              { title: "7. Contact Us", body: "For any privacy-related questions, contact our Data Protection Officer at privacy@trailbliss.in or write to us at MG Road, Kochi, Kerala 682001." },
            ].map((s) => (
              <div className="info-section" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
