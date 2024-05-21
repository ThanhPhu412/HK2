"use strict";
let arrss1 = ["vn", 1000];
let arrss12 = ["us", 2000];
let arrss13 = ["uk", 3000];
const getShippingCost = (arr) => {
    if (arr[0] === "vn") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else if (arr[0] === "us") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else if (arr[0] === "uk") {
        console.log(arr[0] + ": " + arr[1]);
    }
    else {
        console.log("khong co");
    }
};
getShippingCost(arrss1);
getShippingCost(arrss12);
getShippingCost(arrss13);