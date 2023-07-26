import React from 'react';

const Confirmation = () => {
    // Confirmation message after successful registration
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Registration Confirmation</h1>
            <div className="bg-green-100 border border-green-500 rounded p-4 text-center">
                <p className="text-green-700">Your registration has been successful. Thank you!</p>
            </div>
        </div>
    );
}

export default Confirmation;