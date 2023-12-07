import { Hello } from "../../domain/hello";
import { HelloRepository } from "../../domain/hello-repository";

export class HelloMySQLRepository implements HelloRepository {
  async sayHi(name: string): Promise<Hello> {
    const hi = new Hello(name);
    return Promise.resolve(hi);
  }
}
