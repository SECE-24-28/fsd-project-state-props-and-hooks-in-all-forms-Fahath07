import { useState } from "react";
import "./ApplicationForm.css";

function ApplicationForm() {
  const [tab, setTab] = useState("book");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success-page">
        <div className="form-success-card card fade-up">
          <div className="success-icon">🎉</div>
          <h2>Thank You!</h2>
          <p>Your {tab === "book" ? "booking application" : "enquiry"} has been received. Our team will contact you within 24 hours.</p>
          <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="page-hero">
        <h1>📋 Book Your Trip</h1>
        <p>Fill in your details and we'll craft the perfect itinerary for you</p>
      </div>

      <section className="section">
        <div className="container form-container">
          <div className="form-tabs">
            <button className={`form-tab ${tab === "book" ? "active" : ""}`} onClick={() => setTab("book")}>
              ✈️ Booking Application
            </button>
            <button className={`form-tab ${tab === "enquiry" ? "active" : ""}`} onClick={() => setTab("enquiry")}>
              💬 General Enquiry
            </button>
          </div>

          <div className="card form-card fade-up">
            {tab === "book" ? (
              <form onSubmit={handleSubmit}>
                <h3 className="form-section-title">Personal Details</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" className="form-control" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="form-group">
                    <label>Number of Travelers *</label>
                    <select className="form-control" required>
                      <option value="">Select</option>
                      {[1,2,3,4,5,"6+"].map(n => <option key={n}>{n} {n === 1 ? "Person" : "People"}</option>)}
                    </select>
                  </div>
                </div>

                <div className="divider" />
                <h3 className="form-section-title">Trip Details</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Preferred Package *</label>
                    <select className="form-control" required>
                      <option value="">Select a package</option>
                      <optgroup label="🌿 Nature">
                        <option>Tea Hill Retreat – Munnar</option>
                        <option>Hill Station Getaway – Kodaikanal</option>
                        <option>Nilgiri Explorer – Ooty</option>
                        <option>Coffee Plantation Tour – Coorg</option>
                        <option>Wayanad Wilderness – Wayanad</option>
                        <option>Spiti Valley Expedition – Spiti</option>
                        <option>Shimla Snow Escape – Shimla</option>
                        <option>Goa Sunset Beach – Goa</option>
                      </optgroup>
                      <optgroup label="🛶 Leisure">
                        <option>Backwater Houseboat – Alleppey</option>
                        <option>Cliff Beach Escape – Varkala</option>
                        <option>Taj Mahal Heritage Tour – Agra</option>
                        <option>Pink City Royal Tour – Jaipur</option>
                        <option>Lake City Luxury – Udaipur</option>
                        <option>Andaman Island Bliss – Andaman</option>
                        <option>French Quarter Retreat – Pondicherry</option>
                        <option>Old Delhi Heritage Walk – Delhi</option>
                      </optgroup>
                      <optgroup label="🧗 Adventure">
                        <option>Western Ghats Trek</option>
                        <option>Manali Mountain Rush – Manali</option>
                        <option>Rishikesh River Rush – Rishikesh</option>
                        <option>Ladakh Bike Expedition – Ladakh</option>
                        <option>Auli Skiing Adventure – Auli</option>
                        <option>Corbett Safari – Jim Corbett</option>
                        <option>Paramotoring Experience – Coimbatore</option>
                        <option>Rann of Kutch Camp – Gujarat</option>
                      </optgroup>
                      <optgroup label="🏛️ Cultural">
                        <option>Varanasi Spiritual Journey – Varanasi</option>
                        <option>Hampi Ruins Explorer – Hampi</option>
                        <option>Mysore Palace & Culture – Mysore</option>
                        <option>Golden Temple Pilgrimage – Amritsar</option>
                      </optgroup>
                      <optgroup label="🧘 Wellness">
                        <option>Kerala Ayurveda Retreat – Thrissur</option>
                        <option>Yoga & Meditation Retreat – Rishikesh</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Travel Date *</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select className="form-control">
                      <option>Under ₹2,000</option>
                      <option>₹2,000 – ₹3,000</option>
                      <option>₹3,000 – ₹5,000</option>
                      <option>Above ₹5,000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Trip Type</label>
                    <select className="form-control">
                      <option>Family</option>
                      <option>Couple</option>
                      <option>Solo</option>
                      <option>Friends Group</option>
                      <option>Corporate</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Special Requests / Notes</label>
                  <textarea className="form-control" placeholder="Any dietary requirements, accessibility needs, or special requests..." />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
                  Submit Application ✈️
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="form-section-title">Send Us a Message</h3>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Subject *</label>
                  <input type="text" className="form-control" placeholder="What's this about?" required />
                </div>
                <div className="form-group" style={{ marginTop: 16 }}>
                  <label>Message *</label>
                  <textarea className="form-control" style={{ minHeight: 160 }} placeholder="Tell us how we can help you..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
                  Send Enquiry 💬
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplicationForm;
