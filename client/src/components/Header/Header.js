import React, { useEffect, useContext } from 'react';
import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

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

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="header-all">
            <div className="header-top">
                <p>Bienvenido a Flash Store</p>
                <ul>
                    <li><a href="https://wa.link/z9fg3q" target='_blank' rel='noreferrer'><i className="fa-solid fa-store"></i> Delivery 983 744 910 </a></li>
                    <li><a href="#"><i className="fa-solid fa-location-dot"></i> Nuestras Tiendas </a></li>
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
                                <path d="M21 21l-5.197-5.197A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" strokeLinejoin="round" strokeLinecap="round" ></path>
                            </svg>
                        </div>
                    </form>
                    <div className="actions">
                        {user ? (
                            <div className="user-actions">
                                <span>{user.nombre}</span>
                                <div className="logout-link" onClick={handleLogout}>Cerrar Sesión</div>
                            </div>
                        ) : (
                            <Link to="/login"><i className="fa-solid fa-user"></i> Iniciar Sesión</Link>
                        )}
                        <a href="#"><i className="fa-solid fa-cart-shopping"></i> Carrito</a>
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
