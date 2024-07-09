import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import LoaderPage from '../components/LoaderPage/LoaderPage';

const ProductPage = () => {
  const { productId } = useParams();
  const [selectedProduct, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/productos/producto/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => {
        console.error('Error fetching product:', error);
        setError(error);
      });
  }, [productId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!selectedProduct) {
    return <LoaderPage/>;
  }

  return <Catalogo product={selectedProduct[0]} />;
};

const Catalogo = ({ selectedProduct }) => {
  useEffect(() =>{
    document.title= selectedProduct.nombre
  }, [selectedProduct]); 
  return (
      <main className='main'>
        <ProductDescription product={selectedProduct} />
      </main>
  );
}

export default ProductPage;