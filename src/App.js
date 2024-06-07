import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Producto from "./pages/producto/Producto";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/producto/:id"
					element={<Producto />}
				/>
				<Route
					path="*"
					element={<Navigate to="/home" />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
