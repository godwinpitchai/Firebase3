import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css"; // ✅ Import the external CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <nav className="nav-links">
          <Link to="/addstudent" className="nav-link">➕ Add Student</Link>
          <Link to="/studentlist" className="nav-link">📋 Student List</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
