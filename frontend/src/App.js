import React from 'react';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import './App.css'; // Tell webpack that Button.js uses these styles

function App() {
  return (
    <div>
      <Navigation />
      <Dashboard />
    </div>
  );
}

export default App;

