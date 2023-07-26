import React, { useEffect, useState } from 'react';

function EventListing() {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Fetch all events.
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events`);
        const data = await response.json();
        setEvents(data);
        console.log("data", data);
      } catch (error) {
        console.error('Error Fetching Events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Event Listing</h1>
      {/* Display the list of events. */}
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EventListing;