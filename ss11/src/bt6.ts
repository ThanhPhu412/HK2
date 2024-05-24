class Product{
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Tên: ${this.name} Giá tiền: ${this.price}`)
    } 
}

class Electronics extends Product {
    private brand: string;
    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        console.log(`Tên: ${this.name} Giá tiền: ${this.price} Thương hiệu: ${this.brand}`)
    } 
}

let OneProduct = new Product("Truyện", 10000);
console.log(OneProduct.getDescription());
let OneElectronics = new Electronics("Vòng cổ",3500000, "KKK");
console.log(OneElectronics.getDescription());