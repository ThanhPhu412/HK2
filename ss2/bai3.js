function allPositiveNumbers(arr) {
    let check = arr.every((num) => num > 0);
    return check;
  }
  
  console.log(allPositiveNumbers([2, 4, 6, 8, 10]));
  console.log(allPositiveNumbers([2, 4, 6, -8, 10]));