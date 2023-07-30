import React, { useState, useEffect } from 'react';

const Profile = () => {

    const [userDetails, setUserDetails] = useState({
        name: "shayan",
        email: "shayan@gmail.com",
        phone: "000-333-555-8"
    });
    const [userPosts, setUserPosts] = useState([
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

    useEffect(() => {
        // Simulate fetching user details from the server (replace with actual API call)
        // You can use a state management library like Redux for handling user data
        const fetchUserData = async () => {
            try {
                const response = await fetch(''); // Replace with your API endpoint
                const data = await response.json();
                setUserDetails(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        // Simulate fetching user posts from the server (replace with actual API call)
        const fetchUserPosts = async () => {
            try {
                const response = await fetch(''); // Replace with your API endpoint
                const data = await response.json();
                setUserPosts(data);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        // fetchUserData();
        // fetchUserPosts();
    }, []);

    return (
        <div className="py-10 bg-gray-100">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200 sm:px-6">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.name}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Email</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.email}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userDetails.phone}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* User Posts Section */}
                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">User Posts</h3>
                        <div className="mt-4 space-y-4">
                            {userPosts.map((post) => (
                                <div key={post.id} className="border-b border-gray-200 py-4">
                                    <h4 className="text-lg font-medium text-gray-900">{post.title}</h4>
                                    <p className="text-gray-500 mt-2">{post.body}</p>
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