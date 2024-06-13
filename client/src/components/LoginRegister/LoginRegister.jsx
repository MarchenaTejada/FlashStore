import React, { useState } from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './LoginRegister.css';

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Inicio de sesión</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Nombre de usuario' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Recordarme</label>
                            <a href="#">Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit">Inicia sesión</button>

                    <div className="register-link">
                        <p>No dispones de una cuenta? <a href="#" onClick={registerLink}>Registrate</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registro</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Nombre de usuario' required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Correo electrónico' required />
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Contraseña' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Estoy de acuerdo con los terminos y condiciones</label>
                    </div>

                    <button type="submit">Registro</button>

                    <div className="register-link">
                        <p>Ya tenías una cuenta? <a href="#" onClick={loginLink}>Inicia sesión</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegister;