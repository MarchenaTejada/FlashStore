import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/productos/productos');
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        setError('No se han encontrado productos. Por favor, intente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.categoria_id === parseInt(category, 10));
    }

    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter(product => values.includes(product[key]));
      }
    });

    setFilteredProducts(filtered);
  }, [products, activeFilters, category]);

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const resetFiltersAndCategory = () => {
    setCategory(null);
    setActiveFilters({});
  };

  const getProduct = async (productId) => {
    try {
      const response = await axios.get(`/api/productos/producto/${productId}`);
      setSelectedProduct(response.data[0]);
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <ProductContext.Provider value={{
      products, 
      filteredProducts, 
      activeFilters, 
      handleFilterChange, 
      updateCategory, 
      resetFiltersAndCategory, 
      getProduct, 
      loading, 
      error, 
      selectedProduct, 
      quantity, 
      incrementQuantity, 
      decrementQuantity
    }}>
      {children}
    </ProductContext.Provider>
  );
};
