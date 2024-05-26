// tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// interdace- giao diện tính năng - 100% trừu tượng hỗ trợ đa kế thừa
// 1 lớp có thể nhiều interdace

interface Ishape {
    // khai báo các thuộc tính và phương thức trừu tượng
    chuVi: number;
    dienTich: number;
    // phương thức trừu tượng
    tinhChuVi: () => number;
    tinhDienTich: () => number;
  }
  // tạo 1 lớp ké thừa và triển khai
  class Square1 implements Ishape {
    chuVi: number = 0;
    dienTich: number = 0;
    canh: number;
    constructor(_canh: number) {
      this.canh = _canh;
    }
    // phải triển khai toàn bộ các phương thức trừu tượng
    tinhChuVi = () => {
      return this.canh * 4;
    };
    tinhDienTich = () => {
      return this.canh * this.canh;
    };
    get = () => {};
  }
  let square1: Square1 = new Square1(10);
  console.log(square1.tinhChuVi());
  /// abstract class chỉ có thể tạo class kế thừa phương thức trừu tượng ko thể tạo lớp con được
  abstract class Animals1 {
    species: string;
    sex: boolean;
    color: string;
    constructor(species: string, sex: boolean, color: string) {
      this.species = species;
      this.sex = sex;
      this.color = color;
    }
    getInfo() {
      return `Animals ${this.species} ${this.sex} ${this.color}`;
    }
  
    abstract makeSound: () => string;
  }
  class D1 extends Animals {
    constructor(species: string, sex: boolean, color: string) {
      super(species, sex, color);
    }
    makeSound = () => {
      return "Từ từ thôi";
    };
  }
  class c1 extends Animals {
    constructor(species: string, sex: boolean, color: string) {
      super(species, sex, color);
    }
    makeSound = () => {
      return "huhuhu";
    };
  }
  class Checken1 extends Animals {
    constructor(species: string, sex: boolean, color: string) {
      super(species, sex, color);
    }
    makeSound = () => {
      return "aaaaaa";
    };
  }
  
  let dog1: Animals = new D("chode", false, "đen");
  let cat1: Animals = new c("Meooo", false, "đen");
  let checken1: Animals = new Checken("o o o", false, "đen");
  
  console.log("ẳng ẳng ẳng" + dog.makeSound());
  console.log("meo meo mèo meo" + cat.makeSound());
  console.log("ò ó o ò o " + checken.makeSound());