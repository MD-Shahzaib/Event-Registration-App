import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventListing = () => {
  const [events, setEvents] = useState([]);
  // Fetch all events.
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events`);
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        alert('Internal Server Error on Fetching Events');
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <section className='bg-slate-200 '>
        <div className="container mx-auto px-4 py-10">
          {events.length !== 0 ?
            <>
              <h1 className="text-4xl font-semibold mb-8">All Event ({events.length})</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {events.map((event) => (
                  <div key={event._id} className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className='overflow-hidden'>
                      <img src={event.image} alt={event.title} className='w-full object-cover object-center hover:scale-150' />
                    </div>
                    <div className='p-3'>
                      <h3 className="text-lg font-bold">{event.title.length > 50 ? event.title.slice(0, 50) + "..." : event.title}</h3>
                      <p className="text-gray-600 my-2">{event.description.length > 150 ? event.description.slice(0, 150) + "..." : event.description}</p>
                      <Link to={`/event/${event._id}`} className="inline-flex items-center text-blue-500 hover:text-blue-700">Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
            :
            <p className="text-base font-semibold">No more events exist. Just wait until new events are added or check back later for upcoming events.</p>
          }
        </div >
      </section>
    </>
  );
}

export default EventListing;