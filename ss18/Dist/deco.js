"use strict";
// Tổng quan : decorator là 1 đối tượng trang trí cho phép can hiệp vào đối tượng trong quá trình chạy runtime
//bản chất của decorator là 1 function
class student {
    constructor(id, name, age) {
        thisid = id;
        thisname = name;
        thisage.age = age;
    }
    greet() {
        return `hello bạn ${this.name}`;
    }
}
