import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
    // Confirmation message after successful registration
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center">Registration Confirmation</h1>
            <div className="bg-green-100 border border-green-500 rounded p-4 text-center my-4">
                <p className="text-green-700">Your registration has been successful. Thank you!</p>
            </div>
            <div className='mx-auto flex justify-center items-center'>
                <Link to="/" className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded text-sm px-5 py-2 shadow-md shadow-slate-500">Back to Homepage</Link>
            </div>
        </div>
    );
}

export default Confirmation;