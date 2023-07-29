import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components.
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import EventListing from './components/EventListing';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Confirmation from './components/Confirmation.js';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventListing />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<RegistrationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



// Todo's
/*
Frontend.
1- create (register, login, profile) pages. ✔
2- frontend authentication logic.
3- Protected routing.

Backend.
1- create RegisterEvent and auth model. ✔
2- create routes for eventRegistration and auth. ✔
3- backend authentication logic. ✔
4- middleware for Protected routing. ✔
*/