import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token');
        console.log('Token en cookies:', token);
        if (token) {
            fetch('http://localhost:8000/usuario', {
                method: 'GET',
                credentials: 'include', // Importante para enviar cookies
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Datos del usuario obtenidos:', data);
                if (data.user) {
                    setUser(data.user);
                    console.log('Usuario seteado:', data.user);
                }
            })
            .catch(error => console.error('Error fetching user:', error));
        }
    }, []);

    const login = (userData, token) => {
        console.log('Login userData:', userData);
        console.log('Login token:', token);
        setUser(userData);
        Cookies.set('token', token);
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('token');
        fetch('http://localhost:8000/logout', {
            method: 'POST',
            credentials: 'include' // Importante para enviar cookies
        });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
