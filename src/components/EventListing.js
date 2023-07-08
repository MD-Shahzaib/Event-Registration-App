import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EventListing() {
    const [events, setEvents] = useState([]);

    // useEffect(() => {
    //     fetch('/api/events')
    //         .then(response => {
    //             setEvents(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Event Listing</h1>
            <ul className="space-y-4">
                {events.map(event => (
                    <li key={"event.id"}>
                        <Link to={`/event/${"event.id"}`} className="text-blue-500">{"event.title"}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventListing;
