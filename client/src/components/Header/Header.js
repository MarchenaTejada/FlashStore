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
                <li><a href="#"><i className="fa-solid fa-location-dot"></i> Nuestras Tiendas </a></li>
            </ul>
        </div>
        <header>
            <div className="header-main">
                <h1>
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    FlashStore
                </h1>
                <form action="#" method="get">
                    <label htmlFor="search-input">
                        <i className="fa-solid fa-search"></i>
                        <input id="search-input" type="text" placeholder="Buscar teléfonos, accesorios y más..." />
                        <i className="fa-solid fa-bars f"></i>
                    </label>
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
                <li><NavLink id="inicio" to="/home" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/catalogo" activeClassName="active">Todas las categorías</NavLink></li>
                <li><NavLink to="/catalogo-smartphone" activeClassName="active">Smartphones</NavLink></li>
                <li><NavLink to="catalogo-smartwatch" activeClassName="active">Smartwatch</NavLink></li>
                <li><NavLink to="catalogo-tablets" activeClassName="active">Tablets</NavLink></li>
                <li><NavLink to="catalogo-tablets" activeClassName="active">Accesorios</NavLink></li>
            </ul>
        </nav>
    </div>
  );
}

export default Header;
