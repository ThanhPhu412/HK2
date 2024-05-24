class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    showSpeed() {
        console.log(`Tên: ${this.name}  Tốc độ hiện tại: ${this.speed} ID: ${this.id}`);
    }
    slowDown(amount: number) {
        this.speed = Math.max(0, this.speed - amount)
        console.log(`Tên: ${this.name} Tốc độ giảm ${this.speed}`);
    }
    speedUp(amount: number) {
        this.speed += amount;
        console.log(`Tên: ${this.name} Tốc độ tăng ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }
    showSpeed() {
        console.log(`Tên: ${this.name}  Tốc độ hiện tại: ${this.speed} ID: ${this.id} Gear: ${this.gear}`);
    }
}
let newBicycle: Bicycle = new Bicycle("Xe đạp",100,2,5);
newBicycle.showSpeed();
newBicycle.slowDown(40);
newBicycle.speedUp(70);
