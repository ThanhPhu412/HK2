function sum(arr) {
  return arr.reduce((temp, a) => temp + a, 0);
}
console.log(sum([1, 2, 3, 4, 5]));