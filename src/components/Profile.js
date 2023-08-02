import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
    const { user, userEvents } = useContext(UserContext);
    // Utility function to format date.
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };
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
                                <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{user.fullname}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm font-semibold text-gray-900 sm:mt-0 sm:col-span-2">{user.phone}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                {/* User Events Section */}
                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Your Events ({userEvents.length})</h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 sm:px-6">
                        {userEvents.length > 0 ? (
                            <div className="mb-4">
                                {userEvents?.map((event) => {
                                    const { _id, eventId, eventTitle, eventDesc, eventPeople, eventPrice, createdAt } = event;
                                    const createdDate = formatDate(createdAt);
                                    return (
                                        <div key={_id} className="border-b border-gray-200 py-5">
                                            <div className="flex justify-between items-center flex-wrap">
                                                <h4 className="text-base font-medium text-gray-900">{eventTitle.length > 50 ? eventTitle.slice(0, 50) + "..." : eventTitle}</h4>
                                                <p className="text-slate-600 font-semibold text-sm py-1">{createdDate}</p>
                                            </div>
                                            <p className='text-sm font-medium text-gray-700 mt-2'>{eventDesc.length > 150 ? eventDesc.slice(0, 150) + "..." : eventDesc}</p>
                                            <div className="flex items-center my-1">
                                                <p className="text-slate-500 mr-5 text-sm font-medium">People: <span className='text-slate-800 font-semibold text-base'>{eventPeople}</span></p>
                                                <p className="text-slate-500 mr-5 text-sm font-medium">Price: <span className='text-slate-800 font-semibold text-base'>{eventPrice} <span className='text-xs'>&#8360;</span></span></p>
                                            </div>
                                            <Link to={`/event/${eventId}`} className="inline-flex items-center text-blue-500 hover:text-blue-700">Learn More<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></Link>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="py-5">No events found. Your register events display here.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;