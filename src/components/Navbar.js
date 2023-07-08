import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white">Event Listing</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
