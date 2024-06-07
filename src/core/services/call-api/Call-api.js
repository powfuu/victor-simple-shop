export const fetchDataBusqueda = (url, searchData) => {
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(searchData)
	}).then((response) => response.json());
};

export const fetchDataGet = (url) => {
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	}).then((response) => response.json());
};
