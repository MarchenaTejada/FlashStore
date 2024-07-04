import React, { useEffect } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
                        <Link className='imgLogo' to={'/Home'}><img src='/logo.png'></img></Link>
                    </h1>
                    <form action="#" method="get">
                        <div class="search-container">
                            <input placeholder="Buscar" class="search-input"name="search" type="search"/>
                            <svg class="search-icon" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21l-5.197-5.197A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" stroke-linejoin="round" stroke-linecap="round" ></path>
                            </svg>
                        </div>
                    </form>
                    <div className="actions">
                        <Link to="/login"><i className="fa-solid fa-user"></i> Iniciar Sesión</Link> |
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
