import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product, onClick }) => {
  const { nombre, precio, stock, imagen } = product;

  return (
    <article className="product"onClick={() => onClick(product)} > 
      <div className="product-image">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="product-background"></div>
      <div className="product-content">
        <h3 className="minimize product-name">{nombre}</h3>
        <p className="minimize product-price"> $ {precio}</p>
        <p className="minimize product-stock">Stock: {stock}</p>
        <button className="buy-btn"><span>Agregar al carrito</span></button>
      </div>
    </article>
  );
};

export default ProductCard;
