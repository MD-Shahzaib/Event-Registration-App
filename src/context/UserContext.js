import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('Token');
                if (token) {
                    const response = await fetch("http://localhost:5000/api/users/profile", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (!response.ok) {
                        throw new Error('Failed to fetch user data');
                    }
                    const userData = await response.json();
                    setUser(userData.data);
                } else {
                    console.log("Invalid Token");
                    setUser(null);
                }
            } catch (error) {
                console.log(error);
                setUser(null);
            }
        }
        fetchUser();
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('Token');
        setUser(null);
        window.location.reload();
    };
    return (
        <UserContext.Provider value={{ user, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};