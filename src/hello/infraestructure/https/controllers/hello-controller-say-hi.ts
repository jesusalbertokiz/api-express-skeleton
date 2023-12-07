import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { config } from "../../../../config";
import { HelloSayHi } from "../../../aplication/hello-say-hi";
import { HelloFail } from "../../../domain/hello-fail";

export class HelloControllerSayHi {
	constructor(private readonly helloSayHi: HelloSayHi) {}

	async run(req: Request, res: Response) {
		const { name } = req.body;

		try {
			const hi = await this.helloSayHi.run(name);
			const sayHi = "Hi " + hi.name;
			//Creando token
			const token: string = jwt.sign({ name: hi.name }, config.SECRETJWT, {
				expiresIn: 60 * 60 * 24,
			});

			return res.status(200).header("auth", token).json(sayHi);
		} catch (error) {
			if (error instanceof HelloFail) {
				return res.status(400).json("I don't know why I can't say hi:(");
			}

			return res.status(500).json();
		}
	}
}
