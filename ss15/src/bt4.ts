// Khai báo một biến kiểu boolean và gán giá trị. sử dụng biến đó làm điều kiện trong câu lệnh điều kiện, nếu đúng thì in ra xin chào, nếu sai thì in ra tạm biệt.

const Check = <T>(c: T) => {
  return c;
};

const check = Check<boolean>(false);

if (check) {
  console.log("chao");
} else {
  console.log("chao qq");
}