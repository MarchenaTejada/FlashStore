import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('http://localhost:8000/usuario', { withCredentials: true });

                if (response.data[0].usuario_id) {
                    setIsLoggedIn(true);
                    setUserName(response.data[0].nombre);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        
        checkSession();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/login', { email, password }, { withCredentials: true });
            if (response.data.loggedIn) {
                setIsLoggedIn(true);
                setUserName(response.data.userName);
            }
        } catch (error) {
            console.error('Error de autenticación:', error);
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8000/logout', {}, { withCredentials: true });
            setIsLoggedIn(false);
            setUserName('');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
