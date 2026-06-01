import { useState } from "react";
import "./InfoPages.css";

const faqs = [
  { q: "How do I book a package?", a: "Browse our packages, click 'Book Now', and fill out the application form. Our team will confirm your booking within 24 hours." },
  { q: "Can I customise a package?", a: "Absolutely! All our packages are fully customisable. Mention your preferences in the special requests field and we'll tailor it for you." },
  { q: "What is the cancellation policy?", a: "Cancellations made 7+ days before travel receive a full refund. Within 7 days, a 20% cancellation fee applies. No refund within 48 hours." },
  { q: "Are meals included in the packages?", a: "Most packages include breakfast. Some include all meals — this is clearly mentioned in each package description." },
  { q: "Is travel insurance included?", a: "Travel insurance is not included by default but we strongly recommend it. We can help you arrange it at an additional cost." },
  { q: "How do I make payment?", a: "We accept UPI, net banking, credit/debit cards, and bank transfers. A 30% advance is required to confirm the booking." },
  { q: "Can I travel solo?", a: "Yes! We have packages designed for solo travellers. Pricing is per person and we can arrange group join-ins if you prefer company." },
  { q: "Do you offer group discounts?", a: "Yes, groups of 6 or more receive a 10% discount. Contact us directly for corporate or large group bookings." },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <div className="page-hero">
        <h1>❓ Frequently Asked Questions</h1>
        <p>Everything you need to know about booking with TrailBliss</p>
      </div>

      <section className="section">
        <div className="container info-container">
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item card ${open === i ? "open" : ""}`} key={i}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
