const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 2020;

app.use(cors());
app.use(express.json());

//TODO:
//get -> obtener datos
//post -> enviar datos
//put -> actualizar datos
//delete -> eliminar datos

app.post("/busqueda/productos", (req, res) => {
	const productos = require("./json/productos.json");
	let filteredProductos = [];

	if (req.body.search) {
		filteredProductos = productos.filter((producto) =>
			producto.nombreProducto
				.toLowerCase()
				.includes(req.body.search.toLowerCase())
		);
	}

	res.json(filteredProductos);
});

app.get("/producto/:id", (req, res) => {
	const productos = require("./json/productos.json");
	const producto = productos.find(
		(producto) => producto.id === parseInt(req.params.id)
	);

	if (!producto) {
		res.status(404).json({ message: "Producto no encontrado" });
	} else {
		res.json(producto);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
