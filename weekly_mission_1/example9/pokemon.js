class Pokemon {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`${this.name} is saying hello`);
    }

    sayMessage(message) {
        console.log(`${this.name} is saying ${message}`)
    }
}

module.exports = Pokemon