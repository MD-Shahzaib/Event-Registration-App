import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const EventDetails = () => {

  const { userEvents } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('Token');
  const [event, setEvent] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');

  // Fetch event details for the specific eventId from the database.
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id, token]);

  // Handle RegisterEvent and save data into the database.
  const handleRegisterEvent = async () => {
    if (!selectedOption) {
      return alert('Please select a valid "People/Price" option.');
    };
    const [eventPeople, eventPrice] = selectedOption.split('/');
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          eventId: event._id,
          eventTitle: event.title,
          eventDesc: event.description,
          eventPeople: eventPeople,
          eventPrice: eventPrice
        })
      });
      if (response.ok) {
        alert('Event registered successfully!');
        navigate('/confirmation');
      } else {
        alert('Failed to register event. Please try again later.');
      }
    } catch (error) {
      alert("Internal Server error");
    }
  };

  return (
    <>
      {event ?
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt={event.title} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={event.image} loading="lazy" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">EVENT NAME</h2>
                <h1 className="text-gray-900 text-3xl title-font font-semibold mb-1">{event.title}</h1>
                <span className="flex items-center mb-4">
                  {[...Array(5)].map((_, index) => (<svg key={index} fill={`${index < 4 ? 'currentColor' : 'none'}`} className={`w-4 h-4 text-blue-500 ${index < 4 ? 'mr-1' : ''}`} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>))}
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <p className="leading-relaxed">{event.description}</p>
                <div className="flex items-center border-b-2 border-gray-100 py-4">
                  <span className="mr-2 font-medium">People/Price</span>
                  <div className="relative">
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className="rounded border appearance-none border-gray-300 focus:outline-none focus:ring-blue-200 focus:border-blue-500 py-1 pl-2 pr-8 font-semibold text-sm">
                      <option value="">Select People/Price</option>
                      <option value="1000/50000">1000/50000</option>
                      <option value="2000/100000">2000/100000</option>
                      <option value="5000/300000">5000/300000</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"></path></svg></span>
                  </div>
                </div>
                <div className="flex justify-between items-center flex-wrap">
                  <button
                    onClick={handleRegisterEvent}
                    disabled={userEvents.some(eid => eid.eventId === event._id)}
                    className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-2 px-5 my-4 rounded focus:outline-none disabled:bg-blue-400`}>
                    {userEvents.some(eid => eid.eventId === event._id) ? "Registered" : "Register"}
                  </button >
                  {userEvents.some(eid => eid.eventId === event._id) && <span className='text-green-600 font-semibold text-lg bg-green-200 py-2 px-5 rounded'>Event Registered</span>}
                </div>
              </div>
            </div>
          </div >
        </section >
        :
        <div className='m-5 text-center'>Loading...</div>
      }
    </>
  );
}

export default EventDetails;