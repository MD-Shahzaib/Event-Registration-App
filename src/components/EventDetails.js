import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function EventDetails() {

    // Fetch event details for the specific eventId from the backend API or database using useEffect and useState hooks
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    useEffect(() => {
        fetch(`/api/events/${id}`)
            .then(response => { setEvent(response.data) })
            .catch(error => { console.error(error) });
    }, [id]);

    if (!event) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <p>{event.description}</p>
            <Link to={`/register/${event.id}`} className="text-blue-500">Register</Link>
        </div>
    );
}

export default EventDetails;











// After backend Setup code.

/*
import React, { useState, useEffect } from "react";

const EventDetails = ({ eventId }) => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/events/${eventId}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event details:", error));
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
*/