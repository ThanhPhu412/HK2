// cú pháp Ts : let/const <tên biến> : <kiểu dữ liệu> = <giá trị>

let a:number = 10;
let string:string = "hunghx";
let b:boolean = true;
let any: any = false;
any = "hunghx";
let empty : null = null;// có giá trị nhưng lại là rỗng
let undef: undefined=undefined;// ko có giá trị , chưa được gán

const showInfo =(info : string):void => {
    console.log(info);
}

// Tính tổng 2 số 
const sum = (a:number,b:number) : number => {
    return a+b
}

let numberOrString: number|string = "hung";//Số hoặc chuỗi

// Khai báo mảng
//c1
let arr:number[] = [1,2,3,4]
//c2
let arr2: Array<number> = [1,2,3,4]