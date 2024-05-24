"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    display() {
        console.log(this.getName());
    }
}
const dog = new Dog("Su");
console.log(dog.getName());
