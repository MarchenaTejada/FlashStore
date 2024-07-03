import React, { useState }from 'react';
import './ProductDescription.css'
import { SideBySideMagnifier } from 'react-image-magnifiers';
import { FaCartShopping } from "react-icons/fa6";

const ProductDescription = ({ product }) => {

		const [quantity, setQuantity] = useState(1);
	 
		const handleIncrement = () => {
		  setQuantity(prevQuantity => prevQuantity + 1);
		};
	 
		const handleDecrement = () => {
		  setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); 
		};
	 
	return (
		<div className='product-details'>
			<h2>Información del producto</h2>
			<div key={product.producto_id} className="product-item">
				<SideBySideMagnifier
					imageSrc={product.imagen}
					largeImageSrc={product.imagen}
					alwaysInPlace={true}
					fillAvailableSpace={false}
					fillAlignTop={false}
					zoomContainerBorder="1px solid #ccc"
					zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,0.2)"
				/>
				<section>
					<h4>{product.marca}</h4>
					<h3>{product.nombre}</h3>
					<p>S/ {product.precio}</p>
					<div class="quantity-selector">
						<button class="quantity-button decrease" onClick={handleDecrement}>-</button>
						<input type="number" class="quantity-input" value={quantity}></input>
						<button class="quantity-button increase" onClick={handleIncrement}>+</button>
					</div>
					<button className='add-to-car'> <FaCartShopping />Agregar al carrito</button>
				</section>
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
