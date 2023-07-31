import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
    const { user, handleLogout } = useContext(UserContext);
    const [userEvents, setUserEvents] = useState([
        {
            id: "1",
            title: "tisdtfle titlea sd  das ddt it4le",
            body: "boSimulate fetching user details from the server (replace with actual API call"
        },
        {
            id: "2",
            title: "tisdtfle titlea sd  das ddt it4le",
            body: "boSimulate fetching user details from the server (replace with actual API call"
        },
    ]);

    return (
        <div className="py-10 bg-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* User Profile Section */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Profile</h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200 sm:px-6">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.fullname}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.phone}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                {/* User Events Section */}
                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Events</h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 sm:px-6">
                        <div className="mb-4 space-y-4">
                            {userEvents.map((event) => (
                                <div key={event.id} className="border-b border-gray-200 py-4">
                                    <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                                    <p className="text-gray-500 mt-2">{event.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;