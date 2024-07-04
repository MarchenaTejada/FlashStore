import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import GalleryPresentation from '../components/Banner/Banner';
import SectionLanding from "../components/SectionLanding/SectionLanding";
import LoaderCard from '../components/LoaderCard/LoaderCard';
import BrandsContainer from '../components/Brands/BrandsContainer';

const ads = [
    { image: "/panel-gallery1.png", alt: 'smartWatch1' },
    { image: "/panel-gallery2.png", alt: 'Xiaomi' },
    { image: "/panel-gallery3.png", alt: 'Samsung' }
];


const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/product/${product.producto_id}`);
      };
    

    useEffect(() =>{
        document.title='FlashStore'
      }, []); 

    useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then(response => response.json())
            .then(data => setProducts(data.filter(product => product.categoria_id === 1).slice(4, 8)))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
            <main>
                <GalleryPresentation ads={ads} />
                <SectionLanding title="Lo mejor en" importantText="Smartphones" isVisible={true} link="/Catalogo"/>
                <div className="products-container">
                    {
                        products.length === 0
                            ? Array.from({ length: 4 }).map(() => <LoaderCard />)
                            : products.map(product => (
                                <ProductCard key={product.producto_id} product={product} onClick={() => handleProductClick(product)} />
                            ))
                    }
                </div>
                <SectionLanding title="Encuentra las mejores" importantText="Marcas" />
                <BrandsContainer />
            </main>
    );
}

export default Home;
