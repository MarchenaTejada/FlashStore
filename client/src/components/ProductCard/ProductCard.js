import React from 'react';
import './ProductCard.css';
import Tag from '../Tag/Tag';

const ProductCard = ({ product, onClick }) => {
  const { nombre, precio, imagen, marca, stock } = product;

  return (
    <article className="product">
      <div className="product-image" onClick={onClick}>
        <img src={imagen} alt={nombre} />
      </div>
      <div className="product-content">
        <div className='container-tags'>
          <Tag name={marca} clase={marca} />
          {
            stock <= 40 && (<Tag name={"Pocas unidades"} clase={"warning-text"} />)
          }
          {
            stock > 100 && (<Tag name={"Nuevo"} clase={"important-text"} />)
          }
        </div>
        <h3 className="product-name" onClick={onClick}>{nombre} </h3>
        <p className="product-price"> S/ {precio}</p>
        <section className='product-tools'>
          <button className="buy-btn" onClick={onClick}><span>Conoce más</span></button>
          <label class="add-favorite">
            <input type="checkbox"></input>
            <div class="checkmark">
              <svg viewBox="0 0 256 256">
                <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="20px" stroke="#008ecc" fill="none"></path></svg>
            </div>
          </label>
        </section>
      </div>
    </article>
  );
};

export default ProductCard;
