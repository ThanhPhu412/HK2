"use strict";
// interface All<T> {
//   id: number;
//   [index: number]: T;
// }
// let num: All<number> = [10, 2, 3];
// let str: All<string> = ["helo", "hi"];
const testType = (t) => {
    return t;
};
let num = testType(10);
let str = testType("hi");