"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Name: ${this.name} ID: ${this.id}`);
    }
}
let NewStudent = new Student("Hào", 1);
console.log(NewStudent.displayInfo());
