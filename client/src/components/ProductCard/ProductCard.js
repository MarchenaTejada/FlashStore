import React from 'react';
import './ProductCard.css';
import Tag from '../Tag/Tag';

const ProductCard = ({ product, onClick }) => {
  const { nombre, precio, imagen, marca, stock } = product;

  return (
    <article className="product" onClick={onClick}>
      <div className="product-image">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="product-content">
        <div className='container-tags'>
          <Tag name={marca} clase={marca} />
          {
            stock <= 40 && (
              <Tag name={"Pocas unidades"} clase={"warning-text"} />
            )

          }
          {
            stock > 100 && (
              <Tag name={"Nuevo"} clase={"important-text"} />
            )
          }
        </div>
        <h3 className="product-name">{nombre}</h3>
        <p className="product-price"> S/ {precio}</p>

        <button className="buy-btn" ><span>Agregar al carrito</span></button>
      </div>
    </article>
  );
};

export default ProductCard;
