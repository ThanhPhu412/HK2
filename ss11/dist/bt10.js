"use strict";
class Shape {
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let rectangleOne = new Rectangle(4, 8);
let circleOne = new Circle(2);
console.log("Diện tích hình chữ nhật:", rectangleOne.calculateArea());
console.log("Diện tích hình tròn:", circleOne.calculateArea());
console.log("Chu vi hình chữ nhật:", rectangleOne.calculatePerimeter());
console.log("Chu vi hình tròn:", circleOne.calculatePerimeter());
