"use strict";

const Hapi = require("@hapi/hapi");
const { getSwapi } = require("./routes/swapi");

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT,
		host: process.env.HOST,
		routes: {
			cors: {
				origin: ["*"],
				headers: ["Authorization"],
				exposedHeaders: ["Accept"],
				additionalExposedHeaders: ["Accept"],
				maxAge: 60,
				credentials: true,
			},
		},
	});

	server.route({
		method: "GET",
		path: "/{category}/{id}",
		handler: getSwapi,
	});

	await server.start();
	console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
	console.log(err);
	process.exit(1);
});

init();
