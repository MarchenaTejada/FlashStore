import React, { useState, useContext } from 'react';
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './LoginRegister.css';
import { AuthContext } from '../../context/AuthContext.js';

const LoginRegister = () => {
    const { login } = useContext(AuthContext);
    const [action, setAction] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [registerData, setRegisterData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const registerLink = () => {
        setAction(' activeLogin');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (action === ' activeLogin') {
            setRegisterData({
                ...registerData,
                [name]: value
            });
        } else {
            setLoginData({
                ...loginData,
                [name]: value
            });
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Importante para enviar cookies
            body: JSON.stringify({
                email: loginData.username,
                password: loginData.password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    console.log('Datos recibidos:', data); // Añade esta línea para depurar
                    login(data.usuario_id, data.token);
                    navigate('/home');
                }
            })
            .catch(err => setError(err.message));
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Importante para enviar cookies
            body: JSON.stringify({
                password: registerData.password,
                email: registerData.email,
                apellido: registerData.apellido,
                nombre: registerData.nombre,
                direccion: null,
                telefono: registerData.telefono
            })
        })
            
            .catch(err => setError(err.message));
    };

    return (
        <>
            <div className={`wrapper${action}`}>
                <div className="form-box login">
                    <form className='formLoginRegister' onSubmit={handleLoginSubmit}>
                        <Link className='imgLogoLogin' to={'/Home'}><img src='./logo.png' alt="Logo" /></Link>
                        <h1>Inicio de sesión</h1>
                        <div className="input-box">
                            <input type="text" name="username" placeholder='Nombre de usuario' value={loginData.username} onChange={handleInputChange} required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder='Contraseña' value={loginData.password} onChange={handleInputChange} required />
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Recordarme</label>
                            <a href="#">Olvidaste tu contraseña?</a>
                        </div>

                        <button type="submit">Inicia sesión</button>

                        {error && <p className="error">{error}</p>}

                        <div className="register-link">
                            <p>No dispones de una cuenta? <a href="#" onClick={registerLink}>Registrate</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <form onSubmit={handleRegisterSubmit} className='formLoginRegister'>
                        <Link className='imgLogoLogin' to={'/Home'}><img src='./logo.png' alt="Logo" /></Link>
                        <h1>Registro</h1>
                        <div className="input-box">
                            <input type="text" name="nombre" placeholder='Nombres' value={registerData.nombre} onChange={handleInputChange} required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="text" name="apellido" placeholder='Apellidos' value={registerData.apellido} onChange={handleInputChange} required />
                            <FaUser className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="email" name="email" placeholder='Correo electrónico' value={registerData.email} onChange={handleInputChange} required />
                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="tel" name="telefono" placeholder='Telefono' value={registerData.telefono} onChange={handleInputChange} required />
                            <FaPhoneAlt className='icon' />
                        </div>
                        <div className="input-box">
                            <input type="password" name="password" placeholder='Contraseña' value={registerData.password} onChange={handleInputChange} required />
                            <FaLock className='icon' />
                        </div>

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Estoy de acuerdo con los terminos y condiciones</label>
                        </div>
                        
                        <button type="submit">Registro</button>

                        {error && <p className="error">{error}</p>}

                        <div className="register-link">
                            <p>Ya tenías una cuenta? <a href="#" onClick={loginLink}>Inicia sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <Link to="/Home" className='buttonVolver'> <div className="arrow">&lt;</div> Volver a la página principal</Link>
        </>
    );
}

export default LoginRegister;
