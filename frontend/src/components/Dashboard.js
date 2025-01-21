import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import the new stylesheet

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>👨‍👩‍👧‍👦 Family Hub</h1>
      </header>
      
      <main className="dashboard-main">
        <div className="widget-grid">
          <div className="widget" onClick={() => navigate('/photos')}>
            📸 <span>Photo Gallery</span>
          </div>
          <div className="widget" onClick={() => navigate('/documents')}>
            📂 <span>Family Documents</span>
          </div>
          <div className="widget" onClick={() => navigate('/chat')}>
            💬 <span>Chat Room</span>
          </div>
          <div className="widget" onClick={() => navigate('/calendar')}>
            📅 <span>Event Calendar</span>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p>© 2025 Family Hub | Designed with ❤️</p>
      </footer>
    </div>
  );
}

export default Dashboard;
