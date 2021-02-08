export class HelloWorld {
  constructor(name = "") {
    this.name = name;
  }

  greet() {
    return `¡Hola Mundo con Webpack desde ${this.name}!`;
  }
}
