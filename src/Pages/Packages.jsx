import { useState } from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const allPackages = [
  // ── Nature ──
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    location: "Munnar, Kerala",
    title: "Tea Hill Retreat",
    desc: "4 days of misty tea estates, scenic walks, and authentic Kerala cuisine.",
    price: 2499,
    duration: "4 Days",
    category: "Nature",
    badge: "Popular",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    location: "Kodaikanal, Tamil Nadu",
    title: "Hill Station Getaway",
    desc: "3 days of lakes, waterfalls, and cool mountain air in the clouds.",
    price: 2199,
    duration: "3 Days",
    category: "Nature",
    badge: "New",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    location: "Ooty, Tamil Nadu",
    title: "Nilgiri Explorer",
    desc: "3 days exploring the Blue Mountains with iconic toy train rides.",
    price: 1999,
    duration: "3 Days",
    category: "Nature",
    badge: "",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    location: "Coorg, Karnataka",
    title: "Coffee Plantation Tour",
    desc: "3 days among lush coffee estates, waterfalls, and misty hills of Coorg.",
    price: 2299,
    duration: "3 Days",
    category: "Nature",
    badge: "Serene",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80",
    location: "Wayanad, Kerala",
    title: "Wayanad Wilderness",
    desc: "4 days of jungle trails, bamboo cottages, and tribal village visits.",
    price: 2799,
    duration: "4 Days",
    category: "Nature",
    badge: "",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    location: "Spiti Valley, HP",
    title: "Spiti Valley Expedition",
    desc: "6 days traversing high-altitude deserts, ancient monasteries, and star-lit skies.",
    price: 5999,
    duration: "6 Days",
    category: "Nature",
    badge: "Stunning",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
    location: "Shimla, Himachal Pradesh",
    title: "Shimla Snow Escape",
    desc: "4 days of colonial charm, snow-capped peaks, and pine forest walks.",
    price: 3299,
    duration: "4 Days",
    category: "Nature",
    badge: "",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    location: "Goa",
    title: "Goa Sunset Beach",
    desc: "5 days of golden beaches, Portuguese heritage, and vibrant nightlife.",
    price: 3499,
    duration: "5 Days",
    category: "Nature",
    badge: "",
  },

  // ── Leisure ──
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600&q=80",
    location: "Alleppey, Kerala",
    title: "Backwater Houseboat",
    desc: "2 nights drifting through serene backwaters with all meals included.",
    price: 2899,
    duration: "3 Days",
    category: "Leisure",
    badge: "Bestseller",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    location: "Varkala, Kerala",
    title: "Cliff Beach Escape",
    desc: "4 days of pristine cliff beaches, yoga sessions, and Ayurvedic spa treatments.",
    price: 2699,
    duration: "4 Days",
    category: "Leisure",
    badge: "Relaxing",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    location: "Agra, Uttar Pradesh",
    title: "Taj Mahal Heritage Tour",
    desc: "3 days exploring the wonder of the world, Mughal forts, and bazaars.",
    price: 2999,
    duration: "3 Days",
    category: "Leisure",
    badge: "Heritage",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80",
    location: "Jaipur, Rajasthan",
    title: "Pink City Royal Tour",
    desc: "4 days of majestic forts, palace dinners, and camel rides in Rajasthan.",
    price: 3799,
    duration: "4 Days",
    category: "Leisure",
    badge: "Royal",
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&q=80",
    location: "Udaipur, Rajasthan",
    title: "Lake City Luxury",
    desc: "4 days in the City of Lakes — palaces on water, sunset boat rides, and folk music.",
    price: 4299,
    duration: "4 Days",
    category: "Leisure",
    badge: "Luxury",
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    location: "Andaman Islands",
    title: "Andaman Island Bliss",
    desc: "5 days of crystal-clear waters, white sand beaches, and coral reef snorkelling.",
    price: 5499,
    duration: "5 Days",
    category: "Leisure",
    badge: "Paradise",
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?w=600&q=80",
    location: "Pondicherry",
    title: "French Quarter Retreat",
    desc: "3 days of colonial boulevards, beach promenades, and French-Tamil cuisine.",
    price: 1899,
    duration: "3 Days",
    category: "Leisure",
    badge: "",
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
    location: "Delhi",
    title: "Old Delhi Heritage Walk",
    desc: "3 days exploring Mughal architecture, spice markets, and street food trails.",
    price: 1799,
    duration: "3 Days",
    category: "Leisure",
    badge: "",
  },

  // ── Adventure ──
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
    location: "Western Ghats",
    title: "Western Ghats Trek",
    desc: "5 days of thrilling treks, jungle camping, and wildlife spotting.",
    price: 3499,
    duration: "5 Days",
    category: "Adventure",
    badge: "Thrilling",
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    location: "Manali, Himachal Pradesh",
    title: "Manali Mountain Rush",
    desc: "5 days of river rafting, snow treks, and Rohtang Pass adventure.",
    price: 4499,
    duration: "5 Days",
    category: "Adventure",
    badge: "Extreme",
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=600&q=80",
    location: "Rishikesh, Uttarakhand",
    title: "Rishikesh River Rush",
    desc: "3 days of white-water rafting, bungee jumping, and Ganga Aarti rituals.",
    price: 2999,
    duration: "3 Days",
    category: "Adventure",
    badge: "Bestseller",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1455156218388-5e61b526818b?w=600&q=80",
    location: "Ladakh, J&K",
    title: "Ladakh Bike Expedition",
    desc: "7 days riding through the world's highest motorable roads and frozen lakes.",
    price: 7999,
    duration: "7 Days",
    category: "Adventure",
    badge: "Epic",
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80",
    location: "Auli, Uttarakhand",
    title: "Auli Skiing Adventure",
    desc: "4 days of skiing on Himalayan slopes with certified instructors and snow camps.",
    price: 4999,
    duration: "4 Days",
    category: "Adventure",
    badge: "Winter",
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    location: "Jim Corbett, Uttarakhand",
    title: "Corbett Safari",
    desc: "3 days of jungle safaris, tiger spotting, and riverside camping.",
    price: 3299,
    duration: "3 Days",
    category: "Adventure",
    badge: "Wildlife",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1519981337-9e9b5e5e3e9d?w=600&q=80",
    location: "Coimbatore, Tamil Nadu",
    title: "Paramotoring Experience",
    desc: "2 days of paramotoring over scenic valleys with certified pilots.",
    price: 2499,
    duration: "2 Days",
    category: "Adventure",
    badge: "Unique",
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=600&q=80",
    location: "Rann of Kutch, Gujarat",
    title: "Rann of Kutch Camp",
    desc: "3 days of white salt desert camping, folk music nights, and stargazing.",
    price: 2999,
    duration: "3 Days",
    category: "Adventure",
    badge: "",
  },

  // ── Cultural ──
  {
    id: 25,
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
    location: "Varanasi, UP",
    title: "Varanasi Spiritual Journey",
    desc: "3 days of Ganga Aarti, temple walks, and ancient ghats exploration.",
    price: 1999,
    duration: "3 Days",
    category: "Cultural",
    badge: "Spiritual",
  },
  {
    id: 26,
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80",
    location: "Hampi, Karnataka",
    title: "Hampi Ruins Explorer",
    desc: "3 days among UNESCO world heritage ruins, boulders, and coracle rides.",
    price: 1799,
    duration: "3 Days",
    category: "Cultural",
    badge: "Heritage",
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    location: "Mysore, Karnataka",
    title: "Mysore Palace & Culture",
    desc: "3 days visiting the grand Mysore Palace, silk markets, and Dasara celebrations.",
    price: 1899,
    duration: "3 Days",
    category: "Cultural",
    badge: "",
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1600689617936-d3b7a285db08?w=600&q=80",
    location: "Amritsar, Punjab",
    title: "Golden Temple Pilgrimage",
    desc: "2 days at the sacred Golden Temple, Wagah Border ceremony, and Punjabi food trail.",
    price: 1599,
    duration: "2 Days",
    category: "Cultural",
    badge: "Sacred",
  },

  // ── Wellness ──
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80",
    location: "Thrissur, Kerala",
    title: "Kerala Ayurveda Retreat",
    desc: "5 days of traditional Ayurvedic treatments, yoga, and herbal healing.",
    price: 4999,
    duration: "5 Days",
    category: "Wellness",
    badge: "Healing",
  },
  {
    id: 30,
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    location: "Rishikesh, Uttarakhand",
    title: "Yoga & Meditation Retreat",
    desc: "5 days of sunrise yoga, meditation, and spiritual healing by the Ganges.",
    price: 3499,
    duration: "5 Days",
    category: "Wellness",
    badge: "Peaceful",
  },
];

