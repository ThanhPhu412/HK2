// interface All<T> {
//   id: number;
//   [index: number]: T;
// }
// let num: All<number> = [10, 2, 3];
// let str: All<string> = ["helo", "hi"];
const testType = <T>(t: T): T => {
  return t;
};
let num = testType<number>(10);
let str = testType<string>("hi");