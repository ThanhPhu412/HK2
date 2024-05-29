// Tổng quan : Decorator là 1 bộ trang trí cho phép can thiệp vào 1 đối tượng trong quá trình chạy (Runtime)

// function logger(target: any) {
//     // console.log(targer);
//     return class extends target {
//         address: string = "Tín Nghĩa";
//         id: number = 0;
//         name: string = "Hào";
//         age: number = 19;
//         constructor(id: number, name: string, age:number, address: string) {
//             super(id,name, age);
//         }
//         greet() {
//             return `Hello Bạn ${this.name}`;
//         }
//     }
// }

// Class decorator: Function = (constructor: any) => { }
// Lưu ý: nếu class decorator trả về 1 class mới thì đối tượng sẽ bị ghi đè bởi class đó
function logger<T extends {new (...args: any[]): {} }>(target: any) {
    return class extends target {
        address: string = "Tín Nghĩa";
        id: number = 0; // ghi đè các thuộc tính đã có
        name: string = "Hào"; // ghi đè các thuộc tính đã có
        age: number = 19; // ghi đè các thuộc tính đã có
        constructor(id: number, name: string, age:number, address: string) {
            super(id,name, age);
        }
        greet() {
            return `Hello Bạn ${this.name}`;
        }
    }
}

// Method Decorator


class Student {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age:number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello Bạn ${this.name}`;
    }
}

let OneStudent = new Student(1,"Hào",19);

// Các loại decorator08:59/-strong/-heart:>:o:-((:-h11:54  Hôm nay