import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PhotoGallery from './components/PhotoGallery';
import FamilyDocuments from './components/FamilyDocuments';
import ChatRoom from './components/ChatRoom';
import EventCalendar from './components/EventCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/photos" element={<PhotoGallery />} />
        <Route path="/documents" element={<FamilyDocuments />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/calendar" element={<EventCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
