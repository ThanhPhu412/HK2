"use strict";
// class Shape {
//     chuVi: number;
//     dienTich: number;
//     constructor(_chuVi: number, _dienTich: number) {
//         this.chuVi = _chuVi;
//         this.dienTich = _dienTich;
//     }
//     showInfo() {
//         console.log("đây là hình học");
//     }
// }
// /*
//     * Lớp hình vuông kế thừa lopwps hình học
// */
// class Square extends Shape {
//     canh : number ;
//     constructor(_canh: number) {
//         super(0,0);
//         this.canh = _canh;
//     }
//     // override là từ khóa chú thích đây là phương thức ghi đè phương thức của lớp cha
//     override showInfo(): void {
//         console.log("đây là hình vuông");
//     }
//     calArea(){
//         this.dienTich = this.canh * this.canh;
//     }
// }
// /*
//     * Tạo lớp tam giác kế thừa hình học
// */
// class Triangle extends Shape{
//     a : number ;
//     b : number ;
//     c : number ;
//     constructor(_a: number, _b: number, _c: number) {
//         super(0,0);
//         this.a = _a;
//         this.b = _b;
//         this.c = _c;
//     }
//     override showInfo(): void {
//         console.log("đây là hình tam giác");
//     }
// }
// /*
//     * Tạo đối tượng hình học
// */  
// let shape : Shape = new Shape(0,0);
// let square : Shape = new Square(5);
// let triangle : Shape = new Triangle(3,4,5);
// /*
//     * Gọi phương thức showInfo()
// */
// // tính đa hình 
// shape.showInfo();
// square.showInfo(); // kiểm tra thằng này 
// triangle.showInfo();
// // chú ý
// // kiểu khai báo : kiểu dữ liệu lúc khai báo biến 
// // kiểu thực tế  : kiểu khởi tạo đối tượng
// // muốn gọi phương thức calArea() của đối tượng square 
// // let squareCopy = <Square> square;
// let squareCopy = square as Square;
// squareCopy.calArea()
// console.log(squareCopy.dienTich);
