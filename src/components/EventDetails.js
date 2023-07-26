import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = () => {
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
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600">{event.description}</p>
        <div className="mt-4">
          <Link
            to={`/register/${event._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;