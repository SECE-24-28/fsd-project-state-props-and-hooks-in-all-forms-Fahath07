import "./InfoPages.css";

function Terms() {
  return (
    <div>
      <div className="page-hero">
        <h1>📄 Terms & Conditions</h1>
        <p>Last updated: January 2025</p>
      </div>
      <section className="section">
        <div className="container info-container">
          <div className="card info-card">
            {[
              { title: "1. Acceptance of Terms", body: "By accessing and using TrailBliss services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
              { title: "2. Booking & Payment", body: "All bookings require a 30% advance payment to confirm. The remaining balance must be paid 7 days before the travel date. Prices are per person unless stated otherwise." },
              { title: "3. Cancellation Policy", body: "Cancellations 7+ days before travel: full refund. 3–7 days before: 80% refund. Within 48 hours: no refund. TrailBliss reserves the right to cancel trips due to unforeseen circumstances with a full refund." },
              { title: "4. Travel Documents", body: "Travellers are responsible for ensuring they have valid ID, permits, and any required documentation. TrailBliss is not liable for denied entry due to missing documents." },
              { title: "5. Liability", body: "TrailBliss acts as an agent for hotels, transport, and activity providers. We are not liable for any injury, loss, or damage caused by third-party service providers." },
              { title: "6. Changes to Itinerary", body: "TrailBliss reserves the right to modify itineraries due to weather, safety concerns, or force majeure events. We will provide suitable alternatives wherever possible." },
              { title: "7. Code of Conduct", body: "Travellers are expected to respect local customs, the environment, and fellow travellers. TrailBliss reserves the right to remove any traveller from a trip for misconduct without refund." },
              { title: "8. Governing Law", body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Kochi, Kerala." },
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

export default Terms;
