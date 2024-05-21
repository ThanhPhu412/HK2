let arrss1: [string, number] = ["vn", 1000];
let arrss12: [string, number] = ["us", 2000];
let arrss13: [string, number] = ["uk", 3000];

const getShippingCost = (arr: [string, number]): any => {
  if (arr[0] === "vn") {
    console.log(arr[0] + ": " + arr[1]);
  } else if (arr[0] === "us") {
    console.log(arr[0] + ": " + arr[1]);
  } else if (arr[0] === "uk") {
    console.log(arr[0] + ": " + arr[1]);
  } else {
    console.log("khong co");
  }
};

getShippingCost(arrss1);
getShippingCost(arrss12);
getShippingCost(arrss13);