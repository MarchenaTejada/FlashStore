import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const { isLoggedIn, userName, logout } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {

            let headerTop = document.querySelector('.header-top');
            let headerAll = document.querySelector('.header-all');
            const isScrolled = window.scrollY > 40;

            headerAll.classList.toggle('fixed', isScrolled);
            headerTop.classList.toggle('fixed', isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header-all">
            <div className="header-top">
                <p>Bienvenido a Flash Store</p>
                <ul>
                    <li><a href="https://wa.link/z9fg3q" target='_blank' rel='noreferrer'><i className="fa-solid fa-store"></i> Delivery 983 744 910 </a></li>
                    <li><Link to="/local"><i className="fa-solid fa-location-dot"></i> Nuestras Tiendas </Link></li>
                </ul>
            </div>
            <header>
                <div className="header-main">
                    <h1>
                        <label htmlFor="check" className="checkbtn">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                        <Link className='imgLogo' to={'/Home'}><img src='/logo.png' alt="Logo" /></Link>
                    </h1>
                    <form action="#" method="get">
                        <div className="search-container">
                            <input placeholder="Buscar" className="search-input" name="search" type="search" />
                            <svg className="search-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21l-5.197-5.197A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </form>
                    <div className="user-menu">
                        {isLoggedIn ? (
                            <div className="actions-container">
                                <button className="user-icon" onClick={toggleDropdown}>
                                    <i className="fa-solid fa-user"></i> ¡Bienvenido {userName}!
                                </button>
                                {isDropdownOpen && (
                                    <div className="actions">
                                        <Link to="/favorites" className="action-item">
                                            <i className="fa-solid fa-heart"></i> Favoritos
                                        </Link>
                                        <Link to="/settings" className="action-item">
                                            <i className="fa-solid fa-cog"></i> Configuración
                                        </Link>
                                        <button className="action-item" onClick={logout}>
                                            <i className="fa-solid fa-sign-out-alt"></i> Cerrar Sesión
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="action-item">
                                <i className="fa-solid fa-user"></i> Iniciar Sesión
                            </Link>
                        )}
                    </div>

                </div>
            </header>
            <nav>
                <input type="checkbox" id="check" />
                <ul>
                    <li><NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink></li>
                    <li><NavLink to="/catalogo" end className={({ isActive }) => (isActive ? "active" : "")}>Explorar</NavLink></li>
                    <li><NavLink to="/catalogo/smartphones" className={({ isActive }) => (isActive ? "active" : "")}>Smartphones</NavLink></li>
                    <li><NavLink to="/catalogo/smartwatches" className={({ isActive }) => (isActive ? "active" : "")}>Smartwatch</NavLink></li>
                    <li><NavLink to="/catalogo/tablets" className={({ isActive }) => (isActive ? "active" : "")}>Tablets</NavLink></li>
                    <li><NavLink to="/catalogo/accesorios" className={({ isActive }) => (isActive ? "active" : "")}>Accesorios</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
