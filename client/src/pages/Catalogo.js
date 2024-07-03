import React, { useState, useEffect } from 'react';
import SectionLanding from '../components/SectionLanding/SectionLanding';
import Filter from '../components/Filter-products/Filter';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog';
import '../components/ProductsCatalog/ProductsCatalog.css';
import LoaderPage from '../components/LoaderPage/LoaderPage';

const Catalogo = ({ category, title = 'Todos los productos' }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/productos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('No se han encontrado productos. Por favor, intente más tarde.');
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(product => product.categoria_id === parseInt(category, 10)));
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  if (error) {
    return <div className="main error-message"><img src='/img/error.png'></img>{error}</div>;
  }

  if (filteredProducts.length === 0 && products.length === 0) {
    return <LoaderPage />;
  }

  return (
    <main className='main-products'>
      <Filter />
      <div className="container">
        <header>
          <SectionLanding title={filteredProducts.length} importantText="productos" />
        </header>
        <ProductsCatalog products={filteredProducts} />
      </div>
    </main>
  );
}

export default Catalogo;