const categories = ["All", "Nature", "Leisure", "Adventure", "Cultural", "Wellness"];

function Packages() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allPackages.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <div className="page-hero">
        <h1>🌿 All Packages</h1>
        <p>Explore our curated collection of 30+ travel experiences across India</p>
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

          <p className="pkg-count">{filtered.length} package{filtered.length !== 1 ? "s" : ""} found</p>

          {filtered.length === 0 ? (
            <div className="no-results">
              <p>😕 No packages found. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid-3" style={{ marginTop: 16 }}>
              {filtered.map((p) => (
                <div className="card pkg-card" key={p.id}>
                  <div
                    className="pkg-img"
                    style={{ backgroundImage: `url(${p.img})` }}
                  >
                    {p.badge && <span className="badge badge-gold">{p.badge}</span>}
                    <span className="pkg-duration">{p.duration}</span>
                    <span className="pkg-category-tag">{p.category}</span>
                  </div>
                  <div className="pkg-body">
                    <p className="pkg-location">📍 {p.location}</p>
                    <h3>{p.title}</h3>
                    <p className="pkg-desc">{p.desc}</p>
                    <div className="pkg-footer">
                      <span className="pkg-price">
                        ₹{p.price.toLocaleString()} <small>/person</small>
                      </span>
                      <Link to="/apply" className="btn btn-primary btn-sm">
                        Book Now
                      </Link>
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
