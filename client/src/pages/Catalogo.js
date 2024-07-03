import React, { useState, useEffect } from 'react';
import SectionLanding from '../components/SectionLanding/SectionLanding';
import Filter from '../components/Filter-products/Filter';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog';
import '../components/ProductsCatalog/ProductsCatalog.css';
import LoaderPage from '../components/LoaderPage/LoaderPage';

const Catalogo = ({ category, title = 'Todos los productos' }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/productos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the category prop
  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(product => product.categoria_id === parseInt(category, 10)));
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  // Show loader if products are still being fetched
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
