import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

import { config } from "./config";
import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { helloRouter } from "./hello/infraestructure/https/hello-routes";

function main() {
	const app = express();
	app.use(morgan("dev"));
	app.use(bodyParser.json());
	app.use("/hello", helloRouter);

	const { port } = config.server;

	app.listen(port, () => {
		console.log(`[APP] - Starting application on port ${port}`);
	});
}

main();
