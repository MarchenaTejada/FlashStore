import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = Cookies.get('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData, navigate) => {
        setUser(userData);
        Cookies.set('user', JSON.stringify(userData));
        navigate('/home'); // Navega a Home después de iniciar sesión
    };

    const logout = (navigate) => {
        setUser(null);
        Cookies.remove('user');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
