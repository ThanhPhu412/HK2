function sum(arr) {
    let total = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            total += num;
        }
    }
    return total;
}

let numbers = [1, 2, 4, 5, 6];
let evenSum = sum(numbers);
console.log("Tổng các số chẵn là:", evenSum);
