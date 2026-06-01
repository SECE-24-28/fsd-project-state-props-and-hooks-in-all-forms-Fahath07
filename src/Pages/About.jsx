import { Link } from "react-router-dom";
import adventure from "../Assets/Images/adventure.jpg";
import "./About.css";

const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations" },
  { value: "5+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
];

const team = [
  { name: "Fahath Al Salam ", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Eswara Kumar", role: "Lead Travel Curator", emoji: "🧭" },
  { name: "Ahmed RIfaz", role: "Customer Experience", emoji: "💁‍♀️" },
];

function About() {
  return (
    <div>
      <div className="page-hero">
        <h1>🌿 About TrailBliss</h1>
        <p>We're a passionate team of travellers building unforgettable experiences</p>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission">
          <div className="about-img" style={{ backgroundImage: `url(${adventure})` }} />
          <div className="about-copy">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Born from a love of travel</h2>
            <p className="section-sub" style={{ maxWidth: "100%" }}>
              TrailBliss was founded in 2026 by a group of passionate travellers who believed that
              exploring India's incredible landscapes should be accessible, affordable, and stress-free.
            </p>
            <p style={{ marginTop: 16, color: "var(--muted)", lineHeight: 1.8 }}>
              From the misty hills of Munnar to the tranquil backwaters of Alleppey, we've spent years
              building relationships with trusted local partners to bring you authentic, curated experiences
              with complete transparency in pricing.
            </p>
            <Link to="/packages" className="btn btn-primary" style={{ marginTop: 28 }}>
              Explore Our Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section section-sm">
        <div className="container">
          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title">Our Values</h2>
          <div className="grid-3" style={{ marginTop: 32 }}>
            {[
              { icon: "🌱", title: "Sustainable Travel", desc: "We partner with eco-conscious operators and promote responsible tourism." },
              { icon: "🤝", title: "Community First", desc: "We support local communities by working with local guides and businesses." },
              { icon: "💎", title: "Quality Assured", desc: "Every package is personally vetted by our team for quality and safety." },
            ].map((v) => (
              <div className="card value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <p className="section-label">The People Behind TrailBliss</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="grid-4" style={{ marginTop: 32 }}>
            {team.map((m) => (
              <div className="card team-card" key={m.name}>
                <div className="team-avatar">{m.emoji}</div>
                <h4>{m.name}</h4>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
