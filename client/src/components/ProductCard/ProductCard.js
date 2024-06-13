import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <article className="product">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-background"></div>
      <div className="product-content">
        <h3 className="minimize product-name">{name}</h3>
        <p className="minimize product-price">S/ {price}</p>
        <button className="buy-btn"><span>Agregar al carrito</span></button>
      </div>
    </article>
  );
}

export default ProductCard;
