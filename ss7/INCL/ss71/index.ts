// Các kiểu dữ liệu cơ bản P2
// Array: mảng
// Cách 1 : được khuyên dùng
let array : string[] = ["Hào", "Hạ", "Diệp"];
// cách 2 : Không đượng khuyên dùng
let array2 : Array<number>  = [1,2,3,4,5];
array.push("Hào");
console.log(array);

// Object : định nghĩa 1 đối tượng : thuộc tính và phương thức
let obj : {
    id: string,
    name: string,
    age: number,
    sex: boolean,
    getInfo: () => string,
};
obj = {
   id: "1",
   name: "Hào",
   age: 19,
   sex: true,
   getInfo : () => {
    return "id: " + obj.id + "| name :" + obj.name + "| age: " + obj.age + "| sex : " + obj.sex
   } 
}
console.log(obj.getInfo());

// enum: danh sách các hằng số
enum color {
    Red, blue, green = 100, pink, yellow
}
console.log(color.pink);
let Color : color = color.pink 

// never: function - không bao giờ xảy ra

// lỗi javascript
function error(message: string) : never{
    throw new Error(message);// ném lỗi trong JS
}

// vòng lặp vô hạn
function ìniniteLoop() : never {
    while(true) {
        console.log("Infinite Shop");
    }
}
// ìniniteLoop();


// unknow : chưa xác định kiểu dự liệu (tương tự any) 

let unkownVar : unknown = 1;
unkownVar = "Abc";
// console.log(unkownVar.lenght);

// toán tử hang (bit)

let a = 4&5;


// kiểu giao cắt: cho phép khi khai báo 1 danh sách kiểu dữ liệu tùy biến
let numberOrstring : number | string;
numberOrstring= 10;
numberOrstring = "10";

let nameStudent : (number|string) & (string|boolean) | (string[]);