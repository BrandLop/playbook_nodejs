export default class Pokemon{
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`${this.name} is saying hello`);
    }
}