"use strict";
// Các kiểu dữ liệu cơ bản P2
// Array: mảng
// Cách 1 : được khuyên dùng
let array = ["Hào", "Hạ", "Diệp"];
// cách 2 : Không đượng khuyên dùng
let array2 = [1, 2, 3, 4, 5];
array.push("Hào");
console.log(array);
// Object : định nghĩa 1 đối tượng : thuộc tính và phương thức
let obj;
obj = {
    id: "1",
    name: "Hào",
    age: 19,
    sex: true,
    getInfo: () => {
        return "id: " + obj.id + "| name :" + obj.name + "| age: " + obj.age + "| sex : " + obj.sex;
    }
};
console.log(obj.getInfo());
// enum: danh sách các hằng số
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 100] = "green";
    color[color["pink"] = 101] = "pink";
    color[color["yellow"] = 102] = "yellow";
})(color || (color = {}));
console.log(color.pink);
let Color = color.pink;
// never: function - không bao giờ xảy ra
// lỗi javascript
function error(message) {
    throw new Error(message); // ném lỗi trong JS
}
// vòng lặp vô hạn
function ìniniteLoop() {
    while (true) {
        console.log("Infinite Shop");
    }
}
// ìniniteLoop();
// unknow : chưa xác định kiểu dự liệu (tương tự any) 
let unkownVar = 1;
unkownVar = "Abc";
// console.log(unkownVar.lenght);
// toán tử hang (bit)
let a = 4 & 5;
// kiểu giao cắt: cho phép khi khai báo 1 danh sách kiểu dữ liệu tùy biến
let numberOrstring;
numberOrstring = 10;
numberOrstring = "10";
let nameStudent;
