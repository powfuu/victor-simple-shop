const carritoStore = {
	productosCarrito: [],
	addProductoCarrito: (item) => {
		carritoStore.productosCarrito.push(item);
	}
};
export default carritoStore;
