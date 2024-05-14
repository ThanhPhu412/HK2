function sortEmployee(employees, sortOrder) {
  if (sortOrder === "Increase") {
    employees.sort((a, b) => a.age - b.age);
  } else if (sortOrder === "Decrease") {
    employees.sort((a, b) => b.age - a.age);
  } else {
    console.log("Invalid sortOrder. Please use 'Increase' or 'Decrease'.");
    return;
  }

  console.log("mảng xắp sếp:");
  employees.forEach((employee) => {
    console.log(`Name: ${employee.name}, Age: ${employee.age}`);
  });
}

// Ví dụ sử dụng hàm
const employees = [
  { name: "Nguyễn Văn A", age: 21 },
  { name: "Nguyễn Văn B", age: 30 },
  { name: "Nguyễn Văn C", age: 19 },
];

sortEmployee(employees, "Increase");
sortEmployee(employees, "Decrease");