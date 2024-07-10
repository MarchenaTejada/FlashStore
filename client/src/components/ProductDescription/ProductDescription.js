import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import { useCartContext } from '../../contexts/CartContext';
import './ProductDescription.css';
import { FaCartShopping } from "react-icons/fa6";

const ProductDescription = () => {
    const { selectedProduct, quantity, incrementQuantity, decrementQuantity } = useContext(ProductContext);
    const { products, addProduct } = useCartContext();
    
    const handleAddToCart = () => {
        addProduct(selectedProduct.producto_id, quantity);
    };

    useEffect(() => {
        console.log('Productos en el carrito:', products);
    }, [products]);

    return (
        <div className='product-details'>
            <h2>Información del producto</h2>
            <div key={selectedProduct.producto_id} className="product-item">
                <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="product-image" />
                <section>
                    <h4>{selectedProduct.marca}</h4>
                    <h3>{selectedProduct.nombre}</h3>
                    <p>S/ {selectedProduct.precio}</p>
                    <div className="quantity-selector">
                        <button className="quantity-button decrease" onClick={decrementQuantity}>-</button>
                        <input type="number" className="quantity-input" value={quantity} readOnly />
                        <button className="quantity-button increase" onClick={incrementQuantity}>+</button>
                    </div>
                    <button className='add-to-car' onClick={handleAddToCart}> <FaCartShopping />Agregar al carrito</button>
                </section>
            </div>
            <h2>Especificaciones</h2>
            <table className="product-table">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{selectedProduct.nombre}</td>
                    </tr>
                    <tr>
                        <th>Descripción</th>
                        <td>{selectedProduct.descripcion}</td>
                    </tr>
                    <tr>
                        <th>Precio</th>
                        <td>{selectedProduct.precio}</td>
                    </tr>
                    <tr>
                        <th>Dimensiones</th>
                        <td>{selectedProduct.dimensiones}</td>
                    </tr>
                    <tr>
                        <th>Peso</th>
                        <td>{selectedProduct.peso}</td>
                    </tr>
                    <tr>
                        <th>Pantalla</th>
                        <td>{selectedProduct.pantalla}</td>
                    </tr>
                    <tr>
                        <th>Procesador</th>
                        <td>{selectedProduct.procesador}</td>
                    </tr>
                    <tr>
                        <th>Memoria</th>
                        <td>{selectedProduct.memoria}</td>
                    </tr>
                    <tr>
                        <th>Cámara trasera</th>
                        <td>{selectedProduct.camara_trasera}</td>
                    </tr>
                    <tr>
                        <th>Cámara frontal</th>
                        <td>{selectedProduct.camara_frontal}</td>
                    </tr>
                    <tr>
                        <th>Batería</th>
                        <td>{selectedProduct.bateria}</td>
                    </tr>
                    <tr>
                        <th>Sistema operativo</th>
                        <td>{selectedProduct.sistema_operativo}</td>
                    </tr>
                    <tr>
                        <th>Conectividad</th>
                        <td>{selectedProduct.conectividad}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductDescription;
