import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductDescription from '../components/ProductDescription/ProductDescription';


const Catalogo = () => {
  return (
    <div className='body'>
    <Header />
    <main className='main'>
    <ProductDescription></ProductDescription>
    </div>
    </main>
    <Footer />
    </div>
  );
}

export default Catalogo;
