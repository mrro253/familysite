import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="greeting">Welcome, John!</h1>
      <div className="widget-container">
        <div className="widget">📸 Photo Gallery</div>
        <div className="widget">📂 Family Documents</div>
        <div className="widget">💬 Chat Room</div>
        <div className="widget">📅 Event Calendar</div>
      </div>
    </div>
  );
}

export default Dashboard;
