import { config } from "../../config";
import { HelloSayHi } from "../aplication/hello-say-hi";
import { HelloRepository } from "../domain/hello-repository";
import { HelloControllerSayHi } from "./https/controllers/hello-controller-say-hi";
import { HelloMySQLRepository } from "./repository/HelloMySQLRepository";

const getHelloRepository = (): HelloRepository => {
  switch (config.databaseHello) {
    case "mySQL":
      return new HelloMySQLRepository();
    default:
      throw new Error("Invalid Database type");
  }
};

const helloRepository = getHelloRepository();
const helloSayHi = new HelloSayHi(helloRepository);

export const helloControllerSayHi = new HelloControllerSayHi(helloSayHi);
