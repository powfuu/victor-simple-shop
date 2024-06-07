import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../shared/componentes/card/Card";
import carritoStore from "../../core/store/Store";

const Producto = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:2020/producto/${id}`)
			.then((response) => response.json())
			.then((data) => setProducto(data));
	}, [id]);

	const agregarAlCarrito = () => {
		carritoStore.addProductoCarrito(producto);
		alert("Producto agregado al carrito!");
	};

	return (
		<div>
			<h1 style={{ color: "red" }}>Victor Shop</h1>
			<Link to="/">Ir a home</Link>
			{producto && (
				<div onClick={agregarAlCarrito}>
					<Card
						nombre={producto.nombreProducto}
						precio={producto.precioProducto}
					/>
				</div>
			)}
		</div>
	);
};

export default Producto;
