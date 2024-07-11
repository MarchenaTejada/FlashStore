import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useCartContext } from '../../contexts/CartContext'; 
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Header.css';

const Header = () => {
    const { isLoggedIn, userName, logout } = useContext(AuthContext);
    const { products } = useCartContext();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerTop = document.querySelector('.header-top');
            const headerAll = document.querySelector('.header-all');
            const isScrolled = window.scrollY > 40;

            headerAll.classList.toggle('fixed', isScrolled);
            headerTop.classList.toggle('fixed', isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = () => setDropdownOpen(prev => !prev);
    const toggleCart = () => setCartOpen(prev => !prev);
    const toggleNav = () => setNavOpen(prev => !prev);
    const closeNav = () => setNavOpen(false);
    
    const totalItems = products.reduce((acc, product) => acc + product.cantidad, 0);

    return (
        <div className="header-all">
            <div className="header-top">
                <p>Bienvenido a Flash Store</p>
                <ul>
                    <li>
                        <a href="https://wa.link/z9fg3q" target='_blank' rel='noreferrer'>
                            <i className="fa-solid fa-store"></i> Delivery 983 744 910
                        </a>
                    </li>
                    <li>
                        <Link to="/local">
                            <i className="fa-solid fa-location-dot"></i> Nuestras Tiendas
                        </Link>
                    </li>
                </ul>
            </div>
            <header>
                <div className="header-main">
                    <h1>
                        <label htmlFor="check" className="checkbtn" onClick={toggleNav}>
                            <i className="fa-solid fa-bars"></i>
                        </label>
                        <Link className='imgLogo' to='/home'>
                            <img src='/logo.png' alt="Logo" />
                        </Link>
                    </h1>
                    <button className="nav-toggle action-item" onClick={toggleNav}>
                        <i className="fa-solid fa-bars"></i> Categorías
                    </button>
                    <form action="#" method="get">
                        <div className="search-container">
                            <input 
                                placeholder="Buscar" 
                                className="search-input" 
                                name="search" 
                                type="search" 
                            />
                            <svg className="search-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21l-5.197-5.197A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" strokeLinejoin="round" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </form>
                    <section className='user-bar'>
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
                                    Iniciar Sesión <i className="fa-solid fa-user"></i>
                                </Link>
                            )}
                        </div>
                        <div className="cart-menu">
                            <button className="cart-icon" onClick={toggleCart}>
                                Carrito <i className="fa-solid fa-shopping-cart"></i> {totalItems}
                            </button>
                            {isCartOpen && (
                                <div className="cart-dropdown">
                                    <Cart />
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </header>
            <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
                <input type="checkbox" id="check" />
                <ul>
                <li><NavLink to="/home" onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
                    <li><NavLink to="/catalogo" end onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Explorar</NavLink></li>
                    <li><NavLink to="/catalogo/smartphones" onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Smartphones</NavLink></li>
                    <li><NavLink to="/catalogo/smartwatches" onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Smartwatch</NavLink></li>
                    <li><NavLink to="/catalogo/tablets" onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Tablets</NavLink></li>
                    <li><NavLink to="/catalogo/accesorios" onClick={closeNav} className={({ isActive }) => isActive ? "active" : ""}>Accesorios</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
