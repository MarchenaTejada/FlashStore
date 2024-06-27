import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';

const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(response => response.json()) 
      .then(data => setProducts(data)) 
      .catch(error => console.error('Error fetching products:', error)); 
  }, []);

  const handleProductClick = product => {
    history.push(`/product/${product.producto_id}`);
  };

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.producto_id} product={product} />
      ))}
    </div>
  );
}

export default ProductsCatalog;
