import express from "express";

import { helloControllerSayHi } from "../dependencies";
import { validateToken, sayVerifyAuth } from "../../../utils/validatedToken";

const helloRouter = express.Router();

helloRouter.get("/", helloControllerSayHi.run.bind(helloControllerSayHi));
helloRouter.get("/auth", validateToken, sayVerifyAuth);

export { helloRouter };
