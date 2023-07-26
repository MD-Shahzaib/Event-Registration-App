import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  // Fetch event details for the specific eventId from database.
  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  if (!event) { return <div>Loading...</div> }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p>{event.description}</p>
      <Link to={`/register/${event.id}`} className="text-blue-500">Register</Link>
    </div>
  );
}

export default EventDetails;