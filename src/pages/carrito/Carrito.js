import React, { useState } from "react";
import carritoStore from "../../core/store/Store";

const Carrito = () => {
	const { productosCarrito } = carritoStore;
	return <h1>{productosCarrito ? productosCarrito.length : 0}</h1>;
};

export default Carrito;
