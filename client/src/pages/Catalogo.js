import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionLanding from '../components/SectionLanding/SectionLanding';
import Filter from '../components/Filter-products/Filter.js';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog.js';
import '../components/ProductsCatalog/ProductsCatalog.css';
import { useState, useEffect } from 'react';
import LoaderPage from '../components/LoaderPage/LoaderPage.jsx';
import LoaderCard from '../components/LoaderCard/LoaderCard.jsx';

const Catalogo = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/productos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  if (products.length === 0) {
    return <LoaderPage />;
  }
  return (
    <div className='body'>
      <Header />
      <main className='main-products'>
        <Filter />
        <div class="container">
          <header>
            <SectionLanding title={products.length} importantText={"productos"} />
          </header>
          <ProductsCatalog products={products} />
          <LoaderCard/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Catalogo;
