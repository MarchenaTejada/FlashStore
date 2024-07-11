import React from 'react';
import { useCartContext } from '../../contexts/CartContext';
import './Cart.css';

const Cart = () => {
    const { products, removeProduct, updateProductQuantity, getTotal } = useCartContext();
    return (
        <div className="cart-container">
          <span className="cart-count"><b>Total: </b>S/ {getTotal()}</span>
            {products.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                products.map((product) => (
                    <div key={product.producto.producto_id} className="cart-item">
                        <img src={product.producto.imagen} alt={product.producto.nombre} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{product.producto.nombre}</h3>
                            <h4>S/ {product.producto.precio}</h4>
                            <div className="cart-item-quantity">
                                <button onClick={() => updateProductQuantity(product.producto.producto_id, Math.min(product.cantidad - 1), 0)}>-</button>
                                <span>{product.cantidad}</span>
                                <button onClick={() => updateProductQuantity(product.producto.producto_id, Math.max(product.cantidad + 1), 10)}>+</button>
                            </div>
                            <button className="cart-item-remove" onClick={() => removeProduct(product.producto.producto_id)}>×</button>
                        </div>
                        <div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
