import { useState } from "react";
import { Link } from "react-router-dom";
import munnar from "../Assets/Images/munnar.jpg";
import alleppey from "../Assets/Images/alleppey.jpg";
import kodaikanal from "../Assets/Images/kodaikanal.jpg";
import adventure from "../Assets/Images/adventure.jpg";
import "./Packages.css";

const allPackages = [
  { id: 1, img: munnar, location: "Munnar, Kerala", title: "Tea Hill Retreat", desc: "4 days of misty tea estates, scenic walks, and authentic local cuisine.", price: 2499, duration: "4 Days", category: "Nature", badge: "Popular" },
  { id: 2, img: alleppey, location: "Alleppey, Kerala", title: "Backwater Houseboat", desc: "2 nights drifting through serene backwaters with all meals included.", price: 2899, duration: "3 Days", category: "Leisure", badge: "Bestseller" },
  { id: 3, img: kodaikanal, location: "Kodaikanal, TN", title: "Hill Station Getaway", desc: "3 days of lakes, waterfalls, and cool mountain air in the clouds.", price: 2199, duration: "3 Days", category: "Nature", badge: "New" },
  { id: 4, img: adventure, location: "Western Ghats", title: "Adventure Trek", desc: "5 days of thrilling treks, camping, and wildlife spotting.", price: 3499, duration: "5 Days", category: "Adventure", badge: "Thrilling" },
  { id: 5, img: munnar, location: "Ooty, Tamil Nadu", title: "Nilgiri Explorer", desc: "3 days exploring the Blue Mountains with toy train rides.", price: 1999, duration: "3 Days", category: "Nature", badge: "" },
  { id: 6, img: alleppey, location: "Varkala, Kerala", title: "Cliff Beach Escape", desc: "4 days of pristine beaches, yoga, and Ayurvedic wellness.", price: 2699, duration: "4 Days", category: "Leisure", badge: "Relaxing" },
];

const categories = ["All", "Nature", "Adventure", "Leisure"];

function Packages() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allPackages.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div className="page-hero">
        <h1>🌿 All Packages</h1>
        <p>Explore our curated collection of travel experiences across India</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="pkg-filters">
            <input
              type="text"
              className="form-control pkg-search"
              placeholder="🔍  Search destinations or packages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="filter-tabs">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-tab ${active === c ? "active" : ""}`}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <p>😕 No packages found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid-3" style={{ marginTop: 32 }}>
              {filtered.map((p) => (
                <div className="card pkg-card" key={p.id}>
                  <div className="pkg-img" style={{ backgroundImage: `url(${p.img})` }}>
                    {p.badge && <span className="badge badge-gold">{p.badge}</span>}
                    <span className="pkg-duration">{p.duration}</span>
                  </div>
                  <div className="pkg-body">
                    <p className="pkg-location">📍 {p.location}</p>
                    <h3>{p.title}</h3>
                    <p className="pkg-desc">{p.desc}</p>
                    <div className="pkg-footer">
                      <span className="pkg-price">₹{p.price.toLocaleString()} <small>/person</small></span>
                      <Link to="/apply" className="btn btn-primary btn-sm">Book Now</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Packages;
