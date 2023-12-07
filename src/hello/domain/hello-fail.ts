export class HelloFail extends Error {
  constructor() {
    super(`I can't say hi:("`);
  }
}
