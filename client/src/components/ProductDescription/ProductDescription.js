import React from 'react';

const ProductDescription = ({ product }) => {
  if (!product) {
      return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Información del producto</h2>
      <div key={product.producto_id} className="product-item">
        <img src={product.imagen} alt={product.nombre} className="product-image" />
        <div className="product-details">
          <h3>{product.nombre}</h3>
          <p>Stock: {product.stock}</p>
          <input type="number" defaultValue="1" min="1" max={product.stock} />
          <button>Comprar</button>
        </div>
      </div>
      <h2>Especificaciones</h2>
      <table className="product-table">
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{product.nombre}</td>
          </tr>
          <tr>
            <th>Descripción</th>
            <td>{product.descripcion}</td>
          </tr>
          <tr>
            <th>Precio</th>
            <td>{product.precio}</td>
          </tr>
          <tr>
            <th>Dimensiones</th>
            <td>{product.dimensiones}</td>
          </tr>
          <tr>
            <th>Peso</th>
            <td>{product.peso}</td>
          </tr>
          <tr>
            <th>Pantalla</th>
            <td>{product.pantalla}</td>
          </tr>
          <tr>
            <th>Procesador</th>
            <td>{product.procesador}</td>
          </tr>
          <tr>
            <th>Memoria</th>
            <td>{product.memoria}</td>
          </tr>
          <tr>
            <th>Cámara trasera</th>
            <td>{product.camara_trasera}</td>
          </tr>
          <tr>
            <th>Cámara frontal</th>
            <td>{product.camara_frontal}</td>
          </tr>
          <tr>
            <th>Batería</th>
            <td>{product.bateria}</td>
          </tr>
          <tr>
            <th>Sistema operativo</th>
            <td>{product.sistema_operativo}</td>
          </tr>
          <tr>
            <th>Conectividad</th>
            <td>{product.conectividad}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDescription;
