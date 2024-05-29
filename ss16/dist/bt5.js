"use strict";
// Khai báo 3 biến, 2 biến có kiểu dữ liệu undefined và number, 1 biến không có kiểu dữ liệu. in 3 biến đã khai báo ra màn hình, kiểm tra kết quả và giải thích.
const Type = (check) => {
    return check;
};
let undefi = Type(undefined);
let numb = Type(10);
let not = Type("hi");
console.log(typeof undefi); //kiểu dữ liệu không xác định
console.log(typeof numb); // mình tự định nghĩa
console.log(typeof not); // js tự định nghĩa ngầm kiểu dữ liệu