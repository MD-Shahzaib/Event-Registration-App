import React, { useEffect, useState } from 'react';

function EventListing() {
    /* 
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products`);
                const data = await response.json();
                setProduct(data);
                console.log("data", data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, []);
    */

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Event Listing</h1>
            {/* {product.map((item, index) => {return <h1>{item.name}</h1>})} */}
        </div>
    );
}

export default EventListing;






// After backend Setup code.
/*
import React, { useState, useEffect } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      // Display the list of events.
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
*/