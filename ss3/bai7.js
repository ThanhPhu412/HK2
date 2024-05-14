
function mergeObjects(...objects) {
   
  return Object.assign({}, ...objects);
}


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const mergedObject = mergeObjects(obj1, obj2, obj3);

console.log(mergedObject); 

// Gọi hàm với một bộ đối tượng khác
const objA = { name: 'Alice', age: 25 };
const objB = { age: 30, city: 'New York' };
const objC = { country: 'USA' };

const mergedObject2 = mergeObjects(objA, objB, objC);

console.log(mergedObject2); 