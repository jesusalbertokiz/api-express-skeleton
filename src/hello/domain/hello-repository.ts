import { Hello } from "./hello";

export interface HelloRepository {
	sayHi(name: string): Promise<Hello>;
}
