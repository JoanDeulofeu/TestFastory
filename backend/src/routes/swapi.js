const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

/**
 * Get star wars data with swapi
 */
const getSwapi = async (req, h) => {
	const res = await fetch(
		`https://swapi.dev/api/${req.params.category}/${req.params.id}/`
	).then((response) => {
		return response;
	});
	return await res.text();
};

module.exports = { getSwapi };
