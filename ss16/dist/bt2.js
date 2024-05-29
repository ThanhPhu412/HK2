"use strict";
// Viết một hàm chung TypeScript chấp nhận hai đối số: một mảng thuộc loại bất kỳ và hai chỉ mục. Hàm sẽ hoán đổi các phần tử tại các chỉ mục đã chỉ định và trả về mảng đã sửa đổi
const TypeScript = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};
let arr = TypeScript([1, 2, 3, 4], 2, 0);
console.log(arr);