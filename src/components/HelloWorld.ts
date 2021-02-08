
export class HelloWorld {

    private name: String;

    constructor (name: String ="") {
        this.name = name;
    }

    greet(): String {
        return `¡Hola Mundo con Webpack desde ${this.name}!`;
    }
}