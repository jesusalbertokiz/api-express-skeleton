import { Hello } from "../domain/hello";
import { HelloFail } from "../domain/hello-fail";
import { HelloRepository } from "../domain/hello-repository";

export class HelloSayHi {
	constructor(private readonly helloRepository: HelloRepository) {}

	async run(name: string): Promise<Hello> {
		const hello = await this.helloRepository.sayHi(name);

		if (!hello) {
			throw new HelloFail();
		}

		return hello;
	}
}
