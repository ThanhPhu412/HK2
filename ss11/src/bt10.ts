class Shape {
    calculateArea(): number {
        return 0;
    }

    calculatePerimeter(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

let rectangleOne = new Rectangle(4, 8);
let circleOne = new Circle(2);


console.log("Diện tích hình chữ nhật:", rectangleOne.calculateArea());
console.log("Diện tích hình tròn:", circleOne.calculateArea());


console.log("Chu vi hình chữ nhật:", rectangleOne.calculatePerimeter());
console.log("Chu vi hình tròn:", circleOne.calculatePerimeter());
