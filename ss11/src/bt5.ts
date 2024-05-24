class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    display() {
        console.log(this.getName()); 
    }
}

const dog = new Dog("Su");
console.log(dog.getName()); 
