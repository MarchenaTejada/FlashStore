import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import GalleryPresentation from '../components/Banner/Banner';
import SectionLanding from "../components/SectionLanding/SectionLanding"


const ads = [
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery1.png", alt: 'smartWatch1' }
];


const Home = () => {
    return (
        <div className='body'>
            <Header />
            <main>
                <GalleryPresentation ads={ads} />
                <SectionLanding title="Lo mejor en" importantText="Smartphones" isVisible={true} />
                <div className="products-container">
                    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
                    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
                    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
                    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
                    <ProductCard name="Galaxy S22 Ultra" price="3999" image="https://i.ibb.co/L1RXQKS/Samsung-Galaxy-A32.webp" />
                </div>
                <SectionLanding title="Encuentra las mejores" importantText="Marcas" />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
