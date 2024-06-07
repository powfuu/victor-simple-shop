import React, { useState } from "react";
import "./Busqueda.css";
import { fetchDataBusqueda } from "../../../core/services/call-api/Call-api";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";

const Busqueda = () => {
	const navigate = useNavigate();
	const [productos, setProductos] = useState([]);

	const handleBusqueda = async (e) => {
		const data = await fetchDataBusqueda(
			"http://localhost:2020/busqueda/productos",
			{
				search: e.target.value
			}
		);
		setProductos(data);
	};

	const navegarAProducto = (id) => {
		navigate(`/producto/${id}`);
	};

	return (
		<div>
			<input
				onChange={handleBusqueda}
				type="text"
				placeholder="Buscar"
			/>
			{productos &&
				productos.length > 0 &&
				productos.map((producto) => (
					<div
						key={producto.id}
						onClick={() => navegarAProducto(producto.id)}>
						<Card
							nombre={producto.nombreProducto}
							precio={producto.precioProducto}
						/>
					</div>
				))}
		</div>
	);
};

export default Busqueda;
