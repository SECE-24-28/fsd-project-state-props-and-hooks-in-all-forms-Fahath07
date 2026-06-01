import { useState } from "react";
import "./AdminPanel.css";

const mockBookings = [
  { id: "TB001", name: "Asha Rajan", package: "Tea Hill Retreat", date: "2025-02-10", travelers: 2, amount: "₹4,998", status: "Confirmed" },
  { id: "TB002", name: "Rohit Menon", package: "Backwater Houseboat", date: "2025-02-14", travelers: 4, amount: "₹11,596", status: "Pending" },
  { id: "TB003", name: "Priya Sharma", package: "Hill Station Getaway", date: "2025-02-20", travelers: 2, amount: "₹4,398", status: "Confirmed" },
  { id: "TB004", name: "Arjun Das", package: "Adventure Trek", date: "2025-03-01", travelers: 3, amount: "₹10,497", status: "Cancelled" },
  { id: "TB005", name: "Sneha Pillai", package: "Cliff Beach Escape", date: "2025-03-05", travelers: 2, amount: "₹5,398", status: "Pending" },
];

const mockEnquiries = [
  { id: "EQ001", name: "Vikram Nair", email: "vikram@email.com", subject: "Group booking for 10 people", date: "2025-01-28", status: "New" },
  { id: "EQ002", name: "Meera Iyer", email: "meera@email.com", subject: "Custom honeymoon package", date: "2025-01-27", status: "Replied" },
  { id: "EQ003", name: "Suresh Kumar", email: "suresh@email.com", subject: "Cancellation request", date: "2025-01-26", status: "Resolved" },
];

const stats = [
  { icon: "📦", label: "Total Bookings", value: "128", change: "+12 this month", color: "#3B82F6" },
  { icon: "💰", label: "Revenue", value: "₹3.2L", change: "+8% vs last month", color: "#10B981" },
  { icon: "👥", label: "Total Travelers", value: "342", change: "+24 this month", color: "#8B5CF6" },
  { icon: "💬", label: "Enquiries", value: "47", change: "12 unread", color: "#F59E0B" },
];

const statusColors = {
  Confirmed: "badge-green",
  Pending: "badge-gold",
  Cancelled: "badge badge-red",
  New: "badge-gold",
  Replied: "badge-blue",
  Resolved: "badge-green",
};

function AdminPanel() {
  const [tab, setTab] = useState("bookings");
  const [bookings, setBookings] = useState(mockBookings);

  function updateStatus(id, status) {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status } : b)));
  }

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span>🧭</span>
          <strong>TrailBliss</strong>
          <small>Admin</small>
        </div>
        <nav className="admin-nav">
          {[
            { key: "bookings", icon: "📦", label: "Bookings" },
            { key: "enquiries", icon: "💬", label: "Enquiries" },
            { key: "packages", icon: "🗺️", label: "Packages" },
            { key: "settings", icon: "⚙️", label: "Settings" },
          ].map((item) => (
            <button
              key={item.key}
              className={`admin-nav-item ${tab === item.key ? "active" : ""}`}
              onClick={() => setTab(item.key)}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="admin-main">
        <div className="admin-topbar">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back, Admin 👋</p>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-avatar">A</span>
          </div>
        </div>

        {/* Stats */}
        <div className="admin-stats">
          {stats.map((s) => (
            <div className="admin-stat-card card" key={s.label}>
              <div className="stat-icon" style={{ background: s.color + "18", color: s.color }}>{s.icon}</div>
              <div>
                <p className="stat-label">{s.label}</p>
                <strong className="stat-value">{s.value}</strong>
                <p className="stat-change">{s.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="admin-tabs">
          {["bookings", "enquiries", "packages", "settings"].map((t) => (
            <button key={t} className={`admin-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Bookings Table */}
        {tab === "bookings" && (
          <div className="card admin-table-card">
            <div className="table-header">
              <h3>All Bookings</h3>
              <input type="text" className="form-control" placeholder="🔍 Search..." style={{ maxWidth: 220 }} />
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th><th>Customer</th><th>Package</th><th>Date</th><th>Travelers</th><th>Amount</th><th>Status</th><th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td><code>{b.id}</code></td>
                      <td>{b.name}</td>
                      <td>{b.package}</td>
                      <td>{b.date}</td>
                      <td>{b.travelers}</td>
                      <td><strong>{b.amount}</strong></td>
                      <td><span className={`badge ${statusColors[b.status]}`}>{b.status}</span></td>
                      <td>
                        <select
                          className="form-control"
                          style={{ padding: "4px 8px", fontSize: "0.8rem", width: "auto" }}
                          value={b.status}
                          onChange={(e) => updateStatus(b.id, e.target.value)}
                        >
                          <option>Confirmed</option>
                          <option>Pending</option>
                          <option>Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Enquiries */}
        {tab === "enquiries" && (
          <div className="card admin-table-card">
            <div className="table-header">
              <h3>Enquiries</h3>
            </div>
            <div className="table-wrap">
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Name</th><th>Email</th><th>Subject</th><th>Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {mockEnquiries.map((e) => (
                    <tr key={e.id}>
                      <td><code>{e.id}</code></td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.subject}</td>
                      <td>{e.date}</td>
                      <td><span className={`badge ${statusColors[e.status]}`}>{e.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Packages placeholder */}
        {tab === "packages" && (
          <div className="card admin-placeholder">
            <div style={{ fontSize: "3rem" }}>🗺️</div>
            <h3>Package Management</h3>
            <p>Add, edit, or remove travel packages from here.</p>
            <button className="btn btn-primary">+ Add New Package</button>
          </div>
        )}

        {/* Settings placeholder */}
        {tab === "settings" && (
          <div className="card admin-placeholder">
            <div style={{ fontSize: "3rem" }}>⚙️</div>
            <h3>Settings</h3>
            <p>Manage site settings, notifications, and admin accounts.</p>
            <button className="btn btn-primary">Open Settings</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
