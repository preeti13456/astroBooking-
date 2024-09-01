import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpacecraftList from './components/SpacecraftList.js/SpacecraftList';
import BookingForm from './components/SpacecraftList.js/BookingForm';
import UserDashboard from './components/SpacecraftList.js/UserDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpacecraftList />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;