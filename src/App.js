import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
// Components.
import Navbar from './components/Navbar';
import EventListing from './components/EventListing';
import Profile from './components/Profile';
import EventDetails from './components/EventDetails';
import Confirmation from './components/Confirmation';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import Page404 from './components/Page404';

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute
            user={user}
            route={<EventListing />}
            navigateTo='/login'
          />}
        />
        <Route path="/profile" element={
          <ProtectedRoute
            user={user}
            route={<Profile />}
            navigateTo='/login'
          />}
        />
        <Route path="/event/:id" element={
          <ProtectedRoute
            user={user}
            route={<EventDetails />}
            navigateTo='/login'
          />}
        />
        <Route path="/confirmation" element={
          <ProtectedRoute
            user={user}
            route={<Confirmation />}
            navigateTo='/login'
          />}
        />
        <Route path="/register" element={
          <ProtectedRoute
            user={!user}
            route={<Register />}
            navigateTo='/'
          />}
        />
        <Route path="/login" element={
          <ProtectedRoute
            user={!user}
            route={<Login />}
            navigateTo='/'
          />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// Protected-Route-Component.
function ProtectedRoute({ user, route, navigateTo }) {
  return user ? route : <Navigate to={navigateTo} replace={true} />
};

// Todo's
/*
1: eventListing page design and add a link to eventDetail. ✔
2: eventDetail page design and add a link to Register of event. ✔
3: After Register successfully redirect to confirmation page. ✔
4: Create User Events Context and show register events of user. ✔
5: Profile page design and show register events of user and user details. ✔
6: Hide Registerevent if already registered. ✔
(Complete)
*/

// Future Features and updations.
/*
 {
    eventId: 1,
    eventTitle: "Conference on Artificial Intelligence",
    eventDescription: "Join us for a conference exploring the latest advancements in Artificial Intelligence.",
    eventCategory: "Technology",
    eventDate: "2023-08-15",
    eventLocation: "Virtual",
    eventOrganizer: "AI Innovations Inc.",
  },
  {
    eventId: 2,
    eventTitle: "Music Festival",
    eventDescription: "Experience the best music from around the world at our annual music festival.",
    eventCategory: "Entertainment",
    eventDate: "2023-09-25",
    eventLocation: "City Park",
    eventOrganizer: "Music Fest Events",
  },
  {
    eventId: 3,
    eventTitle: "Wellness Retreat",
    eventDescription: "Recharge and rejuvenate with our wellness retreat focusing on mindfulness and self-care.",
    eventCategory: "Health & Wellness",
    eventDate: "2023-10-10",
    eventLocation: "Mountain Resort",
    eventOrganizer: "Mindful Living Retreats",
  },
*/