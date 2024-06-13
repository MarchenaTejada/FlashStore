import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionLanding from '../components/SectionLanding/SectionLanding';
import Filter from '../components/Filter-products/Filter.js';
import ProductsCatalog from '../components/ProductsCatalog/ProductsCatalog.js';
import '../components/ProductsCatalog/ProductsCatalog.css';

const Catalogo = () => {
  return (
    <div className='body'>
    <Header />
    <main className='main'>
    <Filter />
    <div class="container">
    <header>
    <SectionLanding title={104} importantText={"productos"}/>
    </header>
    <ProductsCatalog/>
    </div>
    </main>
    <Footer />
    </div>
  );
}

export default Catalogo;
