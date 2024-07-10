import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (producto_id, cantidad) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find(product => product.producto_id === producto_id);
      if (existingProduct) {
        return prevProducts.map(product =>
          product.producto_id === producto_id ? { ...product, cantidad: cantidad } : product
        );
      } else {
        return [...prevProducts, { producto_id, cantidad }];
      }
    });
  };

  const removeProduct = (producto_id) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.producto_id !== producto_id));
  };

  const updateProductQuantity = (producto_id, cantidad) => {
    setProducts((prevProducts) => {
      return prevProducts.map(product =>
        product.producto_id === producto_id ? { ...product, cantidad } : product
      );
    });
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct, updateProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
