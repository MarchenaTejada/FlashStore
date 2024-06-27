import React from 'react';

const ProductDescription = ({ products }) => {
  return (
    <div>
      <h2>Tienda</h2>
      {products.map(product => (
        <div key={product.producto_id} className="product-item">
          <img src={product.imagen} alt={product.nombre} className="product-image" />
          <div className="product-details">
            <h3>{product.nombre}</h3>
            <p>Stock: {product.stock}</p>
            <input type="number" defaultValue="1" min="1" max={product.stock} />
            <button>Comprar</button>
          </div>
        </div>
      ))}
      <h2>Información del producto</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Dimensiones</th>
            <th>Peso</th>
            <th>Pantalla</th>
            <th>Procesador</th>
            <th>Memoria</th>
            <th>Cámara trasera</th>
            <th>Cámara frontal</th>
            <th>Batería</th>
            <th>Sistema operativo</th>
            <th>Conectividad</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.producto_id}>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}</td>
              <td>{product.dimensiones}</td>
              <td>{product.peso}</td>
              <td>{product.pantalla}</td>
              <td>{product.procesador}</td>
              <td>{product.memoria}</td>
              <td>{product.camara_trasera}</td>
              <td>{product.camara_frontal}</td>
              <td>{product.bateria}</td>
              <td>{product.sistema_operativo}</td>
              <td>{product.conectividad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductDescription;
