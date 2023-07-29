import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('Token');
            if (!token) { setUser(null) };
            const authToken = JSON.parse(token).token;
            try {
                const response = await fetch("", {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
                const userData = await response.json();
                setUser(userData.data);
            } catch (error) {
                console.log(error);
                setUser(null);
            }
        }
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('UserInfo');
        setUser(null);
        window.location.reload();
    };

    return (
        <UserContext.Provider value={{ user, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};