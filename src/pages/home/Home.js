import React from "react";
import Busqueda from "../../shared/componentes/busqueda/Busqueda";
import Carrito from "../carrito/Carrito";

const Home = () => {
	return (
		<div>
			<Busqueda />
			<h3>Carrito:</h3>
			<Carrito />
		</div>
	);
};

export default Home;
