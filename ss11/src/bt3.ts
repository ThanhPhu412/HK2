class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    id: number;
    constructor(name:string, id:number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Name: ${this.name} ID: ${this.id}`);
    }
}
let NewStudent = new Student("Hào",1);
console.log(NewStudent.displayInfo());