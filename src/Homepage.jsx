import "./Home.css";
import trailbliss from "./Assets/Images/trailbliss.png";
import heroTitle from "./Assets/Images/herotitle.png";

function Homepage() {
  return (
    <>
      <header className="site-header">
        <div className="brand">
          <img src={trailbliss} alt="TrailBliss logo" className="logo" />
          <div>
            <h1>
              Trail<span>Bliss</span>
            </h1>
            <p>Explore more. Live free.</p>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#packages">Packages</a>
          <a href="#destinations">Destination</a>
          <a href="#about">About</a>
          <a href="#login">Login</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-banner">
            <div className="hero-inner">
              <div className="hero-copy">
                <span className="eyebrow">
                  Discover the world beyond limits
                </span>

                <h1>
                  <img
                    src={heroTitle}
                    alt="TrailBliss — Luxury tours and unforgettable adventures"
                    className="hero-title-img"
                  />
                </h1>

                <p className="hero-description">
                  Tailor-made packages, trusted local partners, and transparent
                  pricing. Find slow escapes or action-packed trips with
                  TrailBliss.
                </p>

                <div className="hero-ctas">
                  <a className="button" href="#packages">
                    Explore Packages
                  </a>
                  <a className="button secondary" href="#contact">
                    Get in touch
                  </a>
                </div>
              </div>

              <div className="hero-cards" id="destinations">
                <article className="destination-card munnar-card">
                  <span>Munnar</span>
                </article>

                <article className="destination-card alleppey-card">
                  <span>Alleppey</span>
                </article>

                <article className="destination-card kodaikanal-card">
                  <span>Kodaikanal</span>
                </article>
              </div>
            </div>

            <div className="search-overlay">
              <form className="search-panel">
                <div className="search-field">
                  <label htmlFor="location">Location</label>
                  <input id="location" type="text" placeholder="City or region" />
                </div>

                <div className="search-field">
                  <label htmlFor="travelers">Travelers</label>
                  <input id="travelers" type="text" placeholder="2 Adults" />
                </div>

                <div className="search-field">
                  <label htmlFor="date">Date</label>
                  <input id="date" type="date" />
                </div>

                <div className="search-field">
                  <label htmlFor="budget">Budget</label>
                  <input id="budget" type="text" placeholder="₹2,000 - ₹3,000" />
                </div>

                <button className="search-button">Search</button>
              </form>
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="section-heading">
            <p>Time for</p>
            <h2>Adventure</h2>
            <p className="section-description">
              Choose a package that fits your travel pace and budget.
            </p>
          </div>

          <div className="package-grid">
            <div className="package-card">
              <div className="package-image munnar-image"></div>
              <div className="package-details">
                <p className="package-location">Munnar Escape</p>
                <h3>Tea Hill Retreat</h3>
                <p>4 days of tea estate views, walks, and local food.</p>
                <span className="package-price">₹2,499</span>
              </div>
            </div>

            <div className="package-card">
              <div className="package-image alleppey-image"></div>
              <div className="package-details">
                <p className="package-location">Alleppey Cruise</p>
                <h3>Backwater Houseboat</h3>
                <p>2 nights on the water with meals and guided village tours.</p>
                <span className="package-price">₹2,899</span>
              </div>
            </div>

            <div className="package-card">
              <div className="package-image kodaikanal-image"></div>
              <div className="package-details">
                <p className="package-location">Kodaikanal Trek</p>
                <h3>Hill Station Getaway</h3>
                <p>3 days of lakes, waterfalls, and cool mountain air.</p>
                <span className="package-price">₹2,199</span>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="section-heading">
            <p>Real stories</p>
            <h2>Traveller reviews</h2>
          </div>

          <div className="testimonial-grid">
            <div>"The Munnar trip was beautifully organized and relaxing." — Asha</div>
            <div>"Houseboat experience was once in a lifetime." — Rohit</div>
            <div>"Excellent local guides and hospitality." — Priya</div>
          </div>
        </section>

        <section className="newsletter">
          <div>
            <h3>Get travel deals</h3>
            <p>Subscribe and receive curated offers and seasonal packages.</p>
          </div>
          <div className="cta">
            <input className="rounded-lg border px-4 py-2" placeholder="Your email" />
            <button className="btn-accent">Subscribe</button>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <div className="about-copy">
              <span className="eyebrow">About us</span>
              <h2>TravelBliss makes planning easy and reliable.</h2>
              <p>
                We offer ready-to-book packages with clear pricing, local
                support, and flexible options for families, couples, and solo
                travelers.
              </p>
            </div>

            <div className="features">
              <div className="feature-card">
                <h3>Flexible itineraries</h3>
                <p>Adjust each package to match your schedule and preferences.</p>
              </div>
              <div className="feature-card">
                <h3>Trusted service</h3>
                <p>Work with a travel team available before and during your trip.</p>
              </div>
              <div className="feature-card">
                <h3>Clear pricing</h3>
                <p>No hidden costs—just a simple package and booking process.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" id="login">
          <p>Login to manage your bookings and see available offers.</p>
        </footer>
      </main>
    </>
  );
}

export default Homepage;
