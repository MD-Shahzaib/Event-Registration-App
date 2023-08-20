import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userEvents, setUserEvents] = useState([]);

    // Get User Profile.
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('Token');
                if (token) {
                    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    const userData = await response.json();
                    setUser(userData.data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                setUser(null);
            }
        }
        fetchUser();
    }, []);

    // Logout User.
    const handleLogout = () => {
        localStorage.removeItem('Token');
        setUser(null);
        window.location.reload();
    };

    // Get User Events.
    useEffect(() => {
        const fetchUserEvents = async () => {
            try {
                const token = localStorage.getItem('Token');
                if (token) {
                    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/register/userevents`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch user events');
                    }
                    const userEventsData = await response.json();
                    setUserEvents(userEventsData);
                } else {
                    setUserEvents([]);
                }
            } catch (error) {
                setUserEvents([]);
            }
        }
        fetchUserEvents();
    }, []);

    return (
        <UserContext.Provider value={{ user, handleLogout, userEvents }}>
            {children}
        </UserContext.Provider>
    );
};