import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventListing from './components/EventListing';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Confirmation from './components/Confirmation.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventListing />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;