"use strict";
// tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// interdace- giao diện tính năng - 100% trừu tượng hỗ trợ đa kế thừa
// 1 lớp có thể nhiều interdace
// tạo 1 lớp ké thừa và triển khai
class Square1 {
    constructor(_canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        // phải triển khai toàn bộ các phương thức trừu tượng
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.get = () => { };
        this.canh = _canh;
    }
}
let square1 = new Square1(10);
console.log(square1.tinhChuVi());
/// abstract class chỉ có thể tạo class kế thừa phương thức trừu tượng ko thể tạo lớp con được
class Animals1 {
    constructor(species, sex, color) {
        this.species = species;
        this.sex = sex;
        this.color = color;
    }
    getInfo() {
        return `Animals ${this.species} ${this.sex} ${this.color}`;
    }
}
class D1 extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "từ từ thôi";
        };
    }
}
class c1 extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "huhuhu";
        };
    }
}
class Checken1 extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "aaaaaa";
        };
    }
}
let dog1 = new D("chode", false, "đen");
let cat1 = new c("Meooo", false, "đen");
let checken1 = new Checken("o o o", false, "đen");
console.log("ẳng ẳng ẳng " + dog.makeSound());
console.log("meo meo mèo meo" + cat.makeSound());
console.log("ò ó o ò o  " + checken.makeSound());