"use strict";
let str = "Cho";
let arrn = [1, 2, 3, 4, 5];
const checka = (inp) => {
    if (typeof inp === "string") {
        return console.log(inp);
    }
    else if (Array.isArray(inp)) {
        inp.forEach((out) => console.log(out));
    }
};
checka(str);
checka(arrn);