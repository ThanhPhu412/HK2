// Viết một hàm nhận vào một Tuple chứa thông tin về một mặt hàng (tên, giá, số lượng). Tính tổng tiền dựa trên giá và số lượng.

let arr1: [string, number, number] = ["quần xì", 100, 10];

const tinhTong = (arr: [string, number, number]): number => {
  let sum = arr[1] * arr[2];
  console.log("sản phẩm " + arr[0] + "| tổng: " + sum);
  return sum;
};

tinhTong(arr1);