import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductCard from '../components/ProductCard/ProductCard';
import GalleryPresentation from '../components/Banner/Banner';
import SectionLanding from "../components/SectionLanding/SectionLanding";


const ads = [
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery1.png", alt: 'smartWatch1' }
];


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then(response => response.json())
            .then(data => setProducts(data.slice(9, 14)))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='body'>
            <Header />
            <main>
                <GalleryPresentation ads={ads} />
                <SectionLanding title="Lo mejor en" importantText="Smartphones" isVisible={true} />
                <div className="products-container">
                    {products.map(product => (
                        <ProductCard key={product.producto_id} product={product} />
                    ))}
                </div>
                <SectionLanding title="Encuentra las mejores" importantText="Marcas" />
            </main>
            <Footer />
        </div>
    );
}

export default Home;
