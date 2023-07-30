import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
// Components.
import Navbar from './components/Navbar';
import EventListing from './components/EventListing';
import Profile from './components/Profile';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Confirmation from './components/Confirmation';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        {user ?
          <>
            <Route path="/" element={<EventListing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/register/:id" element={<RegistrationForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
            {/* Error Handling Route */}
            <Route path="*" element={<div className='m-10 p-5 text-center text-xl font-normal rounded-md bg-blue-200 text-blue-500 hover:text-blue-600'>Sorry, the page you visited does not exist.<Link to='/' className='text-blue-600 hover:text-blue-700 font-semibold'> Back to Home</Link></div>} />
          </>
          :
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* Error Handling Route */}
            <Route path="*" element={<div className='m-10 p-5 text-center text-xl font-normal rounded-md bg-blue-200 text-blue-500 hover:text-blue-600'>Sorry, the page you visited does not exist.<Link to='/login' className='text-blue-600 hover:text-blue-700 font-semibold'> Back to Home</Link></div>} />
          </>
        }
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
2- frontend userContext. ✔
3- frontend authentication logic. ✔
4- Protected routing. (50% ✔)

Backend.
1- create RegisterEvent and auth model. ✔
2- create routes for eventRegistration and auth. ✔
3- backend authentication logic. ✔
4- middleware for Protected routing. ✔
*/