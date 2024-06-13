import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';

const Catalogo = () => {
  return (
    <>
    <Header />
    <main>
    <div className="products-container">
    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
    </div>
    </main>
    <Footer />
    </>
  );
}

export default Catalogo;
