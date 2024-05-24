"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Tên: ${this.name} Giá tiền: ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        console.log(`Tên: ${this.name} Giá tiền: ${this.price} Thương hiệu: ${this.brand}`);
    }
}
let OneProduct = new Product("Truyện", 10000);
console.log(OneProduct.getDescription());
let OneElectronics = new Electronics("Vòng cổ", 3500000, "KKK");
console.log(OneElectronics.getDescription());
